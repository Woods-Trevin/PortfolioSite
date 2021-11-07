import './ProjectThree.css';

export default function ProjectThreeComponent() {

    return (
        <div className="projectThree_outmost_ctnr">
            <div className="projectThree_SS_ctnr">
                <img className="projectThree splash" src={process.env.PUBLIC_URL + "/Kickstarter/splash.png"} alt="" />
                <img className="projectThree project" src={process.env.PUBLIC_URL + "/Kickstarter/ProjectView.png"} alt="" />
                <img className="projectThree updates" src={process.env.PUBLIC_URL + "/Kickstarter/UpdatesView.png"} alt="" />
                <img className="projectThree faqs" src={process.env.PUBLIC_URL + "/Kickstarter/FAQView.png"} alt="" />
                <img className="projectThree comments" src={process.env.PUBLIC_URL + "/Kickstarter/CommentsView.png"} alt="" />
            </div>
            <p className="projectThree_swipeLabel">Swipe to view more</p>
            <p className="projectThree_title" >Kickstarter</p>
            <p className="projectThree_description" > A Kickstarter clone, most effort was put into making it an exact clone. This was built using Python and Flask communicating with a PostgreSQL database for the backend. This application also uses React and Redux for the frontend with alot of moving bits and pieces to make this a high quality clone. HTML5 and CSS3 were used to bring the application to life with almost pixel perfect styling </p>
            <div className="projectThree_links_ctnr">
                <a className="projectThree_live_link" href="https://kickstarter-clone-aa.herokuapp.com/">Live </a>
                {'|'}
                <a className="projectThree_repo_link" href="https://github.com/boromeot/kickstarter-clone"> Repo</a>
            </div>
        </div>
    );
};