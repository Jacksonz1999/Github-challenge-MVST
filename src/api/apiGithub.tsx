
import axios from "axios";

interface User {
  id: number;
  name: string;
  login: string;
  avatar_url: string;
  
}

export function apiGithub(): Promise<User> {
  
  const token = process.env.REACT_APP_GITHUB_TOKEN;
  const url = `${process.env.REACT_APP_GITHUB_API_URL}/users/${process.env.REACT_APP_GITHUB_USER}`;
  

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
