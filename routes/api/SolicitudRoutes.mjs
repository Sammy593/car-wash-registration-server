import express from 'express';
import * as solicitudController from '../../app/controllers/SolicitudController.mjs';

const router = express.Router();

router.post('/', solicitudController.create);
router.get('/', solicitudController.getAll);
router.get('/getPendientes', solicitudController.getPendientes);
router.post('/rechazarRegistro', solicitudController.rechazarRegistro);
router.post('/aceptarRegistro', solicitudController.aceptarRegistro);
router.post('/actualizarRegistro', solicitudController.actualizarRegistro);
router.post('/confirmarRegistro', solicitudController.confirmarRegistro);

export default router;