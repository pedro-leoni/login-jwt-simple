const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("user", {
        username:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull:true
        },
        image: {
            type: DataTypes.STRING,
            defaultValue: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8iPv_aiJQcnDRpx-RcVowa_CeTn6Q2q9CrQ&usqp=CAU',
            allowNull:true,
        }
    },
    {
        updatedAt: false
    })
}