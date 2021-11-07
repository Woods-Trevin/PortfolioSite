
import './ProjectOne.css';

export default function ProjectOneComponent() {

    return (
        <div className="ProjectOne_outmost_ctnr">
            <p className="projects_title"> Portfolio </p>
            <div className="projectOne_SS_ctnr">
                <img className="projectOne splash" src={process.env.PUBLIC_URL + '/TCG/Splash.png'} alt="" />
                <img className="projectOne browse" src={process.env.PUBLIC_URL + '/TCG/BrowsePage.png'} alt="" />
                <img className="projectOne infoReview" src={process.env.PUBLIC_URL + '/TCG/InfoReview.png'} alt="" />
            </div>
            <p className="projectOne_swipeLabel">Swipe to view more</p>
            <p className="projectOne_title" >Triple Confirmed Games</p>
            <p className="projectOne_description" > A Goodreads clone inspired by the groups love of video games. This was built using Javascript and Express for the backend working with a PUG templating engine for the front end. Styled with HTML5 and CSS3 </p>
            <div className="projectOne_links_ctnr">
                <a className="projectOne_live_link" href="https://triple-confirmed-games.herokuapp.com/">Live </a>
                {'|'}
                <a className="projectOne_repo_link" href="https://github.com/Woods-Trevin/TripleConfirmedGames"> Repo</a>
            </div>
        </div>
    );
};