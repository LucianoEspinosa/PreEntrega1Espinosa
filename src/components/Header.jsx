import logo from "./img/fragancesnet.png";
import CartWidget from "./CartWidget";
import NavBar from "./NavBar";
const Header = () => {
    return (
        <header className="bg-black p-2">
        <div className="container">
            <div className="row align-items-center">
            <div className="col-4"><img src={logo} alt="logo de fragances.net" width={100}/></div>
                <h1 className="col-4 text-center text-white">Fragances.net</h1>
                
                <div className="col-md-4 text-end">
                    <CartWidget />
                </div>
            </div>
        </div >
        <NavBar />
        </header>
    )
}
export default Header;