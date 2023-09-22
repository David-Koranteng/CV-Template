import  "../App.css";

const Skills = () => {
    return (
        <>
        <center>
            <h1 className="note"> Skills</h1>
            <div className="ondiv"></div>
            <p className="not">These are my expertees</p>
        </center>
        <div className="skillone">
            <div className="skills">
                <img alt="HTML pic" src="images/htmlnice.jpg"/>
            </div>
            <div className="skills">
                <img alt="CSS pic" src="images/csstwo.png"/>
            </div>
        </div>
        <div className="skill">
            <div className="skills">
                <img alt="Javascript pic" src="images/java.png"/>
            </div>
            <div className="skills">
                <img alt="React pic" src="images/reactgood.png"/>
            </div>
        </div>
        </>
    );
};

export default Skills;