const router = require("express").Router();
const { User, Address } = require("../../models");

// Requirement: GET and POST routes for retrieving and adding new data

router.get("/", (req, res) => {
  User.findAll({
    attributes: { exclude: ["password"] },
  });
});

router.get("/:id", (req, res) => {
    User.findOne({
        attributes: {exclude: ["password"]},
        where: {
            id: req.params.id
        }
    })
        .then(dbUser => res.json(dbUser))
});

router.post("/", (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
        .then(dbUser => {
            req.session.save(() => {
                req.session.id = dbUser.id;
                req.session.username = dbUser.username;
                req.session.loggedIn = true;
                res.json(dbUser)
            })
        })
});

router.post("login", (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(dbUser => {
            const validate = dbUser.checkPassword(req.body.password)
        })
    req.session.save(() => {
        req.session.id = dbUser.id;
        req.session.username = dbUser.username;
        req.session.loggedIn = true;
    })    
})

router.post("/", (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
    .then(dbUser => {
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;
            res.json(dbUser);
        });
    })    
});

router.post("login", (req, res) => {
    User.findOne({
        where: {
            email:req.body.email
        }
    })
        .then(dbUser => {
            const validPassword = dbUser.checkPassword(req.body.password)

            req.session.save(() => {
                req.session.id = dbUser.id;
                req.session.username = dbUser.username;
                req.session.loggedIn = true;
            })
        })    
})

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end()
        })
    }
    else {
        res.status(404).end();
    }
})

router.put("/:id", (req, res) => {
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id,
    },
  });
});

module.exports = router;
