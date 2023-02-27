/* We import axios for use the API */
import axios from "axios";

/* Declare the class of a user (id,name,login,avatar_url) */
// We export the interface User
interface User {
  id: number;
  name: string;
  login: string;
  avatar_url: string;
  
}
// We export the function apiGithub
export function apiGithub(): Promise<User> {
  
  const token = process.env.REACT_APP_GITHUB_TOKEN;
  const url = `${process.env.REACT_APP_GITHUB_API_URL}/users/${process.env.REACT_APP_GITHUB_USER}`;
  
// We use axios to get the data of the user
  return axios
    .get(url, {
      headers: {
        Authorization: `token ${token}`,
      },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
      
    })
    .catch((error) => {
      console.log(error);
      return {} as User;
    });
}
