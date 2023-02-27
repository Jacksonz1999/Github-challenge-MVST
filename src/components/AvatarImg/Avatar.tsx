import React, { useState, useEffect } from "react";
import "./Avatar.css";
import { apiGithub } from "../../api/apiGithub";
import ImageGithub from "../../assets/github_icon/GitHub_Logo.png";
// make a request to the GitHub API and update its internal state with the data received.
const Avatar = () => {
  const [data, setData] = useState({} as any);

  useEffect(() => {
    const getData = async () => {
      const result = await apiGithub();
      setData(result);
    };

    getData();
  }, []);
// return the JSX that will be rendered to the page.
  return (
    <>
      <div className="allFirstPart">
        <div className="firstPart_title">
          <img src={ImageGithub} style={{width: "150px"}} alt="Github"></img>
        </div>

        <div>
          <img className="image_github" src={data.avatar_url} alt=""></img>
        </div>

        <div>
          <div className="firstPart_name">
          <h1>{data.name}</h1>
          </div>
          <div className="firstPart_login">
          <h4>@{data.login}</h4>
          </div>
          <div className="firstPart_description">
            <p>{data.bio}</p>
          </div>
          <div className="firstPart_location">
            <p>{data.location}</p>
            </div>
            <div className ="firstPart_follow">
          <div className="firstPart_followers">
            <p><strong>{data.followers}</strong> followers</p>
          </div>
          <div className="firstPart_following">
            <p><strong>{data.following} </strong> following</p>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Avatar;
