import * as React from "react";

export default function LoadingOverlay(loading) {
  if ((loading = false)) return null;
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "grid",
        placeItems: "center",
        background: "#00000055",
        position: "absolute",
        top: "0",
        left: "0",
        color: "white",
      }}
    >
      <p>Loading...</p>
    </div>
  );
}
