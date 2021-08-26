import logo from "./logo.svg";
import "./App.css";
import Jobs from "./components/Job/Job";
import Bio from "./components/Bio/Bio";
import Header from "./components/Header/Header";
import Data from "./data.json";
import Banque from "./components/Banque/Banque";
function App() {
  const obj = {
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
  const obj2 = {
    id: 2,
    company: "Manage",
    logo: "./images/manage.svg",
    new: true,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"],
  };
  return (
    <div className="App">
      {/* <Header />
      {Data.map((value) => (
        <Jobs key={value.id} job={value} />
      ))}
      <Banque /> */}
      <Bio />
    </div>
  );
}

export default App;
