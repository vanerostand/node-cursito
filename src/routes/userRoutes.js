import express from 'express';
import * as userController from '../controllers/userController.js';
import { autenticate, authorize } from '../middleweres/authorization.js';
const router = express.Router();

router.get('/', autenticate, userController.getUsers);
router.get('/:id', autenticate, userController.getUser);

router.patch('/:id', autenticate, authorize('admin'), userController.updateUser);
router.delete('/:id', autenticate, authorize('admin'), userController.deleteUser);

router.post('/register', userController.createUser);
router.post('/login', userController.login);

export default router;