import React from "react";
import BandSlider from "./BandSlider";
import SpotifySection from "./SpotifySection";

const Homepage = () => {
  return (
    <div className="carousel-area">
      <BandSlider />

      <div className="container m-5">
        <section class="content">
          <div className="mt-3 text-light text-center">
            <h1>RISE AGAIN OUT NOW!</h1>

            <p className="mt-3 ml-3 mr-4 lead">
              <i>
                "When I wrote 'Rise Again', I was working in retail and had not
                long come back from being on furlough. I really did dislike my
                job and knowing that I could be on stage performing to people
                instead of folding clothes made me resent it even more. All
                we’ve ever wanted to do as a band is write music and be creative
                as it’s the only thing we’re really good at. ‘Rise Again’ was
                almost written to myself as outsider or an older version of
                myself, telling me not to give up, to pursue my dream, to stay
                positive and to not let anyone tell me otherwise. It’s about
                hope and persistence. I think it’s relatable to any musician
                finding their feet in the industry and it applies to anyone who
                has a goal in mind and wants to push for it, even though others
                will tell them they can’t. There are times you may feel like
                giving up but you’ve just got to rise to the occasion and go for
                it."
              </i>
            </p>

            <h3 className="mt-4 mb-4">
              AVAILABLE NOW ON ALL MAJOR STREAMING SERVICES!
            </h3>

            <img
              className="w-50"
              src="../../images/streaming_services.png"
              alt=""
            />
          </div>

          <div className="image mt-5">
            <img src="../../images/rise_again_artwork.png" alt="" />
          </div>
        </section>

        <section className="mt-3">
          <SpotifySection />
        </section>
      </div>
    </div>
  );
};

export default Homepage;
