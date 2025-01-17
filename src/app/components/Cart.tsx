// app/components/Cart.tsx
'use client'; // Ensure this is at the top

import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../../store-redux/slices/cart';

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const handleAddToCart = (item) => {
    const index=item?.length+1

    const i={id:index,
        productName:`x`+index,
        quantity:index,
        price:10000}
    dispatch(addToCart(i));
  };

  const handleRemoveFromCart = (id:number) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
        <button onClick={()=>handleAddToCart(items)}>add</button>
      {items.map((item) => (
        <div key={item.id}>
          <h3>{item.id}</h3>

          <h3>{item.productName}</h3>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
        </div>
      ))}
      {/* Add buttons or forms to add items to the cart */}
    </div>
  );
};

export default Cart;
