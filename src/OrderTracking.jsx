import React, { useEffect, useState } from "react";

const stages = [
  "Order Placed",
  "Preparing Gift",
  "Out for Delivery",
  "Delivered 🎁",
];

export default function OrderTracking() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (stage < stages.length - 1) {
      const timer = setTimeout(() => setStage(stage + 1), 3000);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Order Tracking</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {stages.map((s, i) => (
          <li
            key={i}
            style={{
              margin: "10px 0",
              fontWeight: i === stage ? "bold" : "normal",
              color: i <= stage ? "green" : "gray",
            }}
          >
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}
