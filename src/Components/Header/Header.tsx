import "./Header.css";
import { HeaderProps } from "../../utils/dataAndTypes/interfaces";


const Header = ({ appname, logo}: HeaderProps) => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt={`logo for ${appname}`} />
            <h1>Reviews for {appname}</h1>
        </div>
    )
}

export default Header;
