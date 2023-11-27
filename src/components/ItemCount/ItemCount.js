import React, { useEffect, useState } from "react";
import './ItemCount.css';


const ItemCount = ({ initialCount, stock, onAddToCart }) => {
	const [count, setCount] = useState(parseInt(initialCount));

	const decreaseCount = () => {
		setCount(count - 1);
	};

	const increaseCount = () => {
		if (count < stock) {
			setCount(count + 1);
		}
	};

	useEffect(() => {
		setCount(parseInt(initialCount));
	}, [initialCount]);

	return (
		<div className="counter">
			<button disabled={count <= 1} onClick={decreaseCount} className="operacion">
				-
			</button>
			<span>{count}</span>
			<button disabled={count >= stock} onClick={increaseCount} className="operacion">
				+
			</button>

			<div>
				<button disabled={count === stock || stock <= 0} onClick={() => onAddToCart(count)} className="btn operacion">
					Agregar al carrito
				</button>
			</div>
		</div>
	);
};

export default ItemCount;
