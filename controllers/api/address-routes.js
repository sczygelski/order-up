const router = require("express").Router();
const sequelize = require('../../config/connection');
const { User, Address, Review } = require('../../models');
const withAuth = require('../../utils/auth');

// get all

router.get('/', (req, res) => {
    Address.findAll({
    attributes: [
      'id',
      'houseNumber'
  ],
  include: [
      {
          model: Review,
          attributes: ['id', 'rating'],
          // include: {
          //     model: User,
          //     attributes: ['username']
          // }
      },
      {
          model: User,
          attributes: ['username']
      }
  ]
  
})

        .then(dbAddressData => res.json(dbAddressData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.post('/', withAuth, (req, res) => {
    Address.create()
        .then(dbAddressData => res.json(dbAddressData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});


router.delete('/:id', withAuth, (req, res) => {
    Address.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbAddressData => {
        if (!dbAddressData) {
          res.status(404).json({ message: 'No review found with this id!' });
          return;
        }
        res.json(dbAddressData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;