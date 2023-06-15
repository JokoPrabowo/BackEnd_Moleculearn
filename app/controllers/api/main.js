module.exports = {
    index(req, res) {
      res.status(200).send({
        status: "OK",
        message: "Server sedang berjalan!",
      });
    },
  
    onLost(req, res) {
      res.status(404).json({
        status: "FAIL",
        message: "Tautan tidak ditemukan!",
      });
    },
  
    onError(req, res, next) {
      res.status(500).json({
        status: "ERROR",
        error: {
          name: err.name,
          message: err.message,
        },
      });
    },
  };
  