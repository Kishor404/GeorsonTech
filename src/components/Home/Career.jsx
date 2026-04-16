import { useState } from "react";
import emailjs from "emailjs-com";
import "../../styles/Career.css";

function Career() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "YOUR_SERVICE_ID",   // 🔥 replace
      "YOUR_TEMPLATE_ID",  // 🔥 replace
      form,
      "YOUR_PUBLIC_KEY"    // 🔥 replace
    )
    .then(() => {
      setStatus("Message sent successfully ✅");
      setForm({ name: "", phone: "", email: "", message: "" });
    })
    .catch(() => {
      setStatus("Failed to send ❌");
    });
  };

  return (
    <div className="career-section">
      <h2>CAREERS</h2>

      <form className="career-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email ID"
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Describe yourself (Max 5000 characters)"
          value={form.message}
          onChange={handleChange}
          maxLength="5000"
          rows="5"
          required
        />

        <button type="submit">Send</button>

        {status && <p className="status">{status}</p>}
      </form>
    </div>
  );
}

export default Career;