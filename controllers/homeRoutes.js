const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
      res.render("homepage", {   
        loggedIn: req.session.loggedIn,
        loggedInUsername: req.session.loggedInUsername,
        loggedInUserID: req.session.loggedInUserID   
      });
  } catch(err) {
      res.status(500).json({message: "An error occurred."});
  }
});

router.get('/login', async (req, res) => {
  res.render('login',);
});

router.get('/signup', async (req, res) => {
  res.render('signup',);
});

module.exports = router;