const {Schema, model } = require('mongoose')

const UsuarioSchema = ({
    nombre:{
        type: String,
        unique:true,
        required:[true, 'El nombre de usuario es requirido']
    },
    apellido:{
        type: String,
        required:[true, 'El nombre de usuario es requirido']
    },
    tipo_documento: {
        type:String,
        required:[true, 'El tipo de documento es requerido'],
        enum:['DNI', 'Cedula', 'Pasaporte'],
    },
    numero_documento: {
        type:Number,
        unique:true,
        required:[true, 'El numero de documento es requerido'],
       
    },
    telefono: {
        type:Number,
        required:[true, 'El telefono es requerido'],
       
    },
    correo: {
        type:String,
        required:[true, 'El correo es requerido'],
       
    },
    ciudad: {
        type:String,
        required:[true, 'La ciudad es requerido'],
       
    },
    nombre_usuario: {
        type:String,
        required:[true, 'El nombre de usuario es requerido'],
       
    },


    password:{
        type:String,
        required:[true, 'El password es requeridod'],
        min:[4, 'El password debe contener mínimo 4 caracteres'],
        max:[10, 'El password debe contener máximo 10 caracteres']
    },

    rol: {
        type:String,
        required:[true, 'El rol es requerido'],
        enum:['Admin', 'Usuario'],
    },

    estado: {
        type:Boolean,
        default:true
    },
    
})

module.exports = model('Usuario', UsuarioSchema)
