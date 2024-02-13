import nodemailer from 'nodemailer';
import {email1} from '../docs/email_templates/correo1.mjs';
import {email2} from '../docs/email_templates/correo2.mjs'

export const sendGmail = async (idSolicitud, correo, tipo) => {
    try {

    let config = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port: 587,
        auth:{
            user: process.env.USER_MAIL_SERVER1,
            pass:process.env.PSWD_MAIL_SERVER1
        }
    });

    var opciones;

    if(tipo == 1){
            opciones = {
            from:'Car Wash Registration',
            subject: 'Corrección de datos de solicitud',
            to: correo,
            html: email1(idSolicitud)
        };
    }else{
            opciones = {
            from:'Car Wash Registration',
            subject: 'Realizar pago',
            to: correo,
            html: email2(idSolicitud)
        };
    }

    

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