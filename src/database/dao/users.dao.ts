import { SQLManagerWithActive } from "../manager/SQLManagerWithActive"

export class UsersManager extends SQLManagerWithActive{
    constructor(options:object,tableName:string){
        super(options,tableName)
    }
    async getByUsername(username:string){
        let Student = await super.getBy("username",username)
        return Student[0]

        
     }  
}   