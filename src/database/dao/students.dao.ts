import { Student } from './../../interfaces/student';
import { SQLManager } from "../manager/SQLManager";
import { SQLManagerWithActive } from '../manager/SQLManagerWithActive';

export class StudentsManager extends SQLManagerWithActive{
    constructor(options:object,tableName:string){
        super(options,tableName)
    }
    async getByEmail(email:string){
        let Student = await super.getBy("email",email)
        return Student[0]

        
     }  
}   