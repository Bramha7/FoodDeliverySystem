import { STATUS } from "@/lib/global/status"

export interface IcusRegistration {
  username: string, email: string,
  address: {
    street: string,
    city: string,
    ward: string,
    landmark: string,
  },
  phone_number: string;
  password?: string
}

export interface IcusLoginData {
  success: boolean,
  message: string,
  token: string
}


export interface IcusAuthStateActionData {
  data: IcusLoginData,
  status: STATUS
}

export interface IcusLogin {
  email: string,
  password: string
}

