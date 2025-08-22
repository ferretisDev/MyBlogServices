import Article from "#models/Article.js"

const article = {
    create: (data) => {
        const article = new Article(data);
        return article.save();
    },
    find: () => {
        return Article.find();
    },
    findById: async (id) => {
        return await Article.findById(id);
    },
    update: async (id, data) => {
        return await Article.findByIdAndUpdate(id, data);
    },
    delete: async (id) => {
        return await Article.findByIdAndDelete(id);
    }
};

export default article;