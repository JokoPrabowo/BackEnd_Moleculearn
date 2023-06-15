const express = require("express");
const cors = require("cors");
const controllers = require("../app/controllers");

const apiRouter = express.Router();
apiRouter.use(cors());

//API
apiRouter.get("/", controllers.api.main.index);

//Autentikasi & Autorisasi
apiRouter.post("/api/v1/signUp", controllers.api.v1.authController.signUp);
apiRouter.post("/api/v1/signIn", controllers.api.v1.authController.signIn);

//Pembaruan data pretest pengguna
apiRouter.put("/api/v1/update", controllers.api.v1.authController.updateData);

//Tautan tidak ditemukan
apiRouter.use(controllers.api.main.onLost);
apiRouter.use(controllers.api.main.onError);

module.exports = apiRouter;