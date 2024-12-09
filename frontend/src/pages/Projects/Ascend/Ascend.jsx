import { Project } from "../../../components/Project/Project";
import AscendLogo  from "./AscendLogo.png"

export const Ascend = () => {
    return (
            <Project
                logo={AscendLogo}
                projectName="Ascend"
                projectTypes={["Full Stack", "Mobile"]}
                description={[
                    "• Developed a social media app for students to discuss topics related to Ascend, the indoor rock climbing gym at UMass",
                    "• Implemented user authentication, ranked rock climbing leader board, and route forum pages using Java Spring Boot.",
                    "• Built a notification system in Flutter that leverages native phone features to alert students about new climbing routes."
                ]}
                skills={["Java", "Springboot", "Flutter"]}
                timePeriod={"Nov 2024 - Dec 2024"}
                clickables = {[{link: "https://example.com", text: "Application"}, {link: "https://github.com/SriramKoukuntla/Ascend-UMass-Climbing-App", text: "Source"}]}
            />
    )
};