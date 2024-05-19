import { createSlice,  PayloadAction} from "@reduxjs/toolkit";

// Create TypeUsers
export interface trainerUser{
    trainer : string;
}

const initialState : trainerUser = {
    trainer : ""
};


const newTrainer =  createSlice({
    name : "trainer", 
    initialState, 
    reducers : {
        createTrianer : (state, action:PayloadAction<string>) =>{
            state.trainer = action.payload;
        }
    }
});

export const {createTrianer} = newTrainer.actions;
export default newTrainer.reducer
