import './ItemListContainer.css';
function ItemListContainer({greeting, greeting1 }) {
    return (        
        <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={greeting} className="d-block w-100 h-auto" alt="Carousel Primera Imagen" />
                </div>
                <div className="carousel-item">
                    <img src={greeting1} className="d-block w-100 h-auto" alt="Carousel Segunda Imagen" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                <span className="material-symbols-outlined">
                    chevron_left
                </span>
                <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                <span className="material-symbols-outlined">
                    chevron_right
                </span>
                <span className="visually-hidden">Next</span>
            </a>
        </div>
    );
}

export default ItemListContainer;