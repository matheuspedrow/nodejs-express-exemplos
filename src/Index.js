import * as express from 'express'
import * as cookieParser from 'cookie-Parser'

const app = express()
app.use(express.json())
app.use(cookieParser())

import userController from './modules/user/userController'
import postController from './modules/post/postController'


app.use('/user', userController)
app.use('/post', postController)
app.listen (3000, () => console.log(`ONLINE http://localhost:3000`))

/* Usuário (Cadastro e Login) POSTAGEM (Criar Posts e Listar Posts) */