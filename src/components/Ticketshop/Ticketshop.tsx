import React, { useState } from "react";
import { Navbar } from "../Navbar";
import {Stripeckout} from "../Stripechekout";
import "./Ticketshop.css";

const TicketShop = ({ theme, setTheme }) => {
  const [showStripeCheckout, setShowStripeCheckout] = useState(false);

  const handleBuyTicket = () => {
    setShowStripeCheckout(true);
  };
  
  const ticketOptions = [
    { title: "Single Ticket", price: "$2.50" },
    { title: "Day Pass", price: "$10.00" },
    { title: "Weekly Pass", price: "$25.00" },
  ];

  return (
    <div className={`container ${theme}`}>
      <div className="ticket-shop">
        <h2>Ticket Shop</h2>
        <div className="ticket-options">
          {ticketOptions.map((option, index) => (
            <div className="ticket-option" key={index}>
              <h3>{option.title}</h3>
              <p>Price: {option.price}</p>
              <button className="btn btn-primary" onClick={handleBuyTicket}>
          Buy Ticket
        </button>
        {showStripeCheckout && <Stripeckout />}
      </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicketShop;