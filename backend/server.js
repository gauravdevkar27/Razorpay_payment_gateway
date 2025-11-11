import app from './app.js';
import dotenv from 'dotenv'
import Razorpay from 'razorpay';
dotenv.config({path:"backend/config/config.env"});

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
 
});

const processPayment = (req, res) => {
    res.status(200).json({
        success:true
    });
}


app.listen(process.env.PORT, () => {
    console.log(`server started at PORT ${process.env.PORT}`);

});

