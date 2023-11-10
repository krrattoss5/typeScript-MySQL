import { Request,Response } from "express"

export const indexWelcome = (req: Request,res: Response)=>{
  return res.json('Welcom to my API')
}