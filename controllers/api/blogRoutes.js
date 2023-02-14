const router = require('express').Router();
const { Blog, User } = require('../../models');
// const User = require('../../models/User');

router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: {
        model: User,
        attributes: ['username']
      }
    });

    if(!blogData) {
      res.status(400).json({ message: 'No blogs found.'});
      return;
    }
    
    res.status(200).json(blogData)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username', 'id'],
        },
      ],
    });

    if(!blogData){
      res.status(400).json({ message: 'No blog with that id found' })
      return;
    }

    const blog = blogData.get({ plain: true });

    res.status(200).json({ blog });
  } catch (err) {
    res.status(500).json(err)
  }
});

router.put('/:id', async (req, res) => {
  try {
    const blogData = await Blog.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if(!blogData){
      res.status(404).json({ message: 'There is no blog with that id.'});
      return;
    }

    res.status(200).json({ message: 'The selected blog was updated.'});
  } catch (err) {
    res.status(500).json(err)
  }
});

router.post('/', async (req, res) => {
  try {
    const blogData = await Blog.create({
      user_id: req.body.user_id,
      blog_content: req.body.blog_content,
      blog_title: req.body.blog_title,
      creation_date: req.body.creation_date,
    });

    res.status(200).json(blogData)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
      },
    });

    if(!blogData){
      res.status(404).json({ message: 'There is no blog with that id.'});
      return;
    }

    res.status(200).json({ message: 'Blog deleted.', blogData})
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;