module.exports = (sequelize, DataTypes) =>{
 

    // writing my studnet model that would set the structure for our database 
    let Student = sequelize.define("Student", {
        name:{
            type: DataTypes.STRING
        },

        starID:{
            type: DataTypes.STRING
        },

        present:{
            type: DataTypes.BOOLEAN
        }
    })

    Student.sync({force : false}) .then( ()=>{
        console.log('Synced student table ');
    })

    return Student
}