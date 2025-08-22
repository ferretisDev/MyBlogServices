import { default as articleService } from "../services/articleService.js"

const article = {
    create: async (req, res) => {
        try {
            return await res.status(200).json({
                Nombre: "Alfredo"
            });
        }
        catch (e) {
            res.status(500).send(e);
        }
    },
    getAll: async (req, res) => {
        try {
            const articles = await articleService.findAll();
            if (articles.length === 0)
                return res.status(404).json({ status: 'Ok', message: 'Artículos no encontrados' });
            res.status(200).json(articles);
        }
        catch (e) {
            res.status(500).send(e);
        }
    },
    findById: async (req, res) => {
        const { id } = req.params;
        try {
            return await res.status(200).json({
                Nombre: "Alfredo"
            });
        }
        catch (e) {
            res.status(500).send(e);
        }
    },
    update: async (req, res) => {
        const { id } = req.params;
        try {
            return await res.status(200).json({
                Nombre: "Alfredo"
            });
        }
        catch (e) {
            res.status(500).send(e);
        }
    },
    delete: async (req, res) => {
        const { id } = req.params;
        try {
            return await res.status(200).json({
                Nombre: "Alfredo"
            });
        }
        catch (e) {
            res.status(500).send(e);
        }
    }
};

export default article;