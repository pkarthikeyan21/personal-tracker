const userController = require("../controller/userController");
// const chatController = require("../controller/ChatController.js");
const { Router } = require("express");
// const passport = require("passport");

const router = Router();


// // MiddleWare
// require("../middleware/passport")(passport);
// const needAuth = passport.authenticate("jwt", { session: false });



// router.post("/login",userController.login);
// router.post("/add",userController.create);



// // Chat Routes
// router.post("/chat",needAuth,chatController.create);
// router.get("/incoming/chat",needAuth,chatController.getIncomingMessage);



module.exports = router;
//  /**
//   * @swagger
//   * tags:
//   *   name: User
//   *   description: (<= The User managing API =>)
//   */

// /**
// * @swagger
//  * /api/login:
//  *   post:
//  *     summary: Login a user
//  *     tags: [User]
//  *     parameters:
//  *       - in: body
//  *         name: User
//  *         schema:
//  *           type: string
//  *         required: true
//  *         description: The book id
//  *     responses:
//  *       200:
//  *         description: The book description by id
//  *         contens:
//  *           application/json:
//  *       404:
//  *         description: The book was not found
//  */


//  /**
//   * @swagger
//   * tags:
//   *   name: Chat
//   *   description: (<= The Chat managing API =>)
//   */

//  /**
//  * @swagger
//  * /api/add:
//  *  post:
//  *      summary: Add a new user
//  *      tags: [User]
//  */