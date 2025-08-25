import { default as articleRepository } from "#repositories/articleRepository.js"
import { isValidObjectId } from "mongoose";

import Article from "#models/Article.js";

const article = {
  create: (data) => {
    const article = new Article(data);
    return article.save();
  },
  find: (params) => {
    const articles = articleRepository.find(params);
    return articles;
  },
  findById: async (id) => {
    if (!isValidObjectId(id))
      throw new Error("El id viene vacío ó no es válido");
    const article = await articleRepository.findById(id);
    if (!article)
      throw new Error("Artículo no encontrado");
    return article;
  },
  update: async (id, data) => {
    if (!isValidObjectId(id))
      throw new Error("El id viene vacío ó no es válido");
    return await articleRepository.update(id, data);
  },
  delete: async (id) => {
    if (!isValidObjectId(id))
      throw new Error("El id viene vacío ó no es válido");
    return await Article.findByIdAndDelete(id);
  },
};

export default article;
