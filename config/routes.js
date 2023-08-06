const express = require("express");
const cors = require("cors");
const controllers = require("../app/controllers");

const apiRouter = express.Router();
apiRouter.use(cors());

//API
apiRouter.get("/", controllers.api.main.index);

//Mengambil data semua pengguna
apiRouter.get("/api/v1/users", controllers.api.v1.authController.getAll);

//Autentikasi & Autorisasi
apiRouter.post("/api/v1/signUp", controllers.api.v1.authController.signUp);
apiRouter.post("/api/v1/signIn", controllers.api.v1.authController.signIn);

//Pembaruan data pretest pengguna
apiRouter.put("/api/v1/updateData", controllers.api.v1.authController.updateData);

//Pembaruan data level pengguna
apiRouter.put("/api/v1/updateLevel", controllers.api.v1.authController.updateLevel);

//mengambil data senyawa acak dari database
apiRouter.get("/api/v1/getCompound", controllers.api.v1.compoundController.getCompound);

//Mengambil data dari 10 pertanyaan secara acak
apiRouter.get("/api/v1/questions", controllers.api.v1.quizController.getQuestion);

//menyimpan nilai tes
apiRouter.post("/api/v1/addScore", controllers.api.v1.scoreController.addScore);

//mengambil seluruh dhasil nilai
apiRouter.get("/api/v1/getAllScores", controllers.api.v1.scoreController.getAll);

//mengambil hasil nilai berdasarkan pengguna
apiRouter.get("/api/v1/userScores", controllers.api.v1.scoreController.getAllByUser);

//Tautan tidak ditemukan
apiRouter.use(controllers.api.main.onLost);
apiRouter.use(controllers.api.main.onError);

module.exports = apiRouter;