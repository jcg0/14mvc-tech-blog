const router = require('express').Router();
const User = require('../../models/User');
const Blog = require('../../models/Blog');

router.get('/',  async (req, res) => {
  try {
    const userData = await User.findAll({});
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userDB = await User.findOne({
      where: {
        username: req.body.username,
      }
    });
    if(!userDB) {
      res.status(404).json({ message: 'A user with that username does not exist. Please enter the correct username  or create a new user'})
      return;
    }
    const validPassword = userDB.checkAuth(req.body.password);
    
    if(!validPassword) {
      res.status(404).json({ message: 'Your password is incorrect.'})
      return;
    }

    req.session.save(() => {
      req.session['loggedInUsername'] = userDB.username;
      req.session['loggedInID'] = userDB.id;
      req.session.loggedIn = true;
      req.session = req.session;
      res.status(200).json({ message: 'Login successful'});
    });

  } catch (err) {

  }
});

router.post('/logout', (req, res) => {
  if(req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    })
  } else {
    res.status(404).end();
  }
})

router.post('/', async (req, res) => {
  console.log('if th users ')
  try {
    const userData = await User.create({
      username: req.body.username,
      password: req.body.password,
    });


    res.status(200).json({ message: 'new user created', userData});
  } catch (err) {
    res.status(400).json(err)
  }
})


module.exports = router;