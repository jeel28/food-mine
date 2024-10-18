import axios from "axios";

axios.defaults.baseURL =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:5000'  // Local development
    : 'https://food-mine.vercel.app/api';  // Vercel backend (make sure the path is correct)
