import express   from 'express';

import { helloWorldController }  from '../controllers/helloWord';
import * as ethController from '../controllers/ethController';
import * as encryptionController from '../controllers/encryptionController';

import { UserSchema, UserModel} from '../schemas/user';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();
/* GET home page. */
router.get('/', helloWorldController);

router.get('/eth', ethController.createAccount);
router.get('/eth1', ethController.sendTransaction);
router.get('/eth/getRecord', ethController.getRecord);
router.post('/eth/postRecord', ethController.postRecord);
router.get('/eth/getFunds', ethController.getFunds);
router.post('/enc', encryptionController.encrypt);
router.post('/decry', encryptionController.decrypt);
router.post('/enc1', encryptionController.aEncrypt);
router.post('/decry1', encryptionController.aDecrypt);
router.get('/key', encryptionController.genKey);
router.get('/temp', async (req, res, next) => {
    try {

        const data: UserSchema = {
            _id: uuidv4(),
            name: "Hari Hara Sudhan S.",
            contactNumber: "9894586038",
            address: "ABC"
        }
        await UserModel.create(data);
        res.sendStatus(200);
    }
    catch(err) {
        next(err);
    }
})

export default router;