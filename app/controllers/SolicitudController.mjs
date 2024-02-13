import * as clienteSolicitudesModule from '../service/SolicitudServicio.mjs';

export const create = async (req, res) => {
    try {
        const nuevo = await clienteSolicitudesModule.create(req.body);
        res.status(201).json(nuevo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const getAll = async (req, res) => {
    try {
        const lista = await clienteSolicitudesModule.getAll();
        res.status(200).json(lista);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const getById = async (req, res) => {
    try {
        const dato = await clienteSolicitudesModule.getById(req.params.id);
        res.status(200).json(dato);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const getTabla1 = async (req, res) => {
    try {
        const lista = await clienteSolicitudesModule.getTabla1();
        res.status(200).json(lista);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const getTablaAceptados = async (req, res) => {
    try {
        const lista = await clienteSolicitudesModule.getTablaAceptados();
        res.status(200).json(lista);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


export const rechazarRegistro = async (req, res) => {
    try {
        const solicitud = await clienteSolicitudesModule.rechazarRegistro(req.body.idSolicitud);
        res.status(200).json(solicitud);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const impagoRegistro = async (req, res) => {
    try {
        const solicitud = await clienteSolicitudesModule.impagoRegistro(req.body.idSolicitud);
        res.status(200).json(solicitud);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const aceptarRegistro = async (req, res) => {
    try {
        const solicitud = await clienteSolicitudesModule.aceptarRegistro(req.body.idSolicitud);
        res.status(200).json(solicitud);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const actualizarRegistro = async (req, res) => {
    try {
        const solicitud = await clienteSolicitudesModule.actualizarRegistro(req.body.idSolicitud, req.body);
        res.status(200).json(solicitud);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const confirmarRegistro = async (req, res) => {
    try {
        const solicitud = await clienteSolicitudesModule.confirmarRegistro(req.body.idSolicitud);
        res.status(200).json(solicitud);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};