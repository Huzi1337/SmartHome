import { Slider } from "@mantine/core";
import "./MusicPlayer.scss";
import { useRef, useState } from "react";
import displayMinute from "../../../utils/second2min";

type Song = {
  duration: number;
  title: string;
  author: string;
  photo: string;
};

const placeholderSongs: Song[] = [
  {
    duration: 252,
    author: "The Notorious B.I.G.",
    title: "Juicy",
    photo: "/photos/biggy.jpg",
  },
  {
    duration: 183,
    author: "50 cent",
    title: "In Da Club",
    photo: "/photos/50cent.png",
  },
  {
    duration: 249,
    author: "50 cent",
    title: "P.I.M.P",
    photo: "/photos/50cent.png",
  },
];

type Props = {
  songs?: Song[];
};

const MusicPlayer = ({ songs = placeholderSongs }: Props) => {
  const [musicTime, setMusicTime] = useState(100);
  const [currentSongId, setCurrentSongId] = useState(0);

  const [musicPlaying, setMusicPlaying] = useState(false);

  const intervalRef = useRef<number | undefined>(undefined);
  const togglePlay = () => {
    if (!musicPlaying) {
      intervalRef.current = window.setInterval(() => {
        setMusicTime((prevTime) => {
          if (prevTime === songs[currentSongId].duration) {
            nextSongHandler();
            return prevTime;
          } else return prevTime + 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    setMusicPlaying((prev) => !prev);
  };

  const setMusicTimeHandler = (value: number) => {
    setMusicPlaying(false);
    clearInterval(intervalRef.current);
    setMusicTime(value);
  };

  const nextSongHandler = () => {
    setMusicTime(0);
    setCurrentSongId((prev) => (prev < songs.length - 1 ? prev + 1 : 0));
  };

  const prevSongHandler = () => {
    setMusicTime(0);
    setCurrentSongId((prev) => (prev > 0 ? prev - 1 : songs.length - 1));
  };

  return (
    <div className="musicPlayer">
      <div className="track">
        <div className="info">
          <h4>{songs[currentSongId].title}</h4>
          <h6>{`By ${songs[currentSongId].author}`}</h6>
        </div>
        <img src={songs[currentSongId].photo}></img>
      </div>
      <div className="musicPlayer__progressBar">
        <h6 className="musicPlayer__timer">{displayMinute(musicTime)}</h6>
        <h6 className="musicPlayer__songLength">
          {displayMinute(songs[currentSongId].duration)}
        </h6>
        <Slider
          min={0}
          value={musicTime}
          onChange={(value) => setMusicTimeHandler(value)}
          max={songs[currentSongId].duration}
          label={null}
        ></Slider>
      </div>
      <div className="controls">
        <button onClick={prevSongHandler} className="back"></button>
        <button
          className={musicPlaying ? "pause" : "play"}
          onClick={togglePlay}
        ></button>
        <button onClick={nextSongHandler} className="forward"></button>
      </div>
    </div>
  );
};

export default MusicPlayer;
