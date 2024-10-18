axios.defaults.baseURL =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:5000' 
    : 'https://food-mine.vercel.app/';
