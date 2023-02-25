import axios from 'axios';

interface Repository {
  name: string;
  url: string;
  description: string;
}

export async function searchRepositories(query: string): Promise<Repository[]> {
  const response = await axios.get(`https://api.github.com/search/repositories?q=${query}`, {
    headers: {
      Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
    },
  });
  return response.data.items.map((item: any) => ({
    name: item.name,
    url: item.html_url,
    description: item.description,
  }));
}
