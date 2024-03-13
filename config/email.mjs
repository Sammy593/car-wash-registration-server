import nodemailer from 'nodemailer';
import {email1} from '../docs/email_templates/correo1_rechazarRegistro.mjs';
import {email2} from '../docs/email_templates/correo2_aceptarRegistro.mjs';
import {email3} from '../docs/email_templates/correo3_aceptarPago.mjs';
import {email4} from '../docs/email_templates/correo4_rechazarPago.mjs';

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

    let opciones;
    switch(tipo){
        case 1:
            opciones = {
                from:'Car Wash Registration',
                subject: 'Corrección de datos de solicitud',
                to: correo,
                html: email1(idSolicitud)
            };
            break;
        case 2:
            opciones = {
                from:'Car Wash Registration',
                subject: 'Realizar pago',
                to: correo,
                html: email2(idSolicitud)
            };
            break;
        case 3:
            opciones = {
                from:'Car Wash Registration',
                subject: 'Pago aceptado',
                to: correo,
                html: email3()
            };
            break;
        case 4:
            opciones = {
                from:'Car Wash Registration',
                subject: 'Pago rechazado',
                to: correo,
                html: email4(idSolicitud)
            };
            break;
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