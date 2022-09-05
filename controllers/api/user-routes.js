const router = require('express').Router();
const { User, Address, Review } = require('../../models');

// Requirement: GET and POST routes for retrieving and adding new data
// Get all users
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] },
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },

        include: [
            {
                model: Review,
                attributes: ['id', 'rating', 'address', 'reviewbody', 'excerpt'],
                include: {
                    model: Address,
                    attributes: ['street']
                }
            },

            {
                model: Address,
                attributes: ['id', 'houseNumber', 'street', 'city', 'state']
            }
        ]
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
        .then(dbUser => {
            req.session.save(() => {
                req.session.user_id = dbUserData.id;
                req.session.username = dbUserData.username;
                req.session.loggedIn = true;
                res.json(dbUser);
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });

});

//login route is: http://localhost:3001/api/users/login
router.post('/api/users/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(dbUser => {
            if (!dbUserData) {
                res.status(400).json({ message: 'No user with that email address!' });
                return;
            }
            const validPassword = dbUser.checkPassword(req.body.password)

            if (!validPassword) {
                res.status(400).json({ message: 'Incorrect password' });
                return;
            }

            req.session.save(() => {
                req.session.user_id = dbUserData.id;
                req.session.username = dbUserData.username;
                req.session.loggedIn = true;

                res.json({ user: dbUserData, message: 'You are now logged in!' });
            });
        });
})

router.post('/api/users/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end()
        })
    }
    else {
        res.status(404).end();
    }
})

router.put('/:id', (req, res) => {
    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id,
        }
    })

        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
