import { Router } from "express";
import studentsRouter from "./api/students.routes";
import coursesRouter from "./api/courses.routes";
import authRouter from "./api/auth.routes";
import professorRouter from "./api/professor.routes";


const mainRouter = Router()


mainRouter.use('/api/students',studentsRouter)
mainRouter.use('/api/courses',coursesRouter)
mainRouter.use('/api/auth',authRouter)
mainRouter.use('/api/professors',professorRouter)






export {mainRouter}