import banner1 from "./img/banner1.webp";
import banner2 from "./img/banner2.webp";
import banner3 from "./img/banner3.webp";
import banner4 from "./img/banner4.webp";

const CartWidget = () => {
    return (
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">

                <div class="carousel-item active">
                    <img src={banner1} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={banner2} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={banner3} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={banner4} class="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

    )
}

export default CartWidget;
