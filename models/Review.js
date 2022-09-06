const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {
    static stars(body, models) {
      return models.stars.create({
        user_id: body.user_id,
        review_id: body.review_id
      }).then(() => {
        return Review.findOne({
          where: {
            id: body.review_id
          },
          attributes: [
            "id",
            "address",
            "review_content",
            "created_at",
            //the stars tally
            [sequelize.literal("(SELECT COUNT(*) FROM thumbs WHERE review.id = stars.review_id)"), "stars_count"]
          ],
         // include: [
         //   {
         //     model: models.Comment,
         //     attributes: ["id", "comment_text", "Review_id", "user_id", "created_at"],
         //     include: {
         //       model: models.User,
         //       attributes: ["username"]
         //     }
         //   }
         // ]
        });
      });
    }
  }


Review.init(
    {
        //ID of review
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
         address: {
             type: DataTypes.STRING,
             allowNull: false,
         },
        review_content: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
       // excerpt: {
       //     type: DataTypes.STRING(20), 
       //     allowNull: true,
       //     references: {
       //         model: 'review',
       //         key: 'reviewbody'
       //     }        
       // },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: "review"
    }
)
module.exports = Review;
