const User = require('../models/user');



exports.getAllUsers = async (req, res)=>{
    try {
        const users = await User.findAll();
        res.status(200).json({
            ok:true,
            users
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok:false,
            message:'Error al obtener los datos: ',error,
        })
    }
}






















/*exports.getAllUsers = async (req, res)=>{
    
    try {
        const users = await User.findAll();
        res.status(200).json({
            ok:true,
            users
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error Server'
        })
    }
}
*/
exports.createUser = async(req, res)=>{
    try {
        console.log(req.body);
        const {username, password, email} = req.body;

        const nuevoUsuario={
            username,
            password,
            email
        }
        const user = await User.create(nuevoUsuario);

        res.status(201).json({
            ok:true,
            user
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message:'Server Error'
        })
    }
}

exports.updateUser = async (req, res) => {
    const {id} = req.params;
    const {name, email} = req.body;

    try {
        const user = await User.findByPk(id); // Busqueda  por ID

        user.name = name;
        user.email = email;

         await user.save();

         res.json({
            ok: true,
            user
         })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok:false,
            message: 'Error actualizando usuario'
        });
    }
}

exports.deleteUser = async (req, res) =>{
    const {id} = req.params;

    try{
        //Buscamos usuario por id en la BD
        const user = await User.findByPk(id);
        // Eliminamos el usuario de la base de datos
        await user.destroy();

        res.json({
            ok: true,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok:false,
            message: 'Error borrando usuario'
        })
    }
}