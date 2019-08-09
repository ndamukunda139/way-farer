
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt'); 
const key = process.env.SECRET_KEY


class AuthController {
    static signUp(req, res) {
     
      const { email, first_name, last_name, password } = req.body;
      const user = {
        first_name, last_name, email, password: password, is_admin: false
      };
    return res.json({status:'successful registered' , user})
  }

    static signIn(req, res) {
        const { email, password} = req.body;
        const credential = {
              email, password
            };
        
        return res.status(200).json({status: `Welcome${email}`, credential});
       }
}

export default AuthController;

