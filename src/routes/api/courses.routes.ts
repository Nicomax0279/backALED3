import { Router } from 'express';
import * as courseControllers from '../../controllers/courses.controllers' 

const coursesRouter = Router()

coursesRouter.get('',courseControllers.getCourses)
coursesRouter.get('/:id',courseControllers.getCourseById)
coursesRouter.post('',courseControllers.postCourse)
coursesRouter.delete('/:id',courseControllers.deleteCourseById)
coursesRouter.put('/:id',courseControllers.putCourseById)






export {coursesRouter}
export default coursesRouter