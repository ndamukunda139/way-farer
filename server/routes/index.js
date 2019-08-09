import { Router } from 'express';
import tripsRoutes from './tripsRoutes';
import userAth from './User';

const router = new Router();

router.route('/').get((req, res) => {
  res.status(200).json({ status: 'Welcome to Wayfarer API V1.0!' });
});

// properties route
router.use(tripsRoutes);
router.use(userAth);

export default router;