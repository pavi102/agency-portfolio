const User = require('../models/user'),
    async = require('async'),
    jwt = require("jsonwebtoken");

exports.login = function (req, res) {
    let search;
    console.log(req.body)
    if(req.body.user.includes("@"))
        search = {email: req.body.user};
    else
        search = {username: req.body.user};
    User.findOne(search, function (err, user){
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        }
        user.comparePassword(req.body.password, function (err, isMatch){
            if (err){
                console.error(err);
                return res.status(500).send(err);
            }
            if(isMatch){
                const payload = {id: user.id, name: user.name};
                // TODO: Get secret from env
                jwt.sign(payload, "secret",
                    {
                        expiresIn: 2592000 // 1 month in seconds
                    },
                    (err, token) => {
                        if (err) {
                            console.error(err);
                            return res.status(500).send(err);
                        }
                        res.json({message: "Successfully authenticated", token: "Bearer " + token, user: user.username});
                    }
                );
            }
            else
                res.status(400).json({message: "Email or password is incorrect"});
        });
    })
}

exports.register = function (req, res){
    let user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
    });
    user.save(function (err) {
        if (err){
            console.log(err);
            return res.status(400).json(err);
        }
        res.json({message: "user successfully created"});
    });
}