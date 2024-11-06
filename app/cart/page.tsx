'use client';

import { useCart } from '@/context/CartContext';
import ShoppingCart from '@/components/ShoppingCart';

const CartPage = () => {
  const { state, dispatch } = useCart();

  const handleUpdateQuantity = (id: string, quantity: number) => {
    // Prevent negative or zero quantities
    if (quantity <= 0) {
      handleRemoveItem(id);
      return;
    }

    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id, quantity }
    });
  };

  const handleRemoveItem = (id: string) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: id
    });
  };

  return (
    <ShoppingCart
      items={state.items}
      onUpdateQuantity={handleUpdateQuantity}
      onRemoveItem={handleRemoveItem}
    />
  );
};

export default CartPage;