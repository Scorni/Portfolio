import '../assets/css/contact/contact.css';

// Here, we display our Navbar
export default function Arrow() {
 return (
    <main>
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
                <div className='names'>
                    <label for="name" className="nameLabel">Name</label>
                    <input type="text" name="name" className="name"></input>
                    <label for="firstName" className="firstNameLabel">First Name</label>
                    <input type="text" name="firstName" className="firstName"></input> 
                </div>
                <br/>
                <label for="email" className="emailLabel">Email</label>
                <input type="email" name="email" className="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required></input>
                <br/>
                <label for="question" className="questionLabel">Ask your question below</label>
                <br/>
                <input type="text" name="question" className="question"></input>
            </form>
        </div>
    </main>
 );
}