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
  const [search, setSearch] = React.useState("");
  const [data, setData] = useState<Repository[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  useEffect(() => {
    const username = "Jacksonz1999";
    const getData = async () => {
      const result = await apiGithubRepo(username);
      setData(result);
    };

    getData();
  }, []);

  const filteredData = data.filter((repository) =>
    repository.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="searchbar">
        <input
          style={{
            flex: 1,
            height: "40px",
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search or jump to..."
        />
        <select>
          <option value="Type">Type: All</option>
          <option value="all">Public</option>
          <option value="all">Private</option>
          <option value="all">Sources</option>
          <option value="all">Forks</option>
          <option value="all">Archived</option>
          <option value="all">Mirrors</option>
          <option value="all">Template</option>
        </select>
        <select>
          <option value="Language">Language: All</option>
          <option value="all">JavaScript</option>
          <option value="all">TypeScript</option>
          <option value="all">HTML</option>
          <option value="all">CSS</option>
          <option value="all">Python</option>
          <option value="all">Java</option>
          <option value="all">C++</option>
          <option value="all">C#</option>
          <option value="all">C</option>
          <option value="all">PHP</option>
          <option value="all">Ruby</option>
          <option value="all">Go</option>
        </select>
      </div>

      <div className="mainContent_repository">
        {filteredData.length === 0 ? (
          <p>No results found.</p>
        ) : (
          filteredData
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((repository, index) => {
              return (
                <div className="mainContent">
                  {index !== data.length - 1 && <hr />}
                  <div className="mainContent_name">
                    <h3 style={{ color: "blue" }}>{repository.name}</h3>
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
            })
        )}
      </div>
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <p className="button_pagination">Previous</p>
        </button>
        <div className="current_page">{currentPage}</div>

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === 4}
        >
          <p className="button_pagination">Next</p>
        </button>
      </div>
    </>
  );
};

export default MainContent;
