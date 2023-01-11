import axios from 'axios';

const GetCities = async () => {
  try {
    const response = await axios.get("http://localhost:5000/all");
    console.log(response.data);
    
  } catch (error) {
    console.log(error)
  }
};

GetCities();

export default GetCities;