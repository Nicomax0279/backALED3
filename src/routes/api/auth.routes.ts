import { Router } from "express";

import * as authControllers from '../../controllers/auth.controllers'

const authRouter = Router()


authRouter.post('/login',authControllers.login)
authRouter.post('/signup',authControllers.signup)




export {authRouter}
export default authRouter