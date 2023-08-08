import express from 'express';
import UserController from '../controllers/user.controller';
import AuthMiddle from '../middlewares/auth';

const userController = new UserController();
const authMiddle = new AuthMiddle();

const userRouter = express.Router();

userRouter.get('/me', authMiddle.isSignedIn, userController.getUserinfo);
userRouter.get(
  '/myreservation',
  authMiddle.isSignedIn,
  userController.getReservation
);

export default userRouter;
