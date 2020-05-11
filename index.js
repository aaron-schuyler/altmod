///////////////////////// TOC /////////////////////////
/*

A. This File
    1 Config
        1.1 Node Reqs
        1.2 Database
        1.3 App/Express
        1.4 Mongo DB Models
        1.5 Passport Authentication
    2 Routes
        2.1 Passport Routes
            2.1.1 Login
            2.1.2 Logout
        2.2 Post Routes
            2.2.1 Fetch Posts
            2.2.2 Add a Post
*/
//////////////////////////////////////////////////////
////1 CONFIG
//1.1 Reqs
const express = require('express')
const mongoose = require('mongoose', {
    useUnifiedTopology: true
})
const webpack = require('webpack');
const bodyParser = require('body-parser')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
//1.2 Mongo DB Connection
mongoose.connect('mongodb+srv://admin:iHwPJzXf8uJokido@cluster0-znbrb.gcp.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
})
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("successful connection")
});

//1.3 Start Express
const app = express();
app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
});
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
//1.4 Mongo DB Models
const Post = require("./models/post")
const User = require('./models/user')

//1.5 Passport
passport.serializeUser(function (user, done) {
    done(null, user)
})
passport.deserializeUser(function (user, done) {
    User.findById(user._id, function (err, user) {
        done(err, user)
    })
})
/////validation of user
passport.use(new LocalStrategy({
        usernameField: "email",
        passwordField: "password"
    },
    function (email, password, done) {
        User.findOne({
            email: email
        }, function (err, user) {
            if (err) {
                return done(err)
            }
            if (!user) {
                return done(null, false)
            }
            if (user.password != password) {
                return done(null, false)
            }
            return done(null, user)
        })
    }
))
app.use(passport.initialize())
app.use(passport.session())
////2 ROUTES
//2.1 User Routes
//2.1.1 login
app.post('/login',
    passport.authenticate('local'),
    function (req, res) {
        res.send("logged in")
    })
//2.1.2 Logout
app.get('/logout', function (req, res) {
    req.logout()
    res.send("logged out")
});
//2.2 Post Routes
//2.2.1 Fetch Posts 
app.get('/posts', (req, res) => {
    Post.find({}, function (error, posts) {
        if (error) {
            console.error(error)
        }
        res.send({
            posts: posts
        })

    })
})

//2.2.2 Add Post
app.post('/posts', passport.authorize('local'), (req, res) => {
    var db = req.db
    var title = req.body.title
    var author = req.body.author
    var postBody = req.body.postBody
    var date = new Date()
    var tags = req.body.tags

    var new_post = new Post({
        title: title,
        author: author,
        postBody: postBody,
        date: date,
        tags: tags

    })

    new_post.save(function (error) {
        if (error) {
            console.log(error)
        }
        res.send({
            success: true,
            message: 'Post saved successfully!',
        })
    })
})