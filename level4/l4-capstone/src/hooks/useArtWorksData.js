import React from "react";
import axios from "axios";

// API documentation: https://api.artic.edu/docs
// example of image URL: https://www.artic.edu/iiif/2/{identifier}/full/843,/0/default.jpg
// https://www.artic.edu/iiif/2/ is base-url to get image can be found at data.config.iiif_url
// where "identifier" = data.image_id
// /full/843,/0/default.jpg is required for actual jpg image

const useArtWorksData = (limit = 12, page = 1) => {
  const [art, setArt] = React.useState([]);
  const [loading, setloading] = React.useState(false);
  const [artworkUrl, setArtworkUrl] = React.useState("");

  const imgSpec = "full/843,/0/default.jpg"; //this needs to be appended to all the image urls to get visible image

  React.useEffect(() => {
    setloading(true);

    axios
      .get(`https://api.artic.edu/api/v1/artworks?limit=${limit}&page=${page}`)
      .then((res) => {
        setArt(res.data.data);
        setArtworkUrl(res.data.config.iiif_url);
        setloading(false);
      });
  }, [limit, page]);

  return { art, artworkUrl, imgSpec, loading, page };
};

export default useArtWorksData;
