import { LoginUser } from './../interfaces/loginUser';
import { Request, Response } from "express"
import { usersManager } from "../database/dao/index.dao"
import jwt from 'jsonwebtoken'

export const login = async(req:Request,res:Response)=>{
    try {
        const loginUser:LoginUser = req.body
        const foundUser = await usersManager.getByUsername(loginUser.username)
        if(!foundUser) throw new Error('username not found error')
        if(foundUser.password != loginUser.password)  throw new Error('credentials error')
        const token = jwt.sign( {username:foundUser.username , role:foundUser.role } ,process.env.KEY|| 'sdadas')
  
        res.json({message:"login successfully" , token:token})

    } catch (error) {
        console.log(error)
        res.status(500).json({error:error})
    }
}
export const signup = async(req:Request,res:Response)=>{
    try {
        const loginUser:LoginUser = req.body
        const foundUser = await usersManager.getByUsername(loginUser.username)
        if(foundUser) throw new Error('username already exist error')
        await usersManager.save(loginUser)
       // console.log(await usersManager.getAll())
        res.json({message:"signup successfully"})

    } catch (error) {
        console.log(error)
        res.status(500).json({error:error})
    }
}