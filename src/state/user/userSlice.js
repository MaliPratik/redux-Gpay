import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name:"",
    mobile_no:"",
    balance:0
  },
  reducers: {
    changeValues: (state, action) =>{
        state.name = action.payload.name; 
        state.mobile_no = action.payload.mobile_no; 
        state.balance = action.payload.balance; 

    }
  }
})

export const { changeValues } = userSlice.actions

export default userSlice.reducer