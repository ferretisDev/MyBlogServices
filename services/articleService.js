import Article from "#models/Article.js"

const article = {
    create: async (data) => {
        const article = new Article(data);
        return await article.save();
    },
    findAll: async () => {
        return await Article.find();
    },
    findById: async (id) => {
        return await Article.findById(id);
    },
    update: async (id, data) => {
        return await Article.findByIdAndUpdate(id, data, { new: true });
    },
    delete: async (id) => {
        return await User.findByIdAndDelete(id);
    }
};

export default article;