import ProjectOneComponent from './Project1'
import ProjectTwoComponent from './Project2'
import ProjectThreeComponent from './Project3'
import ProjectFourComponent from './Project4'
import './projects.css';


export default function ProjectsComponent() {
    return (
        <div className="projects_outmost_ctnr">
            <div>
                <ProjectOneComponent />
            </div>
            <div>
                <ProjectTwoComponent />
            </div>
            <div>
                <ProjectThreeComponent />
            </div>
            <div>
                <ProjectFourComponent />
            </div>
        </div>
    );
};