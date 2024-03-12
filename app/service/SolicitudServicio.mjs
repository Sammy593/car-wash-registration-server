import Solicitud from '../model/Solicitud.mjs';
import { sendGmail } from '../../config/email.mjs';
import { unlink } from 'fs';

export const create = async (data) => {
    try {
        return await Solicitud.create(data);
    } catch (err) {
        throw new Error(`Error al crear: ${err.message}`);
    }
};

export const getAll = async () => {
    try {
        return await Solicitud.find();
    } catch (err) {
        throw new Error(`Error al obtener lista: ${err.message}`);
    }
};

export const getById = async (idSolicitud) => {
    try {
        const solicitud = await Solicitud.findOne({ _id: idSolicitud });
        if (!solicitud) {
          throw new Error('Solicitud no encontrada');
        }
        return solicitud;
    } catch (err) {
        throw new Error(`Error al obtener lista: ${err.message}`);
    }
};

export const getTabla1 = async () => {
    try {
        //Obtiene los registro con estado pendiente y rechazado
        return await Solicitud.find({estado: { $in: ["Pendiente", "Rechazado"] }});
    } catch (err) {
        throw new Error(`Error al buscar: ${err.message}`);
    }
};

export const getTablaAceptados = async () => {
    try {
        //Obtiene los registro con estado pendiente y rechazado
        return await Solicitud.find({estado: { $in: ["Aceptado", "Pagado", "Impago"] }});
    } catch (err) {
        throw new Error(`Error al buscar: ${err.message}`);
    }
};

/* Tabla pendientes:
Esta funcion cambia a estado Rechazado en registro y envia correo electronico para corregir datos
*/
export const rechazarRegistro = async (idSolicitud) => {
    try {
        const solicitud = await Solicitud.findByIdAndUpdate(idSolicitud, { $set: { estado: 'Rechazado' } });
        //enviar correo
        return await sendGmail(idSolicitud, solicitud.email, 1);
    } catch (err) {
        throw new Error(`Error al crear: ${err.message}`);
    }
};
//Esta funcion se activa en el formulario de actualizar registro, el estado vuelve a Pendiente
export const actualizarRegistro = async (solicitudId, data) => {
    try {
        const actualizado = await Solicitud.findByIdAndUpdate(solicitudId, data, { new: true });
        if (!actualizado) {
            throw new Error('Solicitud no encontrada');
        }
        return actualizado;
    } catch (err) {
        throw new Error(`Error al actualizar: ${err.message}`);
    }
};
/* Tabla pendientes:
Esta funcion acepta el registro y cambia a estado impago para enviar el correo de comprobante de pago,
los registro con impago pasan a la tabla Aceptados, no se pueden realizar acciones hasta que el cliente suba su comprobante
*/ 
export const impagoRegistro = async (idSolicitud) => {
    try {
        const solicitud = await Solicitud.findByIdAndUpdate(idSolicitud, { $set: { estado: 'Impago' } });
        return await sendGmail(idSolicitud, solicitud.email, 2);
    } catch (err) {
        throw new Error(`Error al crear: ${err.message}`);
    }
};

/* Esta funcion se activa desde el formulario calificacion y envio de comprbante,
envia la calificacion y sube el archivo de comprobante, llama a la funcion pegoRegistro 
que indica que el usuario ha subido su comprobante y está listo para ser revisado en la tabla Aceptados
Tambien se activa en el formulario de actualizar el comprobante de pago rechazado.
*/

export const actualizarPagoRegistro = async (solicitudId, data) => {
    try {
        const solicitud = await Solicitud.findOne({ _id: solicitudId });
        if (!solicitud) {
          throw new Error('Solicitud no encontrada');
        }
        const calificacion = data.body.calificacion;

        // Guardar el archivo y otros datos en MongoDB
        solicitud.file = data.file.path;
        solicitud.filename = data.file.filename;
        solicitud.calificacion = calificacion;
        solicitud.estado = 'Pagado';
        
        await solicitud.save();
        return { actualizado: solicitud };
    } catch (err) {
        throw new Error(`Error al actualizar: ${err.message}`);
    }
};
//Esta funcion e activa al rechazar un pago, se elimina el archivo y se envia un correo para actualizar el pago y calificacion
export const rechazarPagoAndActualizar = async (idSolicitud) => {
    try {
        const solicitud = await Solicitud.findByIdAndUpdate(idSolicitud, { $set: { estado: 'Impago', file: '', filename: '' } });
        unlink(solicitud.file, (error) => {
            if (error) {
              console.error('Error al eliminar el archivo:', error);
            } else {
              console.log('Archivo eliminado con éxito');
            }
          });
        return await sendGmail(idSolicitud, solicitud.email, 4);
    } catch (err) {
        throw new Error(`Error al crear: ${err.message}`);
    }
};

/* Tabla Aceptados:
esta funcion e activa al aceptar el comprobante de pago y envia un correo de notificacion
*/
export const aceptarRegistro = async (idSolicitud) => {
    try {
        await sendGmail(idSolicitud, solicitud.email, 3);
        return await Solicitud.findByIdAndUpdate(idSolicitud, { $set: { estado: 'Aceptado' } });
    } catch (err) {
        throw new Error(`Error al crear: ${err.message}`);
    }
};