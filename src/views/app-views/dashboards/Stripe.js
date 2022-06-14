import React, { useMemo,useEffect,useState } from 'react';
import {loadStripe} from '@stripe/stripe-js';
import { useSelector, useDispatch } from "react-redux";
import { Button, Col, Row, Card } from "antd";
import { signUp,Plans} from 'redux/actions/Auth';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import {useHistory} from 'react-router-dom'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Logo from "../../../assets/images/LOGO.png";
import Doller from '../../../assets/images/Vector.png';
import Users from '../../../assets/images/users.png';
import Month from '../../../assets/images/shape.png'
import './Stripe.scss'
var CryptoJS = require("crypto-js");
const useOptions = () => {
  // const fontSize = useResponsiveFontSize();
  const options = useMemo(
    () => ({
      style: {
        base: {
          // fontSize,
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
    []
  );

  return options;
};

const CheckoutForm  = () => {
  var myDate = new Date();
  const history = useHistory();
  const dispatch = useDispatch();
  const userState = useSelector(state=>state.Userstate.user.payload)
  let daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let monthsList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Aug', 'Oct', 'Nov', 'Dec'];
  let date = myDate.getDate();
let month = monthsList[myDate.getMonth()];
let year = myDate.getFullYear();
let day = daysList[myDate.getDay()];
let amOrPm;
let twelveHours = function (){
    if(myDate.getHours() > 12)
    {
        amOrPm = 'PM';
        let twentyFourHourTime = myDate.getHours();
        let conversion = twentyFourHourTime - 12;
        return `${conversion}`

    }else {
        amOrPm = 'AM';
        return `${myDate.getHours()}`}
};
let hours = twelveHours();
let minutes = myDate.getMinutes();

let currentTime = `${hours}:${minutes} ${amOrPm}`;
let today = `${day} ${date} ${month}, ${year} | ${currentTime}`;
  const stripe = useStripe();
  const elements = useElements();
  const [items, setItems] = useState([]);
  const [plans,setPlans] = useState()
  const options = useOptions();
  const formdata = useSelector(state=>state);
  console.log(formdata,'formdata')
  const handleSubmit = async event => {
    event.preventDefault();
    if (items) {
   const signUpRequest = {
    "userName":items.userName,
    "email":items.email,
    "password":items.password,
    "roleName":items.roleName,
    "firstName":items.firstName,
    "lastName":items.lastName,
    "companyName": items.componyName,
    "title":items.title,
    "officeNumber":items.officeNumber,
    "cellNumber":items.cellNumber,
    "licenceType":items.licenceType,
    "planName":items.planName,
    "maximumUserAllowed":items.maximumUserAllowed,
    "billingCycle":items.billingCycle
   }

   console.log(plans,'plansplansplansplansplansplansplans66666')
  //  const allRequest = {
  //   request: signUpRequest,
  //   route: history,
  // }
  // dispatch(signUp(allRequest))
     }

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    });
if(plans){
  const payment = {
    'description':'payment1',
    'amount': plans.price,
    'paymentMethodId':payload.paymentMethod.id,
    'email':items.email,
  }
  console.log(payment,'paymentsdlfjdslfjlsdjfldsjf')
  dispatch(Plans(payment))
}
    console.log("[PaymentMethod]", payload);

    
  };


  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('SignUpData'));
    const plans = JSON.parse(localStorage.getItem('plan'));
    // var bytes = CryptoJS.AES.decrypt(items.password, 'my-secret-key@123');
    // var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    if(plans){
      setPlans(plans);
    }
    if (items) {
     setItems(items);
    }
 
  }, []);

  console.log(items,'itemss123456');
  return (
    <form onSubmit={handleSubmit}>
    <div><h2 className='plan-heading'>Basic Plan</h2>
    <p className='plan-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p></div>

    <div className='d-flex justify-content-around'>
<div className='first-icon'><div className='pyment-icon-div'><img src={Doller} className='pyment-icon-img'/></div></div>
<div className='second-icon'><div><p className='price-doller-pay'>$ {plans ? plans.price : ''}</p></div><div className='pyment-icon-div'><img src={Month} className='pyment-icon-img'/></div></div>
<div className='third-icon'><div className='monthly-para'><p className='price-monthly'>{plans ? plans.time : ''}</p></div><div className='pyment-icon-div'><img src={Users} className='pyment-icon-img'/></div></div>
<div className='forth-icon'><div><p className='users-count'>{userState}</p></div></div>
    </div>
  <hr/>
  <div>{today}</div>
     <div className='payment-card'>
       <h2 className='card-details-head'>Card details</h2>
       <div> <CardElement
        options={options}
        onReady={() => {
          console.log("CardElement [ready]");
        }}
        onChange={event => {
          console.log("CardElement [change]", event);
        }}
        onBlur={() => {
          console.log("CardElement [blur]");
        }}
        onFocus={() => {
          console.log("CardElement [focus]");
        }}
      /></div>
     </div>

   <div className='pay-now-div'> <button type="submit" className='pay-btn' disabled={!stripe}>
    Pay now
    </button></div>
    {/* <form onSubmit={handleSubmit}>
      <CardElement   options={options}/>
      <button type="submit" disabled={!stripe || !elements}>
        Pay
      </button>
    </form> */}
  </form>
   
  );
};

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const Stripe = () =>{
  return(
    <>
    <Card className="pyment-card-backgrounds">
        <div className="pymentcard-div-main">
          <div className="image-log-subs">
            <img src={Logo} />
          </div>
         <h2 className='order-sum'>Order Summery </h2>
          <Card className='pyment-cards'>
          <Elements stripe={stripePromise}>
    <CheckoutForm  />
  </Elements>
          </Card>
        </div>
      </Card></>
  )

};

export default Stripe