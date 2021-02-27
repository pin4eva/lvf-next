import FooterComp from "components/FooterComp";
import HeaderComp from "components/HeaderComp";
import React from "react";
import styled from "styled-components";

const HomePage: React.FC = () => {
  return (
    <div id="home">
      <div className="banner">
        <div className="overlay">
          <HeaderComp />
          <div className="container">
            <div className="overlay-inner">
              <div className="wrapper">
                <h1 className="banner-display text-center">
                  WELCOME TO <br /> LOVE VISION FOUNDATION
                </h1>
                <div className="text-center">
                  <button className="btn btn-grad">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main>
        <div className="container">
          <div className="intro">
            <div className="text-center my-4">
              <div className="section-title">
                <div className="line"></div>
                <p> What We Do</p>
                <div className="line"></div>
              </div>
              <p>
                Love Vision foundation was birth from James 1 : 27. The vision
                of the foundation is to bring the world to God’s love through
                practical love (Ephesians 3 :19)
              </p>
            </div>
            <div className="videoplayer">
              <img src="/images/videoplayer.png" alt="videoplayer" />
            </div>

            <div className="my-3">
              <div className="grid-3 container ">
                <div className="grid-item bg-primary p-3   text-center text-light">
                  <p className="font-weight-bold">Love Homes</p>
                  <p>
                    Here, we focus on the social, physical and material needs of
                    families and orphans. The long term objectives of Love Homes
                    is to open homes for the parentless, open healthcare
                    facilities and other amenities for the afflicted and needy,
                    starting with Port Harcourt, Nigeria.
                  </p>
                  <button className="btn btn-grad">Learn More</button>
                </div>
                <div className="grid-item text-center bg-primary p-3  text-light">
                  <p className="font-weight-bold">Love Revival</p>
                  <p>
                    This arm focuses on spiritual awakening of the love of God
                    in the lives of youths in our community (keeping oneself
                    unspotted from the world). It is a night or evening of
                    worship and a brief wprd of love. We partner with youth
                    minisrty churches, e.t.c
                  </p>
                  <button className="btn btn-grad">Learn More</button>
                </div>
                <div className="grid-item text-center bg-primary p-3  text-light">
                  <p className="font-weight-bold">Love Reform</p>
                  <p>
                    Here, we focus on transforming the minds and empowering the
                    youths, families through knowledge and skill. To equip them,
                    we help with skill acquisitions, job interview techniques,CV
                    writing, apprenticeship, scholarship, business development,
                    e.t.c
                  </p>
                  <button className="btn btn-grad">Learn More</button>
                </div>
              </div>

              <div className="mt-3">
                <img src="/images/video2.png" alt="" />
              </div>
            </div>
          </div>

          <div className="testimonial">
            <div className="section-title">
              <div className="line"></div>
              <p>Testimonials</p>
              <div className="line"></div>
            </div>

            <div className="testimonial-slider">
              <div className="inner">
                <div className="wrapper">
                  <i className="fas fa-caret-left text-primary fa-3x"></i>
                  <div className="wrapper-main">
                    <div className="text-center">
                      <img src="/images/pic3.png" alt="" />
                      <p className="my-3">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur{" "}
                        <br />
                        aut odit aut fugit, sed quia consequuntur magni dolores{" "}
                        <br />
                        eos qui ratione voluptatem sequi nesciunt. Neque porro{" "}
                        <br />
                        quisquam est.Lorem ipsum dolor sit amet,
                      </p>

                      <button className="btn btn-grad">Read More</button>
                    </div>
                  </div>
                  <i className="fas fa-caret-right text-primary fa-3x"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="gallery">
            <div className="section-title">
              <div className="line"></div>
              <p>Picture Gallery</p>
              <div className="line"></div>
            </div>

            <div className="gallery-slider">
              <div className="inner">
                <div className="wrapper">
                  <i className="fas fa-caret-left text-primary fa-3x"></i>
                  <div className="wrapper-main">
                    <img src="/images/pic4.png" alt="" width="300" />
                    <img src="/images/pic5.png" alt="" />
                    <img src="/images/pic6.png" alt="" width="300" />
                  </div>
                  <i className="fas fa-caret-right text-primary fa-3x"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="team">
            <div className="section-title">
              <div className="line"></div>
              <p>Meet the team</p>
              <div className="line"></div>
            </div>

            <p className="mt-4 mb-2 text-center">The Board</p>

            <div className="grid-3 board-members">
              {teamImages.map((team, i) => (
                <BoardMember team={team} key={i} />
              ))}
            </div>

            <div className="podcast">
              <div className="container bg-primary p-4">
                <div className="podcast-wrapper">
                  <div className="item d-flex align-items-center">
                    <img src="/images/microphone.svg" alt="" />
                    <div className="left">
                      <p className="mb-1">
                        Listen to our <br /> live Podcast
                      </p>
                      <button className="btn btn-sm btn-grad">
                        Click Here
                      </button>
                    </div>
                  </div>
                  <div className="line"></div>
                  <div className="item d-flex align-items-center">
                    <img src="/images/monitor.svg" alt="" />
                    <div className="left ml-3">
                      <p className="mb-1">
                        Watch us on <br /> Youtube
                      </p>
                      <button className="btn btn-sm btn-grad">
                        Click Here
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <FooterComp />
    </div>
  );
};

export default HomePage;

const BoardMember = ({ team }: { team: ITeam }): JSX.Element => {
  return (
    <Wrapper>
      <div className="grid-item">
        <img src={team.image} alt={team.name} />
        <p className="mt-2 font-weight-bold">{team.name}</p>

        <div className="biocard">
          <div className="inner bg-primary">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              iure magnam dolorem vel cumque nulla officia quaerat enim
              explicabo odio? Quia, odio facilis. Quis esse laudantium
              aspernatur dolores nobis dolorem!
            </p>
            <div className="outter"></div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

interface ITeam {
  name: string;
  image: string;
  bio: string;
}

const teamImages: ITeam[] = [
  { name: "Jane Doe", image: "/images/pic7.png", bio: "A little bio about me" },
  {
    name: "Uncle Lopez",
    image: "/images/pic8.png",
    bio: "A little bio about them",
  },
  {
    name: "Janny Doe",
    image: "/images/pic9.png",
    bio: "A little bio about them",
  },
  {
    name: "Lady Lopez",
    image: "/images/pic10.png",
    bio: "A little bio about them",
  },
  { name: "MD", image: "/images/pic11.png", bio: "A little bio about them" },
  {
    name: "John Doe",
    image: "/images/pic12.png",
    bio: "A little bio about them",
  },
  {
    name: "Half Image",
    image: "/images/pic13.png",
    bio: "A little bio about them",
  },
  {
    name: "Empty 1",
    image: "/images/placeholder-circle.png",
    bio: "A little bio about them",
  },
  {
    name: "Empty 2",
    image: "/images/placeholder-circle.png",
    bio: "A little bio about them",
  },
];
