module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      displayName: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
      underscored: true,
    },
    );
  
    return User;
  };