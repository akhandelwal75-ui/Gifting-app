import React, { useState } from "react";
import OrderTracking from "./OrderTracking";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("home");

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    recipient: "",
    occasion: "",
    date: "",
    budget: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully! 🎉");
    setCurrentScreen("tracking");
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      {currentScreen === "home" && (
        <>
          <h1>Gift Ordering App 🎁</h1>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "400px",
              margin: "0 auto",
              gap: "10px",
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="recipient"
              placeholder="Recipient Name"
              value={formData.recipient}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="occasion"
              placeholder="Occasion"
              value={formData.occasion}
              onChange={handleChange}
              required
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="budget"
              placeholder="Budget"
              value={formData.budget}
              onChange={handleChange}
              required
            />
            <textarea
              name="address"
              placeholder="Delivery Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <button type="submit">Place Order</button>
          </form>
        </>
      )}

      {currentScreen === "tracking" && <OrderTracking />}
    </div>
  );
}
