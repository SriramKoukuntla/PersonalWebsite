import "./Skills.css"
import { Skill } from "../../components/Skill/Skill";


const languages = ["Python", "Java", "C", "TypeScript", "JavaScript", "HTML", "CSS", "EJS"]
const webDevelopment = ["SpringBoot", "Node.js", "React", "React Native", "Expo", "Express.js", "MongoDB", "GraphQL"]
const machineLearningAndDataScience = ["NumPy", "Pandas", "Scikit-learn", "NLTK", "SciPy", "Beautiful Soup"]
const developerTools = ["Git", "Jupyter Notebook", "Postman", "VSCode", "Android Studio"]

export const Skills = () => {
    return (
        <div id = "Skills">
            <div className = "TopMarginDivSkills"></div>
            <div className = "SkillsContainer">
                <h1 className = "Header">Skills</h1>
                <h3>Languages: {languages.map((skill, index) => (<Skill skill = {skill}/>))}</h3>
                <h3>Web Development : {webDevelopment.map((skill, index) => (<Skill skill = {skill}/>))}</h3>
                <h3>Machine Learning/Data Science: {machineLearningAndDataScience.map((skill, index) => (<Skill skill = {skill}/>))}</h3>
                <h3>Developer Tools: {developerTools.map((skill, index) => (<Skill skill = {skill}/>))}</h3>

            </div>
        </div>
    )
}


// import Skill from ""
{/* <Skill skill = {"Python"}/> */}