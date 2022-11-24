const CartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;
    // console.log(product);

    // tackle the existing product

    let existingProduct = state.cart.find(
      (curItem) => curItem.id === id + color
    );

    if (existingProduct) {
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id === id + color) {
          let newAmount = curElem.amount + amount;

          if (newAmount >= curElem.max) {
            newAmount = curElem.max;
          }
          return {
            ...curElem,
            amount: newAmount,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  //   To set the increment and decrement
  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let decAmt = curElem.amount - 1;

        if (decAmt <= 1) {
          decAmt = 1;
        }

        return {
          ...curElem,
          amount: decAmt,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let incAmt = curElem.amount + 1;

        if (incAmt >= curElem.max) {
          incAmt = curElem.max;
        }
        return {
          ...curElem,
          amount: incAmt,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );
    // console.log(updatedCart);
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  //   if (action.type === "CART_TOTAL_ITEM") {
  //     let updatedItemVal = state.cart.reduce((initialVal, curElem) => {
  //       let { amount } = curElem;

  //       initialVal = initialVal + amount;
  //       return initialVal;
  //     }, 0);

  //     return {
  //       ...state,
  //       total_item: updatedItemVal,
  //     };
  //   }

  //   if (action.type === "CART_TOTAL_AMOUNT") {
  //     let total_amount = state.cart.reduce((initialVal, curElem) => {
  //       let { price, amount } = curElem;

  //       initialVal = initialVal + price * amount;
  //       return initialVal;
  //     }, 0);

  //     return {
  //       ...state,
  //       total_amount: total_amount,
  //     };
  //   }

  if (action.type === "CART_ITEM_AMOUNT_TOTAL") {
    let { total_item, total_amount } = state.cart.reduce(
      (accum, curElem) => {
        let { price, amount } = curElem;

        accum.total_item += amount;
        accum.total_amount += price * amount;

        return accum;
      },
      {
        total_item: 0,
        total_amount: 0,
      }
    );
    return {
      ...state,
      total_item,
      total_amount,
    };
  }

  return state;
};

export default CartReducer;
