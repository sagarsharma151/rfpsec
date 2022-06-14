import React from "react";
import { Card } from "antd";
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../../../assets/images/LOGO.png";
import "../../../app-views/dashboards/Stripe.scss";
import "./Contact.scss"
const Stripe = () => {
  return (
    <>
      <Card className="pyment-card-backgrounds">
        <div className="pymentcard-div-main">
          <div className="image-log-subs">
            <img src={Logo} alt=''/>
          </div>
         <div className="thankumsg">
         <h2 className="thanku-head">Thanku for filling out  your information. we will get you in touch.</h2>
         </div>
        </div>
      </Card>
    </>
  );
};

export default Stripe;
