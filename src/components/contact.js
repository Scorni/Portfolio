import '../assets/css/contact/contact.css';

// Here, we display our Navbar
export default function Arrow() {
 return (
    <main className="contact">
        <div className="contactText">
            <h2>
                Want to ask something ? <br/>
                Want a new design for your old website ? <br/>
                Or you just want a new website ? <br/>
                Need help on your current website ? <br />
                Need a custom domain name or hosting your application? <br />
                Don't be afraid of asking me !
            </h2>
        </div>
        <div className="contactForm">
            <form>
                <div className='name'>
                    <label for="name" className="nameLabel">Name</label>
                    <input type="text" name="name" className="nameInput"></input>
                </div>
                <div className='firstName'>
                    <label for="firstName" className="firstNameLabel">First Name</label>
                    <input type="text" name="firstName" className="firstNameInput"></input> 
                </div>
                <br/>
                <div className="mail">
                    <label for="email" className="emailLabel">Email</label>
                    <input type="email" name="email" className="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required></input>
                </div>
                <div className="subject">
                    <label for="subject" className="subjectLabel">Choose your subject</label>
                    <select className="subjectLabel" name="subjectLabel" id="pet-select">
                        <option defaultValue="">-- Please choose your Subject --</option>
                        <option value="Design">Design</option>
                        <option value="Price">Price</option>
                        <option value="Website">Website</option>
                        <option value="Domain">Domain</option>
                        <option value="Hosting">Hosting</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="question">
                    <label for="questionTextArea" className="questionLabel">Ask your question below</label>
                    <textarea className="questionTextArea" name="questionTextArea" form="usrform" placeholder="Write Here !" />
                </div>
                <div className="sendQuestion">
                    <label></label>
                    <input name="submitQuestion" className="submitQuestion" type="submit" value="Send"></input>
                </div>
            </form>
        </div>
    </main>
 );
}