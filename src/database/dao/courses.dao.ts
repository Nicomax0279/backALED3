

import { SQLManagerWithActive } from "../manager/SQLManagerWithActive";

export class CoursesManager extends SQLManagerWithActive{
    constructor(options:object,tableName:string){
        super(options,tableName)
    }
   
    async getWithProfessors(){
       // return await this.database.from(this.tableName).select('*').innerJoin('professors','professors.id',`${this.tableName}.professorId`)
       try {
        return await this.database.from(this.tableName).select(`${this.tableName}.* `,"professors.name AS professorName ", "professors.surname AS professorSurname ").innerJoin('professors','professors.id',`${this.tableName}.professorId`)
        .where(`${this.tableName}.active`,true).where(`professors.active`,true)
       } catch (error) {
        //@ts-ignore
        console.log(error.message)
        throw error
       }
    }
}   