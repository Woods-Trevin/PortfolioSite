import './ProjectFour.css';

export default function ProjectFourComponent() {

    return (
        <div className="projectFour_outmost_ctnr">
            <div className="projectFour_SS_ctnr">
                <img className="projectFour splashTop" src={process.env.PUBLIC_URL + "/ChurchConnect/TopSplash.png"} alt="" />
                <img className="projectFour splashBottom" src={process.env.PUBLIC_URL + "/ChurchConnect/BottomSplash.png"} alt="" />
                <img className="projectFour createAnnouncement" src={process.env.PUBLIC_URL + "/ChurchConnect/CreateAnnouncement.png"} alt="" />
                <img className="projectFour createEvent" src={process.env.PUBLIC_URL + "/ChurchConnect/CreateEvent.png"} alt="" />
                <img className="projectFour display" src={process.env.PUBLIC_URL + "/ChurchConnect/DisplayPage.png"} alt="" />
            </div>
            <p className="projectFour_swipeLabel">Swipe to view more</p>
            <p className="projectFour_title" >Kickstarter</p>
            <p className="projectFour_description" >
                ChurchConnect was a pleasure to design. This was the first project I was able to make
                without any help with backend calls or frontend redux state.
                This application uses Flask and Python communicating with a PostgreSQL database for the backend.
                The frontend uses React Components and Hooks and utilizes Redux to store data from the backend
                in useful slices of state. HTML and CSS were used to design an application that was pleasing to
                the eyes and easy to use for all ages.
            </p>
            <div className="projectFour_links_ctnr">
                <a className="projectFour_live_link" href="https://triple-confirmed-games.herokuapp.com/">Live </a>
                {'|'}
                <a className="projectFour_repo_link" href="https://github.com/Woods-Trevin/TripleConfirmedGames"> Repo</a>
            </div>
        </div>
    );
};