import { Router } from "express";
import { getPosts,createPost,getPostById,deletePost,updatePost } from "../controllers/post.controller";

const router = Router()

router.route('/').get(getPosts)
router.route('/:id').get(getPostById)
router.route('/:id').delete(deletePost)
router.route('/:id').put(updatePost)
router.route('/').post(createPost)

export default router;