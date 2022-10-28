import React from "react";

const SpotifySection = () => {
  return (
    <div className="container mt-5">
      <div className="spotify-title text-light text-center">
        <h3 className="my-5">
          Listen to our latest single Rise Again on Spotify!
        </h3>
      </div>

      <div className="flex-container-iframe">
        <iframe
          title="spotifyplayer"
          src="https://open.spotify.com/embed/track/3Xi1DsXwyYP7LuQ4hg4Rxc?utm_source=generator&theme=0"
          width={600}
          height={300}
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </div>
    </div>
  );
};

export default SpotifySection;
