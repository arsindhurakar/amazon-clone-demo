export const initialState = {
    cart: [],
}

//SELECTOR
export const getCartTotal = (cart) => {
    return cart?.reduce((amount, item) => amount + item.price, 0)
}

export const reducer = (state, action) => {
    switch(action.type){
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.item]
            };

        case "REMOVE_FROM_CART":
            const index = state.cart.findIndex(
                cartItem => cartItem.id === action.id
                )

            let newCart = [...state.cart]

            if(index >= 0){
                newCart.splice(index, 1)
                }
                else console.warn(`id: ${action.id} not found`)

            return {
                ...state,
                cart: newCart
            }
        
        case "EMPTY_CART": 
            return {
                ...state,
                cart: []
            }

        default:
            return state;
    }
}