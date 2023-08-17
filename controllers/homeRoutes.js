const router = require('express').Router()

const {Posts, Profile} = require('../models')

router.get('/', async (req,res) => {
  const postsTitle = await Posts.findAll({where: {blog_title: true}});
  const postsContent = await Posts.findAll({where: {blog_content: true}});

  return res.render('home', {blog_title: {postsTitle}, blog_content: {postsContent}})
})

// router.get('/results', (req, res) => {
//  res.render('results')
// })

// router.get('/profile', (req, res) => {
//   const user = req.session.user
//    res.render('profile', { user })
// })

// router.get('/signup', (req, res) => {
//   res.render('signup')
// })

// router.get('/login', (req, res) => {
//   res.render('login')
// })


module.exports = {Posts, Profile}
module.exports = router