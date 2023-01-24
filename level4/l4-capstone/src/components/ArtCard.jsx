import React from "react";

export default function ArtCard({
  imgUrl,
  title,
  author,
  containerProps = {},
  imageProps = {},
}) {
  return (
    <div {...containerProps}>
      <img src={imgUrl} {...imageProps} />
      {title && <h2>{title}</h2> }
      {author && <h3>{author}</h3>}
    </div>
  );
}
