import express from 'express';
import * as solicitudController from '../../app/controllers/SolicitudController.mjs';
import multer from 'multer';

const storage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.mimetype.split('/')[1]);
    }
  });
  
  const upload = multer({ storage });

const router = express.Router();
router.post('/actualizarPagoRegistro', upload.single('archivo'), solicitudController.actualizarPagoRegistro);

router.post('/', solicitudController.create);
router.get('/', solicitudController.getAll);
router.get('/getById/:id', solicitudController.getById);
router.get('/getTabla1', solicitudController.getTabla1);
router.get('/getTablaAceptados', solicitudController.getTablaAceptados);
router.post('/rechazarRegistro', solicitudController.rechazarRegistro);
router.post('/impagoRegistro', solicitudController.impagoRegistro);
router.post('/pagoRegistro', solicitudController.pagoRegistro);
router.post('/aceptarRegistro', solicitudController.aceptarRegistro);
router.post('/actualizarRegistro', solicitudController.actualizarRegistro);
router.post('/confirmarRegistro', solicitudController.confirmarRegistro);

export default router;