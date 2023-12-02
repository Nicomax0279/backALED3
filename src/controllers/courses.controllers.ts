


import { Request, Response } from "express";
import { coursesManager } from "../database/dao/index.dao";
export const getCourses = async(req:Request,res:Response)=>{
    try {
        const response = await coursesManager.getWithProfessors()
        res.json(response)
    } catch (error) {
        res.status(500).json({error:error})
    }
}

export const getCourseById = async(req:Request,res:Response)=>{
    try {
        const id = req.params.id
        const response = await coursesManager.getById(Number(id))
        res.json(response)
    } catch (error) {
        res.status(500).json({error:error})
    }
}

export const postCourse = async(req:Request,res:Response)=>{
    try {
        const newCourse = req.body
        const response = await coursesManager.save(newCourse)
        const course = await coursesManager.getAll()
        res.json(course)
    } catch (error) {
        console.log(error)
        res.status(500).json({error:error})
    }
}

export const deleteCourseById = async(req:Request,res:Response)=>{
    try {
        const id = req.params.id
        const response = await coursesManager.deleteById(Number(id))
        const course = await coursesManager.getAll()
        res.json(course)
    } catch (error) {
        res.status(500).json({error:error})
    }
}

export const putCourseById = async(req:Request,res:Response)=>{
    try {
        const putCourse = req.body
        const id = req.params.id
        const response = await coursesManager.putById(Number(id),putCourse)
        const course = await coursesManager.getAll()
        res.json(course)    
    } catch (error) {
        res.status(500).json({error:error})
    }
}
