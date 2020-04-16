import React from "react";
import { Link, useParams } from "react-router-dom";

export default function DisplayColor() {
  const { name,value } = useParams();
  console.log(name,'>>>')
  return (
    <div className="colorDisplay" style={{ background: `#${value}` }}>
      <h1>This is color {name} with hex color code #{value}</h1>
      <p>Isn't it beautiful?</p>
      <Link to={"/"}>
        <p style={{color:'white'}}>Go back</p>
      </Link>
    </div>
  );
}
