import mongoose from 'mongoose';

const solicitudSchema = new mongoose.Schema({
    nombre_cliente: {
        type: String
    },
    cedula: {
        type: String
    },
    direccion: {
        type: String
    },
    email: {
        type: String
    },
    marca_vehiculo: {
        type: String
    },
    modelo_vehiculo: {
        type: String
    },
    fecha_ingreso: {
        type: String
    },
    hora_ingreso: {
        type: String
    },
    empleado_a_cargo: {
        type: String
    },
    tipo_lavado: {
        type: String
    },
    estado: {
        type: String
    }
});

const Solicitud = mongoose.model('Solicitud', solicitudSchema);


export default Solicitud;
