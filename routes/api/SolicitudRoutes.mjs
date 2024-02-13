import express from 'express';
import * as solicitudController from '../../app/controllers/SolicitudController.mjs';

const router = express.Router();

router.post('/', solicitudController.create);
router.get('/', solicitudController.getAll);
router.get('/getById/:id', solicitudController.getById);
router.get('/getTabla1', solicitudController.getTabla1);
router.get('/getTablaAceptados', solicitudController.getTablaAceptados);
router.post('/rechazarRegistro', solicitudController.rechazarRegistro);
router.post('/impagoRegistro', solicitudController.impagoRegistro);
router.post('/aceptarRegistro', solicitudController.aceptarRegistro);
router.post('/actualizarRegistro', solicitudController.actualizarRegistro);
router.post('/confirmarRegistro', solicitudController.confirmarRegistro);

export default router;