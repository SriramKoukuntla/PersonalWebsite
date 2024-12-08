import "./Clickable.css";
import hyperLinkLogo from "./hyperLinkLogo.png";

export const Clickable = ({link, text}) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="Clickable">
            <p>{text}</p>
            <img src={hyperLinkLogo} alt = {`${link}`} className="hyperLinkLogo"/>
        </a>
    )
}