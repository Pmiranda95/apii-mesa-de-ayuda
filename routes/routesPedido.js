const express = require("express");
let router = express.Router();
     
    /**
     * @swagger
     * /pedido/{idPedido}:
     *  put:
     *    description: modifica el pedido por id
     *    responses:
     *      '200':
     *          description: A Succesful response 
     */
    router.put("/pedidos/:idPedido", (req, res) => {
        res.status(200).send("Customer resul");
      });
     
    /**
     * @swagger
     * /pedido/{idPedido}:
     *  delete:
     *    description: elimina el pedido por id
     *    responses:
     *      '200':
     *          description: A Succesful response 
     */
    router.delete("/pedido/:idPedido", (req, res) => {
        res.status(200).send("Customer resu");
      });
   

module.exports = router;
