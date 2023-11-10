import { Request,Response } from "express";
import { connect } from "../database";
import {Post} from '../interface/post.interface'

export const getPosts = async (req: Request, res: Response)=>{
  try {
    const conn = await connect();
    const posts = await conn.query("SELECT * FROM posts");
    return res.json(posts[0])

  } catch (error: any) {
    console.log(error.message)
    res.status(404).json("No se encontraron Posts!")
  }
}

export const getPostById = async (req: Request, res: Response) => {
  try {
    const {id} = req.params
    const conn = await connect();
    const posts = await conn.query("SELECT * FROM posts WHERE id = ?", [id])
    return res.json(posts[0])
  } catch (error: any) {
    console.log(error.message)
    res.status(404).json("El post no existe!")
  }
}

export const createPost = async (req: Request,res: Response)=>{
  try {
    const newPost: Post = req.body
    const conn = await connect();
    await conn.query("INSERT INTO posts SET ?",[newPost])

    return res.json("Post creado con exito!")
  } catch (error: any) {
    console.log(error.message)
    res.status(404).json("No se encontraron Posts!")
  }
}

export const deletePost = async (req: Request,res: Response) =>{
  try {
    const {id} = req.params
    const conn = await connect();
    conn.query("DELETE FROM posts WHERE id = ?",[id])
    return res.json("Post eliminado con exito!")
  } catch (error: any) {
    console.log(error.message)
    res.status(404).json("No se encontraron Posts!")
  }
}

export const updatePost = async (req: Request,res: Response)=>{
  try {
    const {id} = req.params;
    const reNewPost: Post = req.body;
    const conn = await connect();
    conn.query("UPDATE posts SET ? WHERE id ?",[reNewPost,id])
    return res.json("Post actualizado!")
  } catch (error: any) {
    console.log(error.message)
    res.status(404).json("No se encontraron Posts!")
  }
}