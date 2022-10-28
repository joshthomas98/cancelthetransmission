import React from "react";

const SpotifyPlayer = () => {
  return (
    <div className="flex-container-spotify">
      <div className="spotify-player p-5">
        <h3 className="p-3 text-light text-center">
          Listen to our latest single Rise Again on Spotify!
        </h3>

        <iframe
          title="spotifyFrame"
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

export default SpotifyPlayer;
