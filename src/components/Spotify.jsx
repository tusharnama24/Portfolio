import React from "react";

function Spotify() {
  return (
    <div className=" rounded-2xl  max-sm:m-8 overflow-hidden bg-blue-950 flex flex-col justify-center items-center  md:h-full md:w-full">
      <iframe
        title="Spotify Embed: Recommendation Playlist "
        src={'https://open.spotify.com/embed/playlist/2jlyIwoHdu2H2bZoIl0xGc?si=J03Ts909QmimyUakm84BjQ&pi=K-F-BxiuQjamK&nd=1&dlsi=b5f36435ea6749a7'}
        width="100%"
        height="100%"
        style={{ minHeight: "480px", fontSize: "2rem" }}
        allow=" clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
}

export default Spotify;
