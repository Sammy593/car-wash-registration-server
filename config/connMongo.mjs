import mongoose from 'mongoose';

try {
  // Connect to MongoDB - Configurar valor de variable de entorno en archivo .env
  //console.log(process.env.MONGO_URL_LOCAL);MONGO_URL_ATLAS2)
  await mongoose.connect(process.env.MONGO_URL_ATLAS2)
                .then(() => console.log("DB funcionando"))
                .catch((error) => console.error(error));
                
} catch (error) {
  console.error('Error connecting to MongoDB:', error);
  
}
