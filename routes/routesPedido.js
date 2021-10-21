const express = require("express");
let router = express.Router();

    /**
     * @swagger
     * /pago:
     *  put:
     *    description: modifica el pedido por id
     *    responses:
     *      '200':
     *          description: A Succesful response 
     */
  router.put("/pago", (req, res) => {
    res.status(200).send("Customer resul");
  });

    /**
     * @swagger
     * /rechazo:
     *  put:
     *    description: modifica el pedido por id
     *    responses:
     *      '200':
     *          description: A Succesful response 
     */
    router.put("/rechazo", (req, res) => {
        res.status(200).send("Customer resul");
      });

    /**
     * @swagger
     * /devolucion:
     *  put:
     *    description: modifica el pedido por id
     *    responses:
     *      '200':
     *          description: A Succesful response 
     */
     router.put("/devolucion", (req, res) => {
        res.status(200).send("Customer resul");
      });
      
    /**
     * @swagger
     * /reclamos:
     *  get:
     *    description: trae todos los pedidos generados
     *    responses:
     *      '200':
     *          description: A Succesful response 
     *      '400':
     *          description: no existen pedidos 
     */
     router.get("/reclamos", (req, res) => {
        res.status(200).send("Customer resu");
      });
   
    /**
     * @swagger
     * /denuncias:
     *  get:
     *    description: trae todos los pedidos generados
     *    responses:
     *      '200':
     *          description: A Succesful response 
     *      '400':
     *          description: no existen pedidos 
     */
     router.get("/denuncias", (req, res) => {
        res.status(200).send("Customer resu");
      });

    /**
     * @swagger
     * /denuncia:
     *  put:
     *    parameters:
     *      description: description of parameter
     *      descriptiosn: description of parameter
     *    description: modifica el pedido por id
     *    responses:
     *      '200':
     *          description: A Succesful response 
     */
     router.put("/denuncia", (req, res) => {
        res.status(200).send("Customer resul");
      });

      /**
     * @swagger
     * /denuncia:
     *  delete:
     *    description: modifica el pedido por id
     *    responses:
     *      '200':
     *          description: A Succesful response 
     */
     router.delete("/denuncia", (req, res) => {
        res.status(200).send("Customer resul");
      });


module.exports = router;
