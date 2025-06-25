import { createSlice } from "@reduxjs/toolkit"

export const citiesSlice = createSlice({
    name: "cities",
    initialState: {
        value: [{
            id: 1,
            title: "tokyo",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            imageURL: "https://picsum.photos/300/299",
            isVisited: true
          },
          {
            id: 2,
            title: "parigi",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            imageURL: "https://picsum.photos/300/300",
            isVisited: false
          },
          {
            id: 3,
            title: "londra",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            imageURL: "https://picsum.photos/300/301",
            isVisited: true
          },
          {
            id: 4,
            title: "new york",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            imageURL: "https://picsum.photos/301/300",
            isVisited: false
          },
          {
            id: 5,
            title: "roma",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            imageURL: "https://picsum.photos/301/301",
            isVisited: false
          },
          {
            id: 6,
            title: "berlino",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            imageURL: "https://picsum.photos/301/302",
            isVisited: false
          },
        ],
    },
    reducers: {
        add: (state, action) => {
            state.value.push(action.payload)
        }
    }
})

export const { add } = citiesSlice.actions

export const citiesReducer = citiesSlice.reducer