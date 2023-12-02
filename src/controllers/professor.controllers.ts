
import { Request, Response } from "express"
import { professorsManager } from "../database/dao/index.dao"


export const getProfessors = async(req:Request,res:Response)=>{
    try {
        const professors = await professorsManager.getActives()
        res.json(professors)
    } catch (error) {
  
        res.status(500).json({error:error})
    }
}


export const getProfessorById = async(req:Request,res:Response)=>{
    try {
        const id = req.params.id
        const professor = await professorsManager.getById(Number(id))
        res.json(professor)
    } catch (error) {
  
        res.status(500).json({error:error})
    }
}

export const postProfessor = async(req:Request,res:Response)=>{
    try {
        const newProfessor = req.body
        const response = await professorsManager.save(newProfessor)
        res.json(response)
    } catch (error) {
        res.status(500).json({error:error})
    }
}

export const deleteProfessorById = async(req:Request,res:Response)=>{
    try {
        const id = req.params.id
        const response = await professorsManager.deleteById(Number(id))
        res.json(response)
    } catch (error) {
        res.status(500).json({error:error})
    }
}

export const putProfessorById = async(req:Request,res:Response)=>{
    try {
        const putProfessor = req.body
        const id = req.params.id
        const response = await professorsManager.putById(Number(id),putProfessor)
        res.json(response)
    } catch (error) {
        res.status(500).json({error:error})
    }
}
