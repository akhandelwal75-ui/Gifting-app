import React, { useState } from 'react'

const catalog = [
  { id: 'f1', title: 'Rose Bouquet', price: 899 },
  { id: 'c1', title: 'Chocolate Hamper', price: 1299 },
  { id: 'p1', title: 'Personalized Mug', price: 599 },
]

export default function App() {
  const [form, setForm] = useState({ name: '', recipient: '', occasion: '', budget: 1000 })
  const [cart, setCart] = useState([])

  const suggestions = catalog.filter(item => item.price <= form.budget)

  const addToCart = (item) => {
    setCart([...cart, item])
  }

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center">🎁 Gifting App Prototype</h1>

      {/* Form */}
      <div className="space-y-3 bg-white p-4 rounded-xl shadow">
        <input className="border p-2 w-full" placeholder="Your Name" value={form.name}
          onChange={e=>setForm({...form, name: e.target.value})} />
        <input className="border p-2 w-full" placeholder="Recipient" value={form.recipient}
          onChange={e=>setForm({...form, recipient: e.target.value})} />
        <input className="border p-2 w-full" placeholder="Occasion" value={form.occasion}
          onChange={e=>setForm({...form, occasion: e.target.value})} />
        <input type="number" className="border p-2 w-full" placeholder="Budget" value={form.budget}
          onChange={e=>setForm({...form, budget: Number(e.target.value)})} />
      </div>

      {/* Suggestions */}
      <div className="space-y-3">
        <h2 className="font-semibold">Suggested Gifts</h2>
        {suggestions.map(item => (
          <div key={item.id} className="flex justify-between items-center bg-white p-3 rounded shadow">
            <div>{item.title} - ₹{item.price}</div>
            <button onClick={()=>addToCart(item)} className="bg-pink-500 text-white px-3 py-1 rounded">Add</button>
          </div>
        ))}
      </div>

      {/* Cart */}
      <div className="space-y-3">
        <h2 className="font-semibold">Cart</h2>
        {cart.length === 0 && <p>No items yet.</p>}
        {cart.map((item, idx) => (
          <div key={idx} className="flex justify-between bg-white p-2 rounded">
            <span>{item.title}</span>
            <span>₹{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  )
}