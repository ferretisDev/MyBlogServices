import { default as articleService } from "#services/articleService.js";
import { success } from "#models/Index.js";
import upload from "#middlewares/upload.js";

const article = {
  create: async (req, res) => {
    upload.single("file")(req, res, async (err) => {
      let result = {};
      let body = req.body;

      if (err) {
        result.success = false;
        result.error = "Solo se permiten archivos de imagen (.png, .jpg, .jpeg)";
        return res.status(400).json(result);
      }

      body.img = req.file?.filename;

      try {
        result.success = success.true;
        result.data = await articleService.create(body);
        result.message = "Documento creado con éxito";
        return res.status(200).json(result);
      } catch (e) {
        result.success = success.false;
        result.error = e.message;
        return res.status(500).json(result);
      }
    });
  },
  find: async (req, res) => {
    let result = {};

    try {
      const documents = await articleService.find();

      result.success = success.true;
      result.data = documents;
      result.total = documents.length;

      return res.status(200).json(result);
    } catch (e) {
      result.success = success.false;
      result.error = e.message;

      return res.status(500).json(result);
    }
  },
  findById: async (req, res) => {
    let result = {};
    let { id } = req.params;

    try {
      result.success = success.true;
      result.data = await articleService.findById(id);

      return res.status(200).json(result);
    } catch (e) {
      result.success = success.false;
      result.message = "No se a encontrado el documento";

      return res.status(500).send(result);
    }
  },
  update: async (req, res) => {
    let result = {};
    let { params, body } = req;

    try {
      result.success = success.true;
      result.data = await articleService.update(params.id, body);
      result.message = "Documento actualizado con éxito";

      return res.status(200).json(result);
    } catch (e) {
      res.status(500).send(e);
    }
  },
  delete: async (req, res) => {
    let result = {};
    let { id } = req.params;

    try {
      result.success = success.true;
      result.data = await articleService.delete(id);
      result.message = "Documento eliminado con éxito";

      return res.status(200).json(result);
    } catch (e) {
      result.success = success.false;
      result.error = e.message;

      return res.status(500).send(result);
    }
  },
};

export default article;
