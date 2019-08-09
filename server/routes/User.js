import express from 'express';
import AuthController from '../controller/UserAthenticity';
import { Validation } from '../middleware/validation';
//validation 
const {signUpValidation } = Validation;
const router = express.Router();
// get  routes
const { signUp, signIn } = AuthController;
// define need routes
router.post('/signup', signUpValidation, signUp);
router.post('/signin',  signIn);

export default router;