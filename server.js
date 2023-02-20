const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const sequelizeStore = require('connect-session-sequelize')(session.Store);
const path = require('path');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

const sesh = {
  secret: 'hash my password',
  cookie: { maxAge: 1200000},
  resave: false,
  saveUninitialized: true,
  store: new sequelizeStore({
    db: sequelize
  }),
}

app.use(session(sesh));

app.use(function( req, res, next ) {
  res.locals.session = req.session;
  next();
});

const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false, logging: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
