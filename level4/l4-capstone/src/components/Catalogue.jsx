import React from "react";
import { useNavigate } from "react-router-dom";
import useArtWorksData from "../hooks/useArtWorksData";
import ArtCard from "./ArtCard";

export default function Catalogue() {
  const [page, setPage] = React.useState(1);
  const { art, artworkUrl, imgSpec } = useArtWorksData(12, page);
  const navigate = useNavigate();

  return (
    <div>
      <h1>Catalogue Page</h1>

      {art.map((item) => (
        <ArtCard
          key={item.image_id}
          imgUrl={`${artworkUrl}/${item.image_id}/${imgSpec}`}
          title={item.title}
          author={item.artist_title}
        />
      ))}

      <button onClick={() => navigate("/")}>Home</button>

      <button onClick={() => setPage((p) => p + 1)}>Next Page</button>
    </div>
  );
}
