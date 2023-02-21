const { Blog } = require('../models');

const blogData = [
  {
    "user_id": 1,
    "blog_content": "Management fingers Tom wise fouler? Squirrel finest devouring barred Ettenmoors descend summer overflowing as bloom childhood.",
    "blog_title": 'LOTR',
    "creation_date": 2023-2-14
  },
  {
    "user_id": 1,
    "blog_content": "Management fingers Tom wise fouler? Squirrel finest devouring barred Ettenmoors descend summer overflowing as bloom childhood.",
    "blog_title": 'LOTR',
    "creation_date": 2023-2-14
  },
  {
    "user_id": 1,
    "blog_content": "Management fingers Tom wise fouler? Squirrel finest devouring barred Ettenmoors descend summer overflowing as bloom childhood.",
    "blog_title": 'LOTR',
    "creation_date": 2023-2-14
  },
  {
    "user_id": 1,
    "blog_content": "Management fingers Tom wise fouler? Squirrel finest devouring barred Ettenmoors descend summer overflowing as bloom childhood.",
    "blog_title": 'LOTR',
    "creation_date": 2023-2-14
  },
  {
    "user_id": 1,
    "blog_content": "Management fingers Tom wise fouler? Squirrel finest devouring barred Ettenmoors descend summer overflowing as bloom childhood.",
    "blog_title": 'LOTR',
    "creation_date": 2023-2-14
  },
  {
    "user_id": 1,
    "blog_content": "Management fingers Tom wise fouler? Squirrel finest devouring barred Ettenmoors descend summer overflowing as bloom childhood.",
    "blog_title": 'LOTR',
    "creation_date": 2023-2-14
  },
  {
    "user_id": 1,
    "blog_content": "Management fingers Tom wise fouler? Squirrel finest devouring barred Ettenmoors descend summer overflowing as bloom childhood.",
    "blog_title": 'LOTR',
    "creation_date": 2023-2-14
  },
]

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;