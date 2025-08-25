import { default as articleController } from '#controllers/articleController.js';
import express from 'express';

const router = express.Router();

router.get('/', articleController.find);

router.get('/:id', articleController.findById);

router.post('/', articleController.create);

router.put('/:id', articleController.update);

router.delete('/:id', articleController.delete);

export default router;