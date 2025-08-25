import Article from "#models/Article.js";

const article = {
    create: (data) => {
        return new Article(data).save();
    },
    find: (params) => {
        const article = Article.find();
        if (params.sort)
            article.sort({ date: parseInt(params.sort) });
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
