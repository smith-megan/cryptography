const users = []
const bcrypt=require('bcryptjs')

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body

      for (let i = 0; i < users.length; i++) {
        const deHashed = bcrypt.compareSync(password, users[i].password)
        if (users[i].username === username && deHashed === true) {
          delete users[i].password
          res.status(200).send(users[i])
          return
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        const { password } = req.body 
        
        console.log('Registering User')

        const salt = bcrypt.genSaltSync(5)
        const pinHash= bcrypt.hashSync(password,salt)
  
        let storedUser = {...req.body}
        storedUser.password=pinHash
 
        users.push(storedUser)

        delete req.body.password
        res.status(200).send(req.body)
    }
}