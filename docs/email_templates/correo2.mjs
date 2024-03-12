export const email2 = (idSolicitud) => { return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Car Wash</title>
</head>
<body>
    <main style="display: flex;">
        <section style="display:flex; flex-direction:column; align-items:center;">
            <article class="logo_art" style="display:flex; flex-direction:column; align-items:center;">
                <span class="logo_img" style="font-size: 70px;filter: drop-shadow(16px 16px 20px rgb(0, 128, 255)) invert(5%);">🚘</span>
                <span class="logo_text" style="font-weight: 900;font-size: 30px;font-family:'Franklin Gothic Medium'">CAR WASH</span>
            </article>
            <article class="content_art" style="display: flex;flex-direction: column;align-items: center; padding: 20px; text-align: center;">
                <div class="text_container" style="display: flex;flex-direction: column;align-items: center;margin-bottom: 10px;">
                    <span style="font-weight: 800;font-size: 24px;font-family: 'Arial Narrow';">Gracias por preferirnos!</span><br>
                    <span style="font-size: 17px;font-family: 'Arial';">Su solicitud ha sido aceptada, por favor adjunte su comprobante de pago para continuar con el proceso</span>
                </div>
                <div class="option_container">
                    <div class="button" style="background-color: #0078d7;height: 40px;display: flex;justify-content: center;align-items: center;font-family: sans-serif;">
                        <a style="color:white; text-decoration:none;" href="http://52.22.2.130/hrms#/calificacionPago;_id=${idSolicitud}">Ir a formulario</a>
                    </div>
                </div>
            </article>
        </section>
        <nav><img height="100%" width="400px" src="https://cleansystem.com.ec/wp-content/uploads/2020/02/lavado-de-autos-scaled.jpg" alt=""></nav>
    </main>
</body>
</html>`;};