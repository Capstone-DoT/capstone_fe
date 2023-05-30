import axios from "axios";
import { useSelector } from "react-redux";

export const instance = axios.create({baseURL:"http://54.180.62.54:3001/"})


