import { STATUS } from "@/lib/global/status";

export interface ImenuItemStateData {
  _id?: string;
  images: string[],
  name: string;
  description: string;
  price: string;

}

export interface ImenuItemStateActionData {
  data: ImenuItemStateData[],
  status: STATUS
}
