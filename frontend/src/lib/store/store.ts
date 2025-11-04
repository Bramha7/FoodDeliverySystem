import { configureStore } from "@reduxjs/toolkit";
import cusAuthSlice from '../slice/auth/cus.auth.slice'
import menuSlice from '../slice/menu/menu.slice'
import { ImenuItemStateData } from "../slice/menu/menu.types";

const store = configureStore({
  reducer: {
    cusAuth: cusAuthSlice,
    menu: menuSlice
  }
})

export default store


export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
//
export type AppDispatch = typeof store.dispatch


function fetchMenu(data: ImenuItemStateData) {
  return async function fetchMenuThunk(dispatch: AppDispatch) {

  }
}
