import { Router } from 'express';
import * as studentControllers from '../../controllers/students.controllers' 

const studentsRouter = Router()

studentsRouter.get('',studentControllers.getStudents)
studentsRouter.get('/:id',studentControllers.getStudentById)
studentsRouter.post('',studentControllers.postStudent)
studentsRouter.delete('/:id',studentControllers.deleteStudentById)
studentsRouter.put('/:id',studentControllers.putStudentById)






export {studentsRouter}
export default studentsRouter