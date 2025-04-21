import React, { useState } from "react";
import BookingForm from "./BookingForm";
import styles from "./BookingFormModal.module.scss";

export default function BookingFormModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Sluiten">×</button>
        <h2 className={styles.title}>Boek een fotoshoot</h2>
        <BookingForm />
      </div>
    </div>
  );
}
