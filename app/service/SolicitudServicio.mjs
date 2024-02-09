import Solicitud from '../model/Solicitud.mjs';

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

export const getTabla1 = async () => {
    try {
        //Obtiene los registro con estado pendiente y rechazado
        return await Solicitud.find({estado: { $in: ["Pendiente", "Rechazado"] }});
    } catch (err) {
        throw new Error(`Error al buscar: ${err.message}`);
    }
};


export const rechazarRegistro = async (idSolicitud) => {
    try {
        return await Solicitud.findByIdAndUpdate(idSolicitud, { $set: { estado: 'Rechazado' } });
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