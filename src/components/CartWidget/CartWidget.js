import './CartWidget.css';

function CartWidget() {
    const contador = 0;
    return (
        <div className="icons">
            <a href="#">
                <i className="material-symbols-outlined">
                    shopping_bag
                </i>
                <span className="contador-item">{contador}</span>
            </a>
        </div>
    )
}
export default CartWidget;

