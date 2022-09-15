import { createSlice } from '@reduxjs/toolkit';
import initialState from '@store/initialState';


const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
      showAddEmployeeForm: (state, action) => {
        state.company.AddEmployee.showForm = true;
      },
      hideAddEmployeeForm: (state, action) => {
        state.company.AddEmployee.showForm = false;
      }

    },          
  });



const actions = globalSlice.actions;
const reducers = globalSlice.reducer;
export {actions, reducers};