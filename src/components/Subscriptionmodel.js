import React from 'react';
import '../styles/Submodel.css';

const SubscriptionPlans = () => {
  const plans = [
    {
      name: "Basic Plan",
      price: "$9.99/month",
      features: ["Access to basic vehicles", "Standard support", "Limited kilometers"],
    },
    {
      name: "Standard Plan",
      price: "$19.99/month",
      features: ["Access to premium vehicles", "Priority support", "Extra kilometers", "Roadside assistance"],
      recommended: true,
    },
    {
      name: "Premium Plan",
      price: "$29.99/month",
      features: ["Unlimited access to all vehicles", "24/7 support", "Unlimited kilometers", "Insurance and maintenance"],
    },
  ];

  return (
    <div className="subscription-container">
      <h2 className="subscription-header">Choose Your Plan</h2>
      <div className="subscription-plans">
        {plans.map((plan, index) => (
          <div key={index} className={`plan-card ${plan.recommended ? 'recommended' : ''}`}>
            <h3>{plan.name}</h3>
            <p className="plan-price">{plan.price}</p>
            <ul className="plan-features">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className="subscribe-button">Subscribe Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPlans;