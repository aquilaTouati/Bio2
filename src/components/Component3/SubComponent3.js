import React from "react";
import { useParams } from "react-router-dom";

const SubComponent3 = () => {
  const { name } = useParams();

  return <div>The name is : {name} ;</div>;
};

export default SubComponent3;
