import { default as articleController } from '#controllers/articleController.js';
import express from 'express';

const router = express.Router();

router.get('/', articleController.getAll);

router.get('/:id', articleController.getOne);

router.post('/', articleController.create);

router.put('/:id', articleController.update);

router.delete('/:id', articleController.delete);

export default router;