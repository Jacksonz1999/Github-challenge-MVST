import axios from "axios";

interface RepositoryGithub {
  name: string;
  description: string;
  language: string;
  url: string;
  stars: number;
}

export async function apiGithubRepo(
    username: string
): Promise<RepositoryGithub[]> {
  try {
    const url = `https://api.github.com/users/${username}/repos`;

    const response = await axios.get(url);
    const data = response.data;
    const repositories = data.map((repository: any) => {
      return {
        name: repository.name,
        description: repository.description,
        language: repository.language,
        url: repository.html_url,
        stars: repository.stargazers_count,
      };
    });
    return repositories;
  } catch (error) {
    console.log(error);
    return [];
  }
}
