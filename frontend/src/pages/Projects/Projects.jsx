import { RepVault } from "./RepVault/RepVault";
import { Ascend } from "./Ascend/Ascend"
import { FiveDJupyterNotebook } from "./5DJupyterNotebook/5DJupyterNotebook";
import { MetaMatch } from "./MetaMatch/MetaMatch";
import "./Projects.css"

export const Projects = () => {
    return (
        <div id = "Projects">
            <div className = "TopMarginDivProjects"></div>
            <div className = "ProjectsContainer">
                <h1 className = "Header">Projects</h1>
                <RepVault/>
                <Ascend/>
                <FiveDJupyterNotebook/>
                <MetaMatch/>
            </div>
        </div>
    );
};


