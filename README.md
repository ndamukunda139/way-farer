# way-farer
This is the preparation project of Andela's bootcamp
### Overview 

Wayfarer project has been developed using html,css,and Javascript.
It is for transport company where the users and admin cn perform below main features.

### Main features
1. User can Sign up and Sign in.
2. Admin can create and cancel a trip
3. User can view all trips and specific trip
4. User can book a trip with a specific seat
5. User can view all bookings
6. A trip can be deleted
7. A trip can filtered either by origin or destination

### Technologies

Javascript, html and css for front end
Nojes and express for backend framework
Testing Framework: Mocha or Jasmine  

### Install and run the application

First ensure that you have Nodejs and npm installed in your computer

1. Clone this repository and get to the project directory

    ```git clone https://github.com/ndamukunda139/way-farer.git```
    
    ```cd way-farer```
    
    ```git checkout develop```
    
2. Install the project dependencies:
   ``npm install``
3. Run the application
   ```npm run dev```
   
   ### EndPoint
   
POST	/auth/signup	User create an account

POST	/auth/signin	 User log in 

POST	/trips	Create a a trip

GET	/trips	Fetch all available trips

GET	/trips/<:trip-id>	get a specific trip

DELETE	/trip/<:trip-id>	Delete a trip

PATCH	/trip/<:trip-id>/trip	cancel the trip

GET	/bookings/Get all bokking

