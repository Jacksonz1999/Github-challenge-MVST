import React, { useEffect, useState } from "react";
import "./MainContent.css";
import { apiGithubRepo } from "../../api/apiGithubRepo";

interface Repository {
  name: string;
  description: string;
  language: string;
  stars: number;
}

const MainContent = () => {
  const [data, setData] = useState([] as Repository[]);

  useEffect(() => {
    const username = "Jacksonz1999";
    const getData = async () => {
      const result = await apiGithubRepo(username);
      setData(result);
    };

    getData();
  }, []);

  console.log(data);

  return (
    <>
      <div className="mainContent_repository">
        {data.slice(0, 5).map((repository, index) => {
          return (
            <div className="mainContent">
              {index !== data.length - 1 && <hr />}
              <div className="mainContent_name">
                <h3>{repository.name}</h3>
              </div>

              <div className="mainContent_description">
                <p>{repository.description}</p>
              </div>

              <div className="mainContent_language">
                <p>{repository.language}</p>
              </div>

              <div className="mainContent_stars">
                <p>{repository.stars}⭐</p>
              </div>
              
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MainContent;
