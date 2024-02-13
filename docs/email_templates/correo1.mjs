export const email1 = (idSolicitud) => { return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Car Wash</title>
    <style>
        main{
            display: flex;
        }

        section{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .logo_art{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .logo_img{
            font-size: 70px;
            filter: drop-shadow(16px 16px 20px rgb(0, 128, 255)) invert(5%);
        }
        .logo_text{
            font-weight: 900;
            font-size: 30px;
            font-family:'Franklin Gothic Medium';
        }

    
        .content_art{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
            text-align: center;
        }
        .text_container{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 10px;
        }

        .text_container span:nth-child(1){
            font-weight: 800;
            font-size: 24px;
            font-family: 'Arial Narrow';
        }

        .text_container span:nth-child(3){
            font-size: 17px;
            font-family: 'Arial';
        }

        .option_container{
            display: flex;
            flex-direction: column;
        }

        .option_container span{
            font-family: sans-serif;
            font-size: 13px;
        }

        .button{
            background-color: #0078d7;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: sans-serif;
        }

        .button a{
            color: white;
            text-decoration: none;
        }
        img{
            height: 100%;
        }
    </style>
</head>
<body>
    <main>
        <section>
            <article class="logo_art">
                <span class="logo_img">🚘</span>
                <span class="logo_text">CAR WASH</span>
            </article>
            <article class="content_art">
                <div class="text_container">
                    <span>Gracias por preferirnos!</span><br>
                    <span>Su solicitud ha sido revisada, sin embargo necesitamos que proporcione sus datos correctos para continuar con el proceso</span>
                </div>
                <div class="option_container">
                    <span>Actualiza tus datos aqui ⬇</span>
                    <div class="button">
                        <a href="http://localhost:4200/actualizarDatos;_id=${idSolicitud}">Ir a formulario</a>
                    </div>
                </div>
            </article>
        </section>
        <nav><img width="400px" src="https://cleansystem.com.ec/wp-content/uploads/2020/02/lavado-de-autos-scaled.jpg" alt=""></nav>
    </main>
</body>
</html>`;};