
import trips from "../model/trips";
class tripsController {
    // view all trips
    static  viewAllTrips(req, res) {
        return res.json(trips);
    }
    // view specific trip
    static  viewTripById(req, res) {
        const found= trips.some(trips=> trips.id === parseInt(req.params.id));
        if(found){
         res.json(trips.filter(trips => trips.id === parseInt(req.params.id))); 
        }
        else{
         res.status(400).json({ msg: `No trip found with id ${req.params.id}`});
        }
  }
  // view all bookings
    static  viewAllBookings(req, res) {
    return res.json([
        {
            'booking_id':'12',
            'bus_licence_number': '123',
            'trip_date':'2018-08-10',
            'first_name' : 'David',
            'last_name' : 'Alexis',
            'user_email' : 'ndamukunda139@gmail.com'
        }]);
}
// create a trip
    static  addNewTrip(req, res) {
        const {id, seating_capacity,bus_lisence_number,origin,destination, trip_date,fare}=req.body;
        const data = {
            id, seating_capacity, bus_lisence_number, origin, destination, trip_date, fare
        };
      return res.status(200).json({status: 'The trip is successfully created', data});
    }
    //delete a trip
    static  deleteTrip(req, res) {
        const {id} = req.body;
      return res.status(200).json({status: `The trip of ${id} ID is successfully deleted`});
    }
    // cancel
    static  cancelTrip(req, res) {
        const {id} = req.body;
      return res.status(200).json({status: `The trip of ${id} ID is successfully canceled`});
    }

}
export default tripsController;