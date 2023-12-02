import { SQLManager } from "./SQLManager";

export class SQLManagerWithActive extends SQLManager{
    constructor(options:object,tableName:string){
        super(options,tableName)
    }
  

    async getActives(): Promise<object[]> {
        return await super.getBy('active',true)
     } 
    async deleteById(id: number): Promise<any>{
       return await super.putById(id,{active:false})
    }

    async activateById(id: number): Promise<any>{
        return await super.putById(id,{active:true})
     }
}   