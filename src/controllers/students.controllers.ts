
import { Request, Response } from "express";
import { studentsManger } from "../database/dao/index.dao";
export const getStudents = async(req:Request,res:Response)=>{
    try {
        const response = await studentsManger.getActives()
        res.json(response)
    } catch (error) {
        res.status(500).json({error:error})
    }
}

export const getStudentById = async(req:Request,res:Response)=>{
    try {
        const id = req.params.id
        const response = await studentsManger.getById(Number(id))
        res.json(response)
    } catch (error) {
        res.status(500).json({error:error})
    }
}

export const postStudent = async(req:Request,res:Response)=>{
    try {
        const newStudent = req.body
        const response = await studentsManger.save(newStudent)
        res.json(response)
    } catch (error) {
        res.status(500).json({error:error})
    }
}

export const deleteStudentById = async(req:Request,res:Response)=>{
    try {
        const id = req.params.id
        const response = await studentsManger.deleteById(Number(id))
        res.json(response)
    } catch (error) {
        res.status(500).json({error:error})
    }
}

export const putStudentById = async(req:Request,res:Response)=>{
    try {
        const putStudent = req.body
        const id = req.params.id
        const response = await studentsManger.putById(Number(id),putStudent)
        res.json(response)
    } catch (error) {
        res.status(500).json({error:error})
    }
}
