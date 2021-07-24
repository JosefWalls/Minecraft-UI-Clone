const User = require("../models/User");
const router = require("express").Router();

router.route("/Create").post((req, res) => {
    const {Username} = req.body;

    User.find({Username: Username})
    .then((UsersFound) => {
        if(UsersFound.length !== 0){
            res.send("Can not create account, username has been taken")
        } else {
            const newUser = new User();
            newUser.Username =  Username;
            newUser.save((err, UserCreated) => {
                if(err) {
                    res.end(err)
                } else {

                }
            })
        }
    });
    res.end("Acount has been created");
});

router.route("/Signin").post((req, res) => {
    const {Username} = req.body;

    if(!Username){
        res.end("No credentials have been entered")
    }

    User.find({Username: Username})
    .then((User) => {
        if(User.length !== 0){
            console.log(User)
            req.session.User = User;
            res.send(req.session);

        } else {
            res.end("No user has been found, invalid username")
        }
    })
    req.session.save();
})

router.route("/Session").get((req, res) => {
    if(req.session){
        res.end(req.session)
    }

    res.end("No session is currently actve")
})

router.route("/Signout").post((req, res) => {
    req.session.destroy();
})

module.exports = router;