const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Posts extends Model {}

Posts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'profile',
        foreignKey: 'id'
      }
    },
    blog_title: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    blog_content: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    blog_comments: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'posts',
  }
);

module.exports = Posts;