import React, { useState } from "react";
import styles from "./BookingForm.module.scss";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    shootType: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/sendBookingForm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientName: form.name,
          email: form.email,
          phoneNumber: form.phone,
          photoshootType: form.shootType,
          comments: form.message,
          studioLocation: '', // optioneel, veld bestaat in API
        })
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert('Er ging iets mis met verzenden. Probeer het later opnieuw.');
      }
    } catch (err) {
      alert('Er ging iets mis met verzenden. Probeer het later opnieuw.');
    }
  };

  if (submitted) {
    return <div className={styles.successMsg}>Bedankt voor je aanvraag! Ik neem zo snel mogelijk contact met je op.</div>;
  }

  return (
    <form className={styles.bookingForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Naam*</label>
        <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">E-mail*</label>
        <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="phone">Telefoonnummer</label>
        <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="shootType">Soort fotoshoot*</label>
        <select id="shootType" name="shootType" value={form.shootType} onChange={handleChange} required>
          <option value="">Kies een optie</option>
          <option value="portret">Portret</option>
          <option value="familie">Familie</option>
          <option value="fashion">Fashion</option>
          <option value="zwangerschap">Zwangerschap</option>
          <option value="branding">Branding</option>
          <option value="anders">Anders</option>
        </select>
      </div>      <div className={styles.formGroup}>
        <label htmlFor="message">Bericht</label>
        <textarea id="message" name="message" value={form.message} onChange={handleChange} rows={4} />
      </div>
      <button className={styles.submitBtn} type="submit">Verzenden</button>
    </form>
  );
}
