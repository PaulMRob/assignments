import React from "react";
import { useNavigate } from "react-router-dom";
import ArtCard from "./ArtCard";
import useArtWorksData from "../hooks/useArtWorksData";
import LoadingOverlay from "./LoadingOverlay";

export default function Home() {
  const [page, setPage] = React.useState(1);
  const { art, artworkUrl, imgSpec, loading } = useArtWorksData(1, page);
  const navigate = useNavigate();

  return (
    <div>
      <div style={{ height: "900px" }}>
        {art[0] && (
          <ArtCard
            key={art[0].image_id}
            imgUrl={`${artworkUrl}/${art[0].image_id}/${imgSpec}`}
            title={art[0].title}
            author={art[0].artist_title}
            imageProps={{ style: { height: "600px" } }}
          />
        )}
        {loading && <LoadingOverlay loading={loading} />}
      </div>

      <button
        onClick={() => setPage((p) => (p - 1 > 1 ? p - 1 : 1))}
        disabled={page <= 1}
      >
        Previous Piece
      </button>
      <button onClick={() => setPage((p) => p + 1)}>Next Piece</button>
      <button onClick={() => navigate("/catalogue")}>Catalogue</button>
    </div>
  );
}
