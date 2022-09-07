const chai = require('chai')
const expect = chai.expect

const User = require("../controllers/api/user-routes")

beforeEach(async function () {
    await User.get();
    //await User.save([tobi, loki, jane]);
  });
  describe('#get()', function () {
    it('responds with matching records', async function () {
      const dbUserData = await User.find({type: 'username'});
      dbUserData.should.have.length(10);
    });
  });  