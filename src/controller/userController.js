import { Router } from 'express'

const router = Router ()
router.post ('/signup', (req, res) => {
  res.send ('SIGNUP /')
})

router.post ('/login', (req, res) => {
  res.send ('LOGIN /')
})

router.get ('/test', (req, res) => {
  res.send ('USER TEST /')
})


export default router