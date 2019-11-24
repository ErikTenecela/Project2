/* eslint-disable prettier/prettier */
module.exports = function(sequelize, DataTypes) {
    var Gov = sequelize.define("Baby", {
        name: DataTypes.STRING,
        Gender: DataTypes.STRING,
        Ethenicty: DataTypes.STRING,
        Birth: DataTypes.DATE(4),
        Count: DataTypes.INTEGER,
        Rank: DataTypes.INTEGER,
    });
    return Gov;
};