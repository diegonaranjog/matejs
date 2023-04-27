const usersControllerContent = `const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
  res.json({message: 'hi'})
})

module.exports = router
`
module.exports = usersControllerContent
