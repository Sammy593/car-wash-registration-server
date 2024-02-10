import nodemailer from 'nodemailer';
import {email1} from '../docs/email_templates/correo1.mjs'

export const sendGmail = async (idSolicitud, correo) => {
    try {

    let config = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port: 587,
        auth:{
            user: process.env.USER_MAIL_SERVER1,
            pass:process.env.PSWD_MAIL_SERVER1
        }
    });

    const opciones = {
        from:'Car Wash Registration',
        subject: 'Corrección de datos de solicitud',
        to: correo,
        html: email1(idSolicitud)
    };

    config.sendMail(opciones,function(error, result){
        if(error){
            throw new Error('Error al enviar email');
        }
        return result;
    })
    } catch (err) {
        throw new Error(`Error al enviar: ${err.message}`);
    }
};