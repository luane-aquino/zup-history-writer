const { User } = require('../models')
const { Story } = require('../models')

module.exports = {
  create: (req, res) => {
    try {
      console.log('****MUST BE HEREE')
      console.log(req.body)
      res.status(200).json({ message: 'success!!' })
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  }
}
