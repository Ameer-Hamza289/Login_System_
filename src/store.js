import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './Reducers/index';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const persistConfig={
    key:'root',
    storage,
}
const persistedReducer=persistReducer(persistConfig,rootReducer);
// const store = configureStore({
// reducer: rootReducer
// });
 
    let store=configureStore({
        reducer:persistedReducer,
        middleware:[thunk]
    });
    let persistor=persistStore(store);

    
export {store,persistor}


// export default store;