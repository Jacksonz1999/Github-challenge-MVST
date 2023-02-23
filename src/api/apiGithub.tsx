/* const GITHUB_BASE_URL = 'https://api.github.com/users/Jacksonz1999';
const DEFAULT_PARAMS = {
    api_key:
    "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"
}; */

import axios from "axios";

interface User {
  id: number;
  name: string;
  login: string;
  avatar_url: string;
  
}

export function apiGithub(): Promise<User> {
  const username = "Jacksonz1999";
  const token = "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";
  const url = `https://api.github.com/users/${username}`;

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
