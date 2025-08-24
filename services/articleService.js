import Article from "#models/Article.js";

const article = {
  create: (data) => {
    const article = new Article(data);
    return article.save();
  },
  find: () => {
    const article = Article.find();

    article.sort({ date: -1 });

    return article;
  },
  findById: async (id) => {
    return await Article.findById(id);
  },
  update: async (id, data) => {
    return await Article.findByIdAndUpdate(id, data, { new: true });
  },
  delete: async (id) => {
    return await Article.findByIdAndDelete(id);
  },
};

export default article;
