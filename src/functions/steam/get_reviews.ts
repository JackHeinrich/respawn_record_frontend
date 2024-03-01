import axios from "../../util/axios";

const apiUrl = 'steam/get_reviews/'; // Replace 'your_port' and 'endpoint' with your actual API URL

const get_reviews = async (appId: number) => {
  try {
    const response = await axios.get(apiUrl + appId + '?json=1&cursor=*');
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

export default get_reviews;