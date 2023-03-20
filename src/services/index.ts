import axios from "axios";
//import types
import { DataType } from "../types";

export const getData = async (id: number) => {
  const items: any = await axios.get(
    `https://give-me-users-forever.vercel.app/api/users/${id}/next`
  );
  const display_row: number = 10;
  const data: DataType[] = items.data.users.slice(id, id + display_row);
  return data;
};
