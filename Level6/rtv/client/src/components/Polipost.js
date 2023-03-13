import React from "react";

const Polipost = (props) => {
  const { title, description, imgUrl, _id } = props;

  return (
    <div className="polipost">
      <h1>{title}</h1>
      <h3>{description}</h3>
      <img src={imgUrl} alt={imgUrl} width={300} />
    </div>
  );
};

export default Polipost;
