import { createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
  name: 'users',
  initialState: [],
   
  reducers: {
    addFriends: (state, action) =>{
        state.push(action.payload);
    },
    updateBalance: (state, action)=>{
      let users = state.map((user, i)=>{
        console.log(user);
        if(user.name === action.payload.name){
          user.balance = parseFloat(user.balance) + parseFloat(action.payload.balance);
        } 
        return user;
      });
      state = users;
    }
  },
})

export const { addFriends, updateBalance } = usersSlice.actions;

export default usersSlice.reducer;