const router = require('express').Router();
const { User, Blog } = require('../models');

router.get('/dashboard', async (req, res) => {
  try {
      res.render("dashboard", {   
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

router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      // // include: { model: User,
      // //   attributes: 'username'
      // }
    });

    const blogs = blogData.map((blog) => blog.get({ plain: true }));
    console.table('blogs', blogs);
    res.render('homepage', { blogs });
  } catch (err) {
    res.status(400).json(err)
  }
});

router.get('dashboard/users/:id', async (req, res) => {
  try {
    const userBlogData = await Blog.findAll({
      where: {user_id: req.params.id},
      include: { model: User,}
    });

    if(userBlogData) {
      const userBlogs = userBlogData.map((blogs) => blogs.get({ plain: true }));
      res.render('dashboard', { userBlogs });
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router;