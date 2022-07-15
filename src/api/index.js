import axios from 'axios';
// https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT-B
const BASE_URL = 'https://strangers-things.herokuapp.com/api/';
const COHORT_NAME = '2206-FTB-ET-WEB-FT-B';
const API_URL = BASE_URL + COHORT_NAME;

export async function getMe(token) {
  try {
    const { data } = await axios.get(`${API_URL}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function login(user) {
  try {
    const { data } = await axios.post(`${API_URL}/users/login`, { user });
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getPosts() {
  try {
    const { data } = await axios.get(`${API_URL}/posts`);
    // const {posts} = data;

    return data;
  } catch (error) {
    throw error;
  }
}
