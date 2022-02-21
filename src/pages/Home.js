import music from "../media/musicHome.mp3"
import "./Home.css";

export const Home = () => {
  return (
    <section className="Home">
      <audio className="music" controls preload="auto" autoPlay>
        <source src={music} type="audio/mpeg"></source>
      </audio>
    </section>
  );
};