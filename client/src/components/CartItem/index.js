import React from 'react';
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_FAVORITES } from "../../utils/actions";
import { REMOVE_BREWERY } from '../../utils/mutations';

const CartItem = ({ item, removeHandler }) => {
    const [state, dispatch] = useStoreContext();

    const removeFromFavorites = (e) => {
        // only add brewery if not in favorites cart
          dispatch({
            type: REMOVE_FROM_FAVORITES,
            id: item.id,
          });

          removeHandler(e);
      };

  return (
    <div className="flex-row">
      <div>
      </div>
      <div className="icon-text">
        <div className="is-family-monospace">
            <a target="_blank" href={item.website_url}>{item.name}</a>
                </div>
        <div>
          <span onClick={(e) => {
            removeFromFavorites(e);
          }}
            role="img"
            aria-label="trash"
          >
            🗑️
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;