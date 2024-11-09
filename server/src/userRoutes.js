import {Router} from 'express';
import { ForgotPassword ,VerifyOTP ,SignUp, Login ,ChangePassword,Profile,dayActive} from '../controllers/userControllers.js';
const router=Router();

// post routes

router.route('/forgotpwd').post(ForgotPassword);
router.route('/verifyotp').post(VerifyOTP);
router.route('/signup').post(SignUp);
router.route('/login').post(Login);
router.route("/daysactice").post(dayActive);
router.route('/changepassword').post(ChangePassword);
router.route('/profile').post(Profile);




export default router;