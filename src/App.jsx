import React from "react";
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "@fontsource/poppins";
import CardPage from './cards'

function App() {
  const cardinfo = [
    {
      status: "FREE",
      price: "$0/month",
      description: [
        { option: "Single User", enabled: true },
        { option: "50GB Storage", enabled: true },
        { option: "Unlimited Public Project", enabled: true },
        { option: "Community Access", enabled: true },
        { option: "Unlimited Private Projects", enabled: false },
        { option: "Dedicated Phone Support", enabled: false },
        { option: "Free Subdomain", enabled: false },
        { option: "Monthly Status Reports", enabled: false },
      ],
      button: "Button",
      button_enabled: false,
    },
    {
      status: "PLUS",
      price: "$9/month",
      description: [
        { option: "5 Users", enabled: true },
        { option: "50GB Storage", enabled: true },
        { option: "Unlimited Public Projects", enabled: true },
        { option: "Community Access", enabled: true },
        { option: "Unlimited Private Projects", enabled: true },
        { option: "Dedicated Phone Support", enabled: true },
        { option: "Free Subdomain", enabled: true },
        { option: "Monthly Status Reports", enabled: false },
      ],
      button: "Button",
      button_enabled: false,
    },
    {
      status: "PRO",
      price: "$49/month",
      description: [
        { option: "Unlimited User", enabled: true },
        { option: "50GB Storage", enabled: true },
        { option: "Unlimited Public Projects", enabled: true },
        { option: "Community Access", enabled: true },
        { option: "Unlimited Private Projects", enabled: true },
        { option: "Dedicated Phone Support", enabled: true },
        { option: "Free Subdomain", enabled: true },
        { option: "Monthly Status Reports", enabled: true },
      ],
      button: "Button",
      button_enabled: true,
    },
  ];
  return (
    <CardPage cardinfo={cardinfo}/>
  )
}

export default App
