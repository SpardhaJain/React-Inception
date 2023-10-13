const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from './cartSlice';

const appStore = configureStore({
    // add slices inside it
    reducer: {
        cart: cartReducer
    }
});

export default appStore;