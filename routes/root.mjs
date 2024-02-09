import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

import solicitudRoutes from './api/SolicitudRoutes.mjs';

const router = express.Router();

router.get('^/$|/index(.html)?', (req, res) => {
    const currentDir = path.dirname(fileURLToPath(import.meta.url));
    const indexPath = path.join(currentDir, '..', 'views', 'index.html');
    res.sendFile(indexPath);
});

router.use('/solicitud', solicitudRoutes);

export default router;
