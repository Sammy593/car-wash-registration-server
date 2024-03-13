import { format } from 'date-fns';
import { v4 as uuid } from 'uuid';

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const logEvents = async (message, logName) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;

    try {
        const currentDir = path.dirname(fileURLToPath(import.meta.url));
        const logsDir = path.join(currentDir, '..', 'logs');

        if (!fs.existsSync(logsDir)) {
            await fs.promises.mkdir(logsDir, { recursive: true });
        }

        await fs.promises.appendFile(path.join(logsDir, logName), logItem);
    } catch (err) {
        console.log(err);
    }
};

const logger = (req, res, next) => {
    logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`, 'reqLog.txt');
    console.log(`${req.method} ${req.path}`);
    next();
};

export { logger, logEvents };
