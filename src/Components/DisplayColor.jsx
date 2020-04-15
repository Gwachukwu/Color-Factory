import React from "react";
import { Link, useParams } from "react-router-dom";

export default function DisplayColor() {
  const { name,value } = useParams();
  console.log(name,'>>>')
  return (
    <div className="colorDisplay" style={{ background: `#${value}` }}>
      <h1>This is color {name} </h1>
      <Link to={"/"}>
        <h1>Go Back</h1>
      </Link>
    </div>
  );
}
