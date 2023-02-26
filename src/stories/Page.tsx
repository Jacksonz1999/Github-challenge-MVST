import React from "react";
import { Navbar } from "./Navbar";
import "./page.css";

export const Page: React.VFC = () => {
  return (
    <article>
      <section>
        <div className="title">
          <h2>Github</h2>
        </div>
        <Navbar activeTab="Repositories" onTabChange={() => {}} />
        <hr />

        <div className="searchbar">
          <input
            type="text"
            value="Github Repositories"
            style={{ width: "100%", height: "40px" }}
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
        <ul>
          <div className="description_text">
          <p>30-Days-Of-React</p>
          <p>Auth0-</p>
          <p>back-node-part</p>
          <p>blog-with-api</p>
          <p>...</p>
          </div>
        </ul>
      </section>
    </article>
  );
};
