import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    formArray : JSON.parse(localStorage.getItem('forms') || '[]')
}

export const formSlice = createSlice({
    name : 'formOverall',
    initialState,
    reducers : {
        addItemstoFormArray : (state, action)=>{

            // state.formArray.push(action.payload)


            let forms = JSON.parse(localStorage.getItem('forms') || '[]')
            // forms.push(action.payload)
            let newArray = [...forms, action.payload]
              localStorage.setItem('forms', JSON.stringify(newArray))
             state.formArray.push((localStorage.getItem('forms')))
              
        }
    }
})

export const {addItemstoFormArray} = formSlice.actions

export default formSlice.reducer