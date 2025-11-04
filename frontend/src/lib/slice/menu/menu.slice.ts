import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ImenuItemStateActionData, ImenuItemStateData } from "./menu.types";
import { STATUS } from "@/lib/global/status";
import { AppDispatch } from "@/lib/store/store";
import { API, APIWITHTOKEN } from "@/lib/http/axios";
import { toast } from "react-toastify";


const initialData: ImenuItemStateActionData = {
  data: [{
    _id: "",
    images: [],
    name: "",
    description: "",
    price: "",
  }],
  status: STATUS.LOADING

}

const menuSlice = createSlice({
  name: "menu",
  initialState: initialData,
  reducers: {
    setData(state: ImenuItemStateActionData, action: PayloadAction<ImenuItemStateData[]>) {
      state.data = action.payload
    },
    setStatus(state: ImenuItemStateActionData, action: PayloadAction<STATUS>) {
      state.status = action.payload
    }
  }
})

export const { setData, setStatus } = menuSlice.actions
export default menuSlice.reducer



export function fetchMenuItem() {
  return async function fetchMenuItemThunk(dispatch: AppDispatch) {
    try {
      const response = await APIWITHTOKEN.post('/menu/fetch', {
      })
      console.log(response.data)
      if (response.status === 200) {

        dispatch(setData(response.data.data))
        dispatch(setStatus(STATUS.SUCCESS))
      } else {
        dispatch(setStatus(STATUS.ERROR))
      }
    } catch (err: any) {
      dispatch(setStatus(STATUS.ERROR))
      if (err.response && err.response.data && err.response.data.message) {

        toast.error("Failed to fetch Items")
      }
    }



  }
}

