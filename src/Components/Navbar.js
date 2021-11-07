
import { NavLink } from 'react-router-dom';
import './Navbar.css'


export default function Navbar() {
    return (
        // <nav className="navbar_outmost_ctnr">
        //     <ul className="navbar_inner_ctnr">
        //         <li className="navbar_home_ctnr">
        //             <NavLink className="navbar_home_link" to='/' exact="true">
        //                 Home
        //             </NavLink>
        //         </li>
        //         <li className="navbar_skills_ctnr">
        //             <NavLink className="navbar_skills_link" to='/' exact="true">
        //                 Skills
        //             </NavLink>
        //         </li>
        //         <li className="navbar_portfolio_ctnr">
        //             <NavLink className="navbar_portfolio_link" to='/projects' exact="true">
        //                 Portfolio
        //             </NavLink>
        //         </li>
        //         <li className="navbar_aboutme_ctnr" >
        //             <NavLink className="navbar_aboutme_link" to='/about' exact="true">
        //                 About
        //             </NavLink>
        //         </li>
        //         <li className="navbar_contact_ctnr" >
        //             <NavLink className="navbar_contact_link" to='/about' exact="true">
        //                 Contact
        //             </NavLink>
        //         </li>
        //     </ul>
        // </nav>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Home</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/skills">Skills</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="/portfolio">Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="/about">About</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link active" href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};