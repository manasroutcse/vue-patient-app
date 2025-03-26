const pool = require('../config/db')





const getAllUsers = () => {

    const SQLQuery = "SELECT * FROM patients"

    return pool.execute(SQLQuery)

}

const createNewUser = (body) => {

    const {fname, lname, birthdate} = body

    const SQLQuery = "INSERT INTO patients (fname, lname, birthdate) VALUES (?, ?, ?)"

    return pool.execute(SQLQuery,[fname, lname, birthdate])

}


const updateUser = (body) => {

    const { id, fname, lname, birthdate } = body

    const SQLQuery = "UPDATE patients SET fname=?, lname=?, birthdate=? WHERE id=?"
    

    return pool.execute(SQLQuery,[fname, lname, birthdate,id])

}

const deleteUser = (params) => {

    const id = params.id

    const SQLQuery = "DELETE FROM patients WHERE id=?"

    return pool.execute(SQLQuery,[id])

}

const getUserById = (params) => {

    const id = params.id

    const SQLQuery = "SELECT * FROM patients WHERE id=?"

    return pool.execute(SQLQuery,[id])

}


module.exports = {

    getAllUsers,createNewUser,updateUser,deleteUser,getUserById

}