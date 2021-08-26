import React from "react";
import "./Job.css";

const Job = (props) => {
  const job = {
    id: 1,
    company: "Photosnap",
    logo: "./images/photosnap.svg",
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: [],
  };
  // const developer = {
  //   id: 2,
  //   company: "Manage",
  //   logo: "./images/manage.svg",
  //   new: true,
  //   featured: true,
  //   position: "Fullstack Developer",
  //   role: "Fullstack",
  //   level: "Midweight",
  //   postedAt: "1d ago",
  //   contract: "Part Time",
  //   location: "Remote",
  //   languages: ["Python"],
  //   tools: ["React"],
  // };

  // const junior = {
  //   id: 3,
  //   company: "Account",
  //   logo: "./images/account.svg",
  //   new: true,
  //   featured: false,
  //   position: "Junior Frontend Developer",
  //   role: "Frontend",
  //   level: "Junior",
  //   postedAt: "2d ago",
  //   contract: "Part Time",
  //   location: "USA Only",
  //   languages: ["JavaScript"],
  //   tools: ["React", "Sass"],
  // };

  return (
    <div>
      <div className="shadow">
        <div className="profile">
          <img className="logo" src={props.job.logo} />
          <div className="flex">
            <h1 className="aligned position">{props.job.position} </h1>
          </div>
          <div className="elements">
            <span className="photosnap">{props.job.company}</span>
            {props.job.new && <span className="new">New!</span>}
            {props.job.featured && <span className="featured ">Featured</span>}
          </div>
        </div>
        <div className="features">
          <ul>
            <li className="inline">{props.job.postedAt}</li>
            <li className="inline time">{props.job.contract}</li>
            <li className="inline location">{props.job.location}</li>
          </ul>
        </div>
        <div className="languages">
          <ul>
            <li className="inline role">{props.job.role}</li>
            <li className="inline level">{props.job.level}</li>
            {props.job.languages.map((value, index) => (
              <li className="inline lges" key={index}>
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* <div>
        <h2>{developer.position}</h2>
        <span>{developer.company}</span>
        {job.new && <span>New</span>}
        {job.featured && <span>New</span>}
        <ul>
          <li>{developer.postedAt}</li>
          <li>{developer.contract}</li>
          <li>{developer.location}</li>
        </ul>
        <button>{developer.role}</button>
        <button>{developer.level}</button>
        <button>{developer.languages}</button>
        <button>{developer.tools}</button>
      </div>

      <div>
        <h1>{junior.position} </h1>
        <span>{juniorr.company}</span>

      </div> */}
    </div>
  );
};

export default Job;
