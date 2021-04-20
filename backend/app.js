const express = require('express'),
    cookieParser = require('cookie-parser'),
    logger = require('morgan'),
    helmet = require("helmet"),
    passport = require("passport"),
    cors = require("cors"),
    authRouter = require('./routes/auth'),
    app = express();

// Initialise Database
require('./utils/database')();

// Add middleware
app.use(cors());
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());

// Add passport strategies
require("./utils/passport")(passport);

// Add Routes
app.get("/", function (req, res){
  res.json({message: 'successful ping'})
})
app.use('/auth', authRouter);
app.get("*", ((req, res) => {
  res.status(404).send("Endpoint does not exist");
}));

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.toString());
});

app.listen(3001);
