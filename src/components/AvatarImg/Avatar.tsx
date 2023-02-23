import React, { useState, useEffect } from "react";
import "./Avatar.css";
import { apiGithub } from "../../api/apiGithub";
import ImageGithub from "../../assets/github_icon/GitHub_Logo.png";
const Avatar = () => {
  const [data, setData] = useState({} as any);

  useEffect(() => {
    const getData = async () => {
      const result = await apiGithub();
      setData(result);
    };

    getData();
  }, []);
/*   console.log(apiGithub());

  console.log(data); */

  return (
    <>
      <div className="allFirstPart">
        <div className="firstPart_title">
          <img src={ImageGithub} style={{width: "150px"}} alt="Github"></img>
        </div>

        <div>
          <img className="image_github" src={data.avatar_url} alt="{prop.name}"></img>
        </div>

        <div>
          <div className="firstPart_name">
          <h1>{data.name}</h1>
          </div>
          <div className="firstPart_login">
          <h3>{data.login}</h3>
          </div>
          <div className="firstPart_description">
            <p>{data.bio}</p>
          </div>
          <div className="firstPart_location">
            <p>{data.location}</p>
            </div>
            <div className ="firstPart_follow">
          <div className="firstPart_followers">
            <p>{data.followers} followers</p>
          </div>
          <div className="firstPart_following">
            <p>{data.following} following</p>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Avatar;
