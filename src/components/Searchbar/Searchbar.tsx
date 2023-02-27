import React from "react";
import secondImg from "../../assets/navbar_icon/second.png";
import "./Searchbar.css";


// function Searchbar with the input and select
const Searchbar = () => {
  const [search, setSearch] = React.useState("");
  return (
    <>
      <div className="searchbar">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ flex: 1 }}
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
        <button style={{ background: "green" }}>
          {" "}
          <img
            src={secondImg}
            alt="Repositories"
            style={{
              width: "15px",
              marginRight: "3px",
            }}
          />
          New
        </button>
      </div>
    </>
  );
};

export default Searchbar;
