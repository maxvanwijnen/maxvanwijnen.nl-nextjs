import React from 'react';
import css from './ContactForm.module.scss';

const ContactForm = () => {
    return (
        <section className={css['contact-form']}>
            <form>
                <label htmlFor="name">
                    Naam:
                    <input type="text" name="name"/>
                </label>
                <label htmlFor="email">
                    Telefoon:
                    <input type="text" name="email"/>
                </label>
                <label htmlFor="telefoon">
                    Telefoon:
                    <input type="text" name="telefoon"/>
                </label>
                <label htmlFor="comment">
                    Vraag of opmerking:
                    <textarea name="comment"></textarea>
                </label>
                <button type="submit">Versturen</button>


            </form>
        </section>
    )
}

export default ContactForm;