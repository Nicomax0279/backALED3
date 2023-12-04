import { NextFunction, Request, Response } from "express"

import jwt from 'jsonwebtoken'

const KEY = process.env.KEY|| 'sdadas'
export const validateToken = (req:Request, res:Response, next:NextFunction)=>{

    //@ts-ignore
    let token = req.header['x-access-token'] || req.headers['authorization']
    if(!token){
        res.status(400).json({error:"expected token"})
        return
    }

    if(token.startsWith("Bearer ")){
        token = token.slice(7,token.length)
    }
    if(token){
        jwt.verify(token,KEY,(error:any,user:any)=>{
            if(error){
                res.status(400).json({error:"validation token error"})
                return
            }else{
              
                //@ts-ignore            
                req.user = user
                next()
            }
        })
    }
}


export const isAdmin = (req:Request, res:Response, next:NextFunction)=>{
   
    //@ts-ignore
    if(req.user.role == "admin"){
        next()
    }else{
        res.status(400).json({error:'admin status is necessary'})
        return
    }


}

export const isUser = (req:Request, res:Response, next:NextFunction)=>{

    //@ts-ignore
    if(req.user.role == "user"){
        next()
    }else{
        res.status(400).json({error:'user status is necessary'})
        return
    }


}
