import { Project } from "../../../components/Project/Project";
import RepVaultLogo from "./RepVaultLogo.svg" 

export const RepVault = () => {
    return (
            <Project
                logo={RepVaultLogo}
                projectName="RepVault"
                projectTypes={["Full Stack"]}
                description={[
                    "• Developed a workout web app for users to log exercises/weights/reps to track progress using MERN and JWT tech stack",
                    "• Implemented user authentication with salting and hashing to enhance password protection using JWT and Bycrpt",
                    "• Improved user experience by integrating validation error messages during user authentication using Validator library",
                    "• Stored each workout log using MongoDB, and improved app reliability by validating data entries using Mongoose",
                    "• Used Node.js as the runtime environment, and Express.js, Postman, Morgan Middleware for API development"
                ]}
                skills={["React", "Node.js", "Express", "MongoDB", "JSON WebTokens"]}
                timePeriod={"Nov 2023 - Dec 2023"}
                clickables = {[{link: "https://github.com/SriramKoukuntla/MERN-Workout-Tracker-APP", text: "Source"}]}
                //{link: "https://example.com", text: "Application"}, 
            />
    )
};