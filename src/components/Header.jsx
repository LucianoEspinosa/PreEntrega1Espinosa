import NavBar from "./NavBar";
import logo from "./img/fragancesnet.png";

const Header = () => {
    return (
        <div classlist="navbar navbar-expand-md navbar-dark">
            <h1>Fragances.net</h1>
            <div classlist="align-items-end flex-md-column align-items-md-center">
                <a href="index.html">
                    <img src={logo} alt="logo fragances.net"/>
                </a>
                <button classlist="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span classlist="navbar-toggler-icon"></span>
                </button>
                <NavBar />  
            </div>
        </div>
    )
}
export default Header;