import { default as articleService } from "../services/articleService.js"

const article = {
    create: async (req, res) => {
        try {
            const { body } = req;
            const article = await articleService.create(body);

            return res.status(200).json(article);
        }
        catch (e) {
            res.status(500).send(e);
        }
    },
    find: async (req, res) => {
        try {
            const articles = await articleService.find();
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
            const article = await articleService.findById(id);
            return res.status(200).json(article);
        }
        catch (e) {
            res.status(500).send(e);
        }
    },
    update: async (req, res) => {
        const { params, body } = req;
        console.log({ params, body });
        try {
            const article = await articleService.update(params.id, body);
            return res.status(200).json(article);
        }
        catch (e) {
            res.status(500).send(e);
        }
    },
    delete: async (req, res) => {
        const { id } = req.params;
        try {
            const article = await articleService.delete(id);
            return await res.status(200).json({
                estatus : "ok",
                mensaje : "Datos eliminados correctamente",
                datos: article
            });
        }
        catch (e) {
            res.status(500).send(e);
        }
    }
};

export default article;