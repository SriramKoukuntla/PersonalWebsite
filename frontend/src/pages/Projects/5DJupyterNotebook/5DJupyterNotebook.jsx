import { Project } from "../../../components/Project/Project";
import fiveDJupyterNotebookLogo  from "./5DJupyterNotebookLogo.webp"

export const FiveDJupyterNotebook = () => {
    return (
            <Project
                logo={fiveDJupyterNotebookLogo}
                projectName="5DJupyterNotebook"
                projectTypes={["Full Stack", "DataScience", "Machine Learning"]}
                description={[
                    "• Building Jupyter Notebook specific IDE which allows for packages that would typically cause dependency conflicts to work on the same project through managing multiple virtual environments and kernels on a local jupyter notebook server",
                    "• Developing new file type (.ipynb5d) and interpreter to support branching mechanism and to memoize previous results",
                    "• Integrating SamabaNova A.I. API to automatically compare different branches and provide data pattern business insights"
                ]}
                skills={["React", "Node.js", "Express"]}
                timePeriod={"Nov 2024 - Present"}
                clickables = {[{link: "https://github.com/SriramKoukuntla/5D_Jupyter_Notebook", text: "Source"}]} 
                // {link: "https://example.com", text: "Application"},
            />
    )
    
};