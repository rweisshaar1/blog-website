// import models
const Profile = require('./Profile');
const Posts = require('./Posts');

Posts.belongsToMany(Profile, {
  foreignKey: "profile_id"
})

Profile.belongsToMany(Posts, {
  foreignKey: "user_id"
})

module.exports = {
  Profile,
  Posts,
};