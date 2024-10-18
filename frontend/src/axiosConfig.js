import axios from "axios";

// Set base URL based on the environment (development or production)
axios.defaults.baseURL =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:5000'  // Local development backend
    : 'https://food-mine.vercel.app';  // Correct production backend path