import express from 'express';
import tripsController from '../controller/tripController';
import { Validation } from '../middleware/validation';
const router = express.Router();
//validations
const {createTripValidation } = Validation;
// get  routes
const { viewAllTrips, viewTripById, viewAllBookings,addNewTrip, deleteTrip, cancelTrip } = tripsController;
// define all need routes
router.get('/trips', viewAllTrips);
router.get('/trips/:id', viewTripById);
router.get('/bookings', viewAllBookings);
router.post('/trips', createTripValidation, addNewTrip);
router.delete('/trips/:id', deleteTrip);
router.patch('/trips/:id', cancelTrip);

export default router;