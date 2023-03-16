import React from "react";

const Polipost = (props) => {
  const { title, description, _id } = props;

  return (
    <div className="polipost">
      <h1>{title}</h1>
      <h3>{description}</h3>
      
    </div>
  );
};

export default Polipost;
