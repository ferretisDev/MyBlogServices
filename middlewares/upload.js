import multer, { diskStorage } from "multer";
import { extname } from "path";

const storage = diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/articles/");
  },
  filename: (req, file, cb) => {
    const ext = extname(file.originalname);
    const filename = `${Date.now()}-${file.fieldname}${ext}`;
    cb(null, filename);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedExt = [".png", ".jpg", ".jpeg"];

  const ext = extname(file.originalname).toLowerCase();
  console.log("Tipo de extensión: " + ext);
  if (allowedExt.includes(ext) && file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(
      new Error("Solo se permiten archivos de imagen (.png, .jpg, .jpeg)"),
      false
    );
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // máximo 5MB
});

export default upload;
