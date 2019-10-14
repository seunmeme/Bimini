import { Router } from 'express';
import AuthController from '../controllers/AuthController';
import ClaimController from '../controllers/ClaimController';
import EnrollmentController from '../controllers/EnrollmentController';

const router = Router();

router.get('/auth', AuthController.getAllHMO);
router.post('/auth', AuthController.addHMO);
router.get('/auth/:id', AuthController.getSingleHMO);
router.put('/auth/:id', AuthController.updateHMO);
router.delete('/auth/:id', AuthController.deleteHMO);

router.get('/enrollment', EnrollmentController.getAllHMO);
router.post('/enrollment', EnrollmentController.addHMO);
router.post('/enrollments', EnrollmentController.addMultipleHMO);
router.get('/enrollment/:id', EnrollmentController.getSingleHMO);
router.put('/enrollment/:id', EnrollmentController.updateHMO);
router.delete('/enrollment/:id', EnrollmentController.deleteHMO);

router.get('/claim', ClaimController.getAllHMO);
router.post('/claim', ClaimController.addHMO);
router.get('/claim/:id', ClaimController.getSingleHMO);
router.put('/claim/:id', ClaimController.updateHMO);
router.delete('/claim/:id', ClaimController.deleteHMO);

export default router;