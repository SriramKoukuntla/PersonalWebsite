import "./Project.css";
import { Skill } from "../Skill/Skill";
import { Clickable } from "../Clickable/Clickable";


export const Project = ({ logo, projectName, projectTypes, description, skills, timePeriod, clickables}) => {
    return (
        <div className="MainContainer">
            <div className="HeaderLogoProjectNameProjectTypesTimePeriod">
                <div className="LogoProjectNameProjectTypes">
                    <img src={logo} alt={`${projectName}LogoNotLoading`} className="LucidImage" />
                    <div className="CompanyPosition">
                        <h3>{projectName}</h3>
                        {projectTypes.map((projectType, index) => (
                            <Skill skill = {projectType}/>
                        ))}
                    </div>
                </div>
                <div className="TimePeriod">
                    <p>{timePeriod}</p>
                </div>
            </div>
            <div className="BulletPoints">
                {description.map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>
            <div className="Clickables">
                {clickables.map((clickable) => (
                    <Clickable link = {clickable.link} text = {clickable.text}/>
                ))}
            </div>
            <div className="Skills">
                {skills.map((skill, index) => (
                    <Skill skill = {skill}/>
                ))}
            </div>
        </div>
    );
};