import './ProjectTwo.css';

export default function ProjectTwoComponent() {

    return (
        <div className="projectTwo_outmost_ctnr">
            <div className="projectTwo_SS_ctnr">
                <img className="projectTwo splash" src={process.env.PUBLIC_URL + "/Gamebrite/Splash.png"} alt="" />
                <img className="projectTwo eventView" src={process.env.PUBLIC_URL + "/Gamebrite/ViewEvent.png"} alt="" />
                <img className="projectTwo userEvents" src={process.env.PUBLIC_URL + "/Gamebrite/MyEvents.png"} alt="" />
            </div>
            <p className="projectTwo_swipeLabel">Swipe to view more</p>
            <p className="projectTwo_title" >Gamebrite</p>
            <p className="projectTwo_description" > An Eventbrite clone inspired by my love of video games. This was built using Javascript and Express communicating with a PostgreSQL database for the backend. This was my first attempt at styling on my own. I consider this my most challenging application with HTML and CSS because there was a lot to learn. This application also uses React and Redux for the frontend. </p>
            <div className="projectTwo_links_ctnr">
                <a className="projectTwo_live_link" href="https://gamebrite.herokuapp.com/">Live </a>
                {'|'}
                <a className="projectTwo_repo_link" href="https://github.com/Woods-Trevin/Gamebrite"> Repo</a>
            </div>
        </div>
    );
};