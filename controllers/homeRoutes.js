const router = require('express').Router()

router.get('/', (req,res) => {
  res.render('home')
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

module.exports = router