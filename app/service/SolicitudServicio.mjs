import Solicitud from '../model/Solicitud.mjs';
import { sendGmail } from '../../config/email.mjs';

export const actualizarPagoRegistro = async (solicitudId, data) => {
    try {
        const solicitud = await Solicitud.findOne({ _id: solicitudId });
        if (!solicitud) {
          throw new Error('Solicitud no encontrada');
        }
        const calificacion = data.body.calificacion;

        // Guardar el archivo y otros datos en MongoDB
        solicitud.file = data.file.path;
        solicitud.calificacion = calificacion;
        
        await solicitud.save();
        //fs.unlinkSync(archivoPath);
        await pagoRegistro(solicitudId);
        return { actualizado: solicitud };
    } catch (err) {
        throw new Error(`Error al actualizar: ${err.message}`);
    }
};

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


export const rechazarRegistro = async (idSolicitud) => {
    try {
        const solicitud = await Solicitud.findByIdAndUpdate(idSolicitud, { $set: { estado: 'Rechazado' } });
        //enviar correo
        return await sendGmail(idSolicitud, solicitud.email, 1);
    } catch (err) {
        throw new Error(`Error al crear: ${err.message}`);
    }
};

export const impagoRegistro = async (idSolicitud) => {
    try {
        const solicitud = await Solicitud.findByIdAndUpdate(idSolicitud, { $set: { estado: 'Impago' } });
        return await sendGmail(idSolicitud, solicitud.email, 2);
    } catch (err) {
        throw new Error(`Error al crear: ${err.message}`);
    }
};

export const pagoRegistro = async (idSolicitud) => {
    try {
        return await Solicitud.findByIdAndUpdate(idSolicitud, { $set: { estado: 'Pagado' } });
    } catch (err) {
        throw new Error(`Error al crear: ${err.message}`);
    }
};

export const aceptarRegistro = async (idSolicitud) => {
    try {
        return await Solicitud.findByIdAndUpdate(idSolicitud, { $set: { estado: 'Aceptado' } });
    } catch (err) {
        throw new Error(`Error al crear: ${err.message}`);
    }
};

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

export const confirmarRegistro = async (idSolicitud) => {
    try {
        return await Solicitud.findByIdAndUpdate(idSolicitud, { $set: { estado: 'En proceso' } });
    } catch (err) {
        throw new Error(`Error al crear: ${err.message}`);
    }
};