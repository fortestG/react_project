import axios from "axios";
import { API_URL } from "../constants";

class Api {
  public static async getAllProduct() {
    const url = `${API_URL}/product`
    return await axios.get(url)
  }
}

export default Api