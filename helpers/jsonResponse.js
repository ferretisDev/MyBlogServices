import { success } from "#enums/index.js";

export const jsonResponse = async (res, cb, successMsg = "Operación exitosa") => {
  const result = {};
  try {
    result.success = success.true;
    result.data = await cb();
    result.message = successMsg;
    return res.status(200).json(result);
  } catch (e) {
    result.success = success.false;
    result.error = e.message || "Error interno del servidor";
    return res.status(500).json(result);
  }
};