const auth = (req, res, next) => {
  if(!res.session.loggedIn){
    res.redirect('/login')
  } else {
    next();
  }
};

module.exports = auth;