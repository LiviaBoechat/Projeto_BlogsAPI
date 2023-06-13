module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
          },
          title: {
            type: DataTypes.STRING,
          },
          content: {
            type: DataTypes.STRING,
          },
          userId: {
            type: DataTypes.INTEGER,
          },
          published: {
            type: DataTypes.DATE,
          },
          updated: {
            type: DataTypes.DATE,
          },
    },
    {
      timestamps: false,
      underscored: true,
    },
    );

    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User, {
          as: 'users',
          foreignKey: 'user_id',
        });    
    }
  
    return BlogPost;
  };