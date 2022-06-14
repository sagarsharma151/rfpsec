import React from "react";

import { Steps, Step } from "react-step-builder";
import Step1 from "../../../app-views/pages/profile/tabs/Subscription";
import Step2 from "../register-1/index";
import FinalStep from "../../../app-views/dashboards/Stripe";

function Multistep() {
  const config = {
    navigation: {
      //   component: Navigation, // a React component with special props provided automatically
      location: "after", // or before
    },
  };

  return (
    <div className="App">
      <Steps config={config}>
        <Step component={Step1} />
        <Step component={Step2} />
        <Step component={FinalStep} />
      </Steps>
    </div>
  );
}

export default Multistep;
