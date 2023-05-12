import logo from "./img/logo-texto.png";
import location from "./img/icon/geo-alt-fill.svg";
import mail from "./img/icon/envelope-at.svg";
import phone from "./img/icon/telephone.svg";
import facebook from "./img/icon/facebook.svg";
import instagram from "./img/icon/instagram.svg";
const Footer = () => {
    return (
        <div className="bg-body-secondary py-2">
            <div className="container">
                <div className="row align-items-start py-3">
                    <div className="col-3">
                        <img src={logo} alt="logo fragances.net" width={170} />
                    </div>
                    <div className="col-3">
                        <h5>INFO DE LA TIENDA</h5>
                        <div className="d-flex gap-1 mt-3">
                            <img src={location} alt="locacion" width={25} />
                            <h6>direccion</h6>
                        </div>
                        <div className="d-flex gap-1 mt-2 ">
                            <img src={mail} alt="mail" width={25} />
                            <h6>fragances.net@gmail.com</h6>
                        </div>
                        <div className="d-flex gap-1 mt-2">
                            <img src={phone} alt="telefono" width={25} />
                            <h6>011-4362-5000</h6>
                        </div>
                    </div>
                    <div className="col-3">
                        <h5>NUESTRA TIENDA</h5>
                        <h6 className="mt-3">Terminos y condiciones</h6>
                        <h6 className="mt-2">Sobre Nonsotros</h6>
                        <h6 className="mt-2">Contacto</h6>
                    </div>
                    <div className="col-3">
                        <h5>ENCONTRANOS EN:</h5>
                        <div className="d-flex gap-1 mt-3">
                            <img src={facebook} alt="logo facebook" width={25} />
                            <h6>/fragancenet</h6>
                        </div>
                        <div className="d-flex gap-1 mt-2">
                            <img src={instagram} alt="logo instagram" width={25} />
                            <h6>@fragancesnet</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;