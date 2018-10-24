const {User} = require('../models')

module.exports = {
  index (req, res) {
    return User
      .findAll()
      .then(membername => res.status(200).send(membername))
      .catch(error => res.status(400).send(error))
  },
  showUserById (req, res) {
    return User
      .findById(req.params.userId)
      .then(membername => res.status(200).send(membername))
      .catch(error => res.status(400).send(error))
  }
}
