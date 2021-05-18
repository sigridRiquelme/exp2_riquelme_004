





$("#formtrabajo").validate({
    rules: {
            telefono: "required",
            nombres: "required",
                
            apellidos: "required",
            correo: {
                required: true,
                email: true
            },
            cargo: "required",
            fecha: "required",
            mensaje: "required"


            

    }//reglas
    





    
})