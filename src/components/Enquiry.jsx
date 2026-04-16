import { useState } from "react";
import "../styles/Enquiry.css";

function Enquiry() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 🔥 FLOAT BUTTON */}
      <div className="enquiry-float" onClick={() => setOpen(true)}>
        Enquire Now
      </div>

      {/* 🔥 MODAL */}
      {open && (
        <div className="enquiry-overlay">
          <div className="enquiry-box">

            <button className="close-btn" onClick={() => setOpen(false)}>
              ×
            </button>

            <h2>Enquiry Now</h2>

            <form className="enquiry-form">
              <input type="text" placeholder="Name" required />
              <input type="tel" placeholder="Phone Number" required />
              <input type="email" placeholder="Email" required />
              <textarea placeholder="Message" rows="4"></textarea>

              <button type="submit">Submit</button>
            </form>

          </div>
        </div>
      )}
    </>
  );
}

export default Enquiry;