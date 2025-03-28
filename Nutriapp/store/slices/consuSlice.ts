import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ConsuItem = {
    name: string;
    category: string;
    price: string;
    quantity: string;
    image: string | null;
}

type ConsuState = {
    items: ConsuItem[];
}

const initialState: ConsuState = {
    items: [{
        name: "",
        category: "",
        price: "",
        quantity: "",
        image: null
    },{
        name: "",
        category: "",
        price: "",
        quantity: "",
        image: null
    }],
}

const consuSlice = createSlice({
    name: "consu",
    initialState,
    reducers:{
        addConsuItem: (state, action: PayloadAction<ConsuItem>) =>{
            state.items.push(action.payload)
        }
    }
})

export const {addConsuItem} = consuSlice.actions;
export default consuSlice.reducer;
