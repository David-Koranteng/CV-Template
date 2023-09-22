import  "../App.css";


const Contact = () => {
    return (
        <>
        <div className="contact">
            <div className="conleft">

                <img className="logopic" alt="Authur" src="images/logo.png"/>

                <p>
                    Let's get social on any of the social media platforms. <br/>
                    Follow me on twitte, instagram and also whatsapp<br/>
                     me on <a href="whatsup"><em>0597365627</em></a>  
                 </p>

            </div>

            <div className="conright">
                <h2>CONTACT</h2>

                <div className="condiv"></div>
                <p>
                    / / Submit the form below or shoot me an email - davidkoranteng350@gmail.com
                </p>

                <form>

                    <input type="name" placeholder="Name"></input>
                    <input type="email" placeholder="Email"></input>
                    <textarea className="message" type="text" placeholder="Message"></textarea>

                    <button href='fddd'>Submit</button>

                </form>

            </div>

        </div>
        </>
    );
};


export default Contact;