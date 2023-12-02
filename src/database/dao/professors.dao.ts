
import { SQLManagerWithActive } from "../manager/SQLManagerWithActive"

export class ProfessorsManager extends SQLManagerWithActive{
    constructor(options:object,tableName:string){
        super(options,tableName)
    }
  
}   