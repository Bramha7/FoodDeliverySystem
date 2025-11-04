import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IcusAuthStateActionData, IcusLogin, IcusLoginData, IcusRegistration } from "./cus.auth.types";
import { STATUS } from "@/lib/global/status";
import { AppDispatch } from "@/lib/store/store";
import { API } from "@/lib/http/axios";
import { toast } from "react-toastify";
import Link from "next/link";

const initialStateData: IcusAuthStateActionData = {
  data: {
    message: "",
    success: false,
    token: ""
  },
  status: STATUS.LOADING
}
const customerAuthSlice = createSlice({
  name: "customerAuth",
  initialState: initialStateData,
  reducers: {
    setData(state: IcusAuthStateActionData, action: PayloadAction<IcusLoginData>) {
      state.data = action.payload
    },
    setStatus(state: IcusAuthStateActionData, action: PayloadAction<STATUS>) {
      state.status = action.payload
    }

  }
})


export const { setData, setStatus } = customerAuthSlice.actions;
export default customerAuthSlice.reducer

export function cusRegistration(data: IcusRegistration) {
  return async function cusRegistrationThunk(dispatch: AppDispatch) {
    try {

      const response = await API.post('/auth/customer/register', data)
      if (response.status === 201) {
        toast.success(response.data.message || 'Registration successful!!')
        dispatch(setStatus(STATUS.SUCCESS))
      } else {
        dispatch(setStatus(STATUS.ERROR))
      }

    } catch (err: any) {

      dispatch(setStatus(STATUS.ERROR))
      if (err.response || err.response.data) {
        toast.error(err.response.data.message)
      }
    }
  }
}

export function customerLogin(data: IcusLogin) {
  return async function cusLoginThunk(dispatch: AppDispatch) {
    try {

      const response = await API.post('/auth/customer/login', data)
      if (response.data.success) {
        dispatch(setStatus(STATUS.SUCCESS))

        toast.success(response.data.message || 'Login successfull!!')
        localStorage.setItem('token', response.data.token)
        dispatch(setData(response.data))
      } else {
        dispatch(setStatus(STATUS.ERROR));
      }


    } catch (err: any) {

      dispatch(setStatus(STATUS.ERROR));

      if (err.response || err.response.data) {
        toast.error(err.response.data.message)
      }

    }


  }
}
