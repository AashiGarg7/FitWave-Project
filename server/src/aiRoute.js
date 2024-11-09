import {Router} from 'express';
import {main} from '../models/Aimodel.js'
const router=Router();

router.route('/ai').post(main);
export default router;