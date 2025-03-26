const userModel = require('../models/userModel')



const getAllUsers = async(req, res) => {

    try {

        const [data] = await userModel.getAllUsers()

        res.status(200).json({

            message: 'GetAllUsers success',

            data: data

        })

    } catch (error) {

        res.status(500).json({

            message: 'Server Error',

            serverMessage: error

        })

    }  

}

const createNewUser = async(req, res) => {

    try {

        const body = req.body

        const [data] = await userModel.createNewUser(body)

        res.status(200).json({

            message: 'Create New User success',

            data: body

        })

    } catch (error) {

        res.status(500).json({

            message: 'Server Error',

            serverMessage: error

        })

    }  

}



const updateUser = async(req, res) => {

    try {

        const body = req.body

        const [data] = await userModel.updateUser(body)

        res.status(200).json({

            message: 'Update User success',

            data: body

        })

    } catch (error) {

        res.status(500).json({

            message: 'Server Error',

            serverMessage: error

        })

    }  

}



const deleteUser = async(req, res) => {

    try {

        const params = req.params

        const [data] = await userModel.deleteUser(params)

        res.status(200).json({

            message: 'DELETE User success',

            data: data

        })

    } catch (error) {

        res.status(500).json({

            message: 'Server Error',

            serverMessage: error

        })

    }  

}

const getUserById = async(req, res) => {

    try {

        const params = req.params

        const [data] = await userModel.getUserById(params)

        res.status(200).json({

            message: 'GET User By ID success',

            data: data

        })

    } catch (error) {

        res.status(500).json({

            message: 'Server Error',

            serverMessage: error

        })

    }  

}

module.exports = {

    getAllUsers,createNewUser,updateUser,deleteUser,
    getUserById

}