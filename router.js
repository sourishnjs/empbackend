const apiRouter = require("express").Router();
const userController = require("./controllers/userController");
const cors = require("cors");

apiRouter.use(cors());

apiRouter.get("/", (req, res) => res.json("Hello, server is up"));

// check token to log out front-end if expired
apiRouter.post("/checkToken", userController.checkToken);

apiRouter.post(
  "/getEmpFeed",
  userController.apiMustBeLoggedIn,
  userController.apiEmployeeFeed
);
apiRouter.post("/register", userController.apiRegister);
apiRouter.post("/login", userController.apiLogin);

apiRouter.post("/doesUsernameExist", userController.doesUsernameExist);
apiRouter.post("/doesEmailExist", userController.doesEmailExist);

module.exports = apiRouter;
