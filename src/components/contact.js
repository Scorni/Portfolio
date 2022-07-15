import '../assets/css/contact/contact.css';
import {  Trans,useTranslation } from "react-i18next";
import React, { useState } from 'react';

// Here, we display our Navbar
export default function Arrow() {
    const { t, i18n } = useTranslation("");
    const [name, setName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [mail, setMail] = useState("");
    const [subject, setSubject] = useState("");
    const [question, setQuestion] = useState("");
    const handleSubmit = (event) =>{
        console.log(name);
        event.preventDefault();
    }
    return (
        <main className="contact">
            <div className="contactText">
                <Trans i18nKey="text">
                    <h2>
                        Want to ask something ? <br/>
                        Want a new design for your old website ? <br/>
                        Or you just want a new website ? <br/>
                        Need help on your current website ? <br />
                        Need a custom domain name or hosting your application? <br />
                        Don't be afraid of asking me !
                    </h2>
                </Trans>
            </div>
            <div className="contactForm">
                <form onSubmit={handleSubmit}>
                    <div className='name'>
                        <Trans i18nKey="name">
                            <label label for="name" className="nameLabel">Name</label>
                        </Trans>
                        <input placeholder="John" type="text" name="name" className="nameInput" onChange={event => setName(event.target.value)}></input>
                    </div>
                    <div className='firstName'>
                        <Trans i18nKey="firstName">
                            <label for="firstName" className="firstNameLabel">First Name</label>

                        </Trans>
                        <input placeholder="Doe" type="text" name="firstName" className="firstNameInput" onChange={event => setFirstName(event.target.value)}></input> 
                    </div>
                    <br/>
                    <div className="mail">
                        <Trans i18nKey="email">
                            <label for="email" className="emailLabel">Email</label>
                        </Trans>
                        <input placeholder="John@Doe.com"type="email" name="email" className="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"  onChange={event => setMail(event.target.value)} required></input>
                    </div>
                    <div className="subject">
                        <Trans i18nKey="subject">
                            <label for="subject" className="subjectLabel">Choose your subject</label>
                            <select className="subjectLabel" name="subjectLabel" id="pet-select" onChange={event => setSubject(event.target.value)}>
                                <option defaultValue="">Please choose your Subject</option>
                                <option value="Design">Design</option>
                                <option value="Price">Price</option>
                                <option value="Website">Website</option>
                                <option value="Domain">Domain</option>
                                <option value="Hosting">Hosting</option>
                                <option value="Other">Other</option>
                            </select>
                        </Trans>
                    </div>
                    <div className="question">
                        <Trans i18nKey="question">
                            <label for="questionTextArea" className="questionLabel">Ask your question below</label>
                        </Trans>
                        <textarea className="questionTextArea" name="questionTextArea" form="usrform" placeholder="..." onChange={event => setQuestion(event.target.value)}/>
                    </div>
                    <div className="sendQuestion">
                        <label for="submitQuestion"></label>
                        <input name="submitQuestion" className="submitQuestion" type="submit" value={t('submit')} ></input>
                    </div>
                </form>
            </div>
        </main>
    );
}