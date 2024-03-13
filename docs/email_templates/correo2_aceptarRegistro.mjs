export const email2 = (idSolicitud) => { return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Car Wash</title>
</head>
<body style="margin: 0; padding: 0;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
        <tr>
            <td align="center">
                <table border="0" cellpadding="0" cellspacing="0" width="600" style="max-width: 600px;">
                    <tr>
                        <td align="center" bgcolor="#ffffff" style="padding: 40px 0;">
                            <table border="0" cellpadding="0" cellspacing="0" width="80%">
                                <tr>
                                    <td align="center" style="font-size: 70px;">🚘</td>
                                </tr>
                                <tr>
                                    <td align="center" style="padding: 20px 0; font-family: Arial, sans-serif; font-weight: bold; font-size: 30px;">CAR WASH</td>
                                </tr>
                                <tr>
                                    <td align="center" style="padding: 20px 0; font-family: Arial, sans-serif; font-weight: 800; font-size: 24px;">Gracias por preferirnos!</td>
                                </tr>
                                <tr>
                                    <td align="center" style="padding: 0 20px; font-family: Arial, sans-serif; font-size: 17px;">Su solicitud ha sido aceptada, por favor adjunte su comprobante de pago para continuar con el proceso</td>
                                </tr>
                                <tr>
                                    <td align="center" style="padding: 20px 0;">
                                        <table border="0" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td align="center" bgcolor="#0078d7" style="border-radius: 3px;">
                                                    <a href="http://52.22.2.130/calificacionPago;_id=${idSolicitud}" target="_blank" style="display: inline-block; padding: 10px 20px; font-family: Arial, sans-serif; font-size: 16px; color: #ffffff; text-decoration: none; border-radius: 3px;">Ir a formulario</a>
                                                    </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
        </html>
        
        `;};