
// en este archivo defino mi modelo de objeto
// creo que funcion que recibe dos parametros
module.exports = (sequelize, dataTypes)  => {
    //aca defino mi base de datos con objetos literales 
    //obligatorio tener el primary key y en todos el data type
    //cada una va a ser una columna de la tabla
    let alias = "Autos"
    let cols ={
        id:{ AutoIncrement : true,
        primaryKey: true,
        type: dataTypes.INTEGER},
       marca:{ 
        allowNull: false,
        type: dataTypes.STRING},
       modelo:{ 
        allowNull: false,
        type: dataTypes.STRING},
       Anio:{ 
        allowNull: false,
        type: dataTypes.STRING},
       color: { 
        allowNull: false,
        type: dataTypes.STRING}

    } 

    let config = {
        //no es necesario lo infiere como el plural del nombre
        tableName : 'Autos',
        timestamps : false
    }
    
    const Auto = sequelize.define(alias,cols,config);




    return Auto
}
