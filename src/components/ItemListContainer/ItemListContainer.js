import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import productos from '../Json/Productos.json';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';


function ItemListContainer({showGreetings, greeting, greeting1 }) {
    const [item, setItems] = useState([]);
    const {id } = useParams();
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedData = await new Promise((resolve) => {
                    setTimeout(() => {
                        if (id === 'error') {
                            throw new Error('Ocurrió un error al cargar los datos.');
                        }
                        resolve(id ? productos.filter(item => item.categoria === id) : productos);
                    }, 2000);
                });
                setItems(fetchedData);
            } catch (error) {
                setError(error.message);
            }
        };
        fetchData();
    }, [id]);

    return (
        <div>
            { showGreetings &&
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
            </div> }
            <div className='itemsContainer'>
                {error ? (
                    <div className='error-message'>
                        {error}
                    </div>
                ) : (
                <div className='row'>
                    <ItemList item={item}/>
                </div>
                )}
            </div>
        </div>
    );
}

export default ItemListContainer;