
module.exports = (sequelize, DataTypes) => {
  const Images = sequelize.define('Images', {
    personalPicture: DataTypes.STRING
  })

  Images.associate = function (models) {
  // Images.belongsTo(models.User   ) ?
  }

  return Images
}
