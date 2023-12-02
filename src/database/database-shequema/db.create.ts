import { CoursesCreate } from "./courses.scrip";
import { StudentsCreate } from "./students.scrip";
import { ProfessorCreate } from "./professor.scrip";
import { UsersCreate } from "./users.scrip";

const op = async () => {

  await StudentsCreate();
  console.log("students creada correctamente");

  await ProfessorCreate();
  console.log("professors creada correctamente");

  await UsersCreate();

  console.log("users creada correctamente");
  await CoursesCreate();
  console.log("tabla course creada correctamente");

  console.log("db creada correctamente");
};
op();
