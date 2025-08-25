import { default as articleService } from "#services/articleService.js";
import { jsonResponse } from "#helpers/jsonResponse.js";
import { success } from "#enums/index.js";

import upload from "#middlewares/upload.js";

const article = {
  create: async (req, res) => {
    upload.single("file")(req, res, async (err) => {
      let result = {};
      let body = req.body;

      if (err) {
        result.success = Success.False;
        result.error = err.message;
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
    const params = req.query;
    return jsonResponse(res, async () => {
      return await articleService.find(params);
    });
  },
  findById: async (req, res) => {
    const { id } = req.params;
    return jsonResponse(res, async () => {
      return await articleService.findById(id);
    });
  },
  update: async (req, res) => {
    const result = {};
    const { params, body } = req;

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
