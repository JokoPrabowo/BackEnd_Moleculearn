const compoundService = require("../../../services/compoundService");

module.exports = {
    getCompound(req, res) {
        try{
            compoundService.getCompound(1)
            .then((compound) =>{
                res.status(200).json({
                    status: "SUCCESS",
                    data: compound
                })
            })
        }catch(error){
            console.log(error.message)
            res.status(500).json({
                status: "Fail",
                data: error.message
            })
        }
    }
}