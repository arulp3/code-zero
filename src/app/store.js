import {configureStore} from '@reduxjs/toolkit'
import formReducer from '../features/counter/form-slice'


export const store = configureStore({
    reducer:{
        formoverall : formReducer
    }
})
