import { Router } from "express";

import * as professorControllers from '../../controllers/professor.controllers'

const professorRouter = Router()


professorRouter.get('',professorControllers.getProfessors)
professorRouter.get('/:id',professorControllers.getProfessorById)
professorRouter.delete('/:id',professorControllers.deleteProfessorById)
professorRouter.put('/:id',professorControllers.putProfessorById)
professorRouter.post('',professorControllers.postProfessor)





export {professorRouter}
export default professorRouter