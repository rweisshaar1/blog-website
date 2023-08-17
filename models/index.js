// import models
const Profile = require('./Profile');
const Posts = require('./Posts');

// Profile.belongsToMany(Posts, {
//   foreignKey: "user_id"
// })

Posts.belongsToMany(Profile, {
  through: "profiles_posts"
})


module.exports = {
  Profile,
  Posts,
};