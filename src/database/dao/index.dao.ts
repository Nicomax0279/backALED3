import { dbConf } from "../dbConfig";
import { CoursesManager } from "./courses.dao";
import { ProfessorsManager } from "./professors.dao";
import { StudentsManager } from "./students.dao";
import { UsersManager } from "./users.dao";




export const studentsManger = new StudentsManager(dbConf.sqlite,'students')
export const coursesManager = new CoursesManager(dbConf.sqlite,'courses')
export const usersManager = new UsersManager(dbConf.sqlite,'users')
export const professorsManager = new ProfessorsManager(dbConf.sqlite,'professors')