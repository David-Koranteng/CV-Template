import  "../App.css";


const Nav = () => {
    return (
        <>
        <nav className="navbar">
            <span className="left">
                <h3>DAVE<strong>GH</strong></h3>
            </span>

            <span className="right">
                <a href="/home">
                    <h3>Home</h3>
                </a>

                <a href="/about">
                    <h3>About</h3>
                </a>

                <a href="skills">
                    <h3>Skills</h3>
                </a>

                <a href="contact">
                    <h3>Contact</h3>
                </a>
            </span>
        </nav>
        </>
    );
};

export default Nav;