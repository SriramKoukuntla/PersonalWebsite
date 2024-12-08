import logo from "./LucidLogo.webp";
import "./LucidExperience.css";
import { Skill } from "../../../components/Skill/Skill";

export const LucidExperience = () => {
    return (
        <div className = "MainContainer">
            <div className = "HeaderLogoCompanyPositionTimePeriod">
                <div className = "LogoCompanyPosition">
                    <img src={logo} alt = "LucidLogoNotLoading" className="LucidImage"/>
                    <div className = "CompanyPosition">
                        <h3>Lucid</h3>
                        <p>Full Stack Developer Intern</p>
                    </div>

                </div>
                <div className = "TimePeriod">
                    <p>Mar 2024 - Aug 2024</p>
                </div>
            </div>  
            <div className = "BulletPoints">
                <p>Core Projects: TV App, Artist Onboard Website</p>
                <p>• Expanded market reach by 50% by developing and deploying a TV app for multiple platforms using React Native, Expo, and integrating existing CMS backend architecture with GraphQL APIs</p>
                <p>• Saved the company $30,000 in potential future development costs by researching and analyzing different development frameworks, ultimately identifying and implementing the most cost-effective solution for development</p>
                <p>• Implemented user authentication and search engine features for the TV app, improving user experience for daily users</p>
                <p>• Worked on developing a full stack web app with form submission using MERN & JWT to accelerate artist on boarding</p>
                <p>• Reported weekly progress directly to the CEO and tech lead, ensuring project alignment and transparency</p>
            </div>
            <div className="Skills">
                <Skill skill="JavaScript/TypeScript"/> 
                <Skill skill="React"/>
                <Skill skill="Node"/>
                <Skill skill="Express"/>
                <Skill skill="MongoDB"/>
            </div>

        </div>
    ) 
}