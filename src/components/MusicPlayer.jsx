import React, { useState, useRef, useEffect } from 'react';
import '../styles/MusicPlayer.scss';
import {
  FaRegHeart,
  FaHeart,
  FaForward,
  FaStepForward,
  FaStepBackward,
  FaBackward,
  FaPlay,
  FaPause,
  FaShareAlt,
} from 'react-icons/fa';
import { BsDownload } from 'react-icons/bs';
import { Songs } from '../data/Songs';

function MusicPlayer({ song }) {
  const [currentSong, setCurrentSong] = useState(song);
  const [isLove, setLove] = useState(false);
  const [isPlaying, setPlay] = useState(false);
  const [valueInput, setValueInput] = useState(0);

  const audioPlayer = useRef();
  const progressBar = useRef();

  const changePlayPause = () => {
    const prevValue = isPlaying;
    setPlay(!prevValue);

    if (!prevValue) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  };

  const changeSongLove = () => {
    setLove(!isLove);
  };

  const nextSong = () => {
    const indexSong = Songs.indexOf(currentSong);
    setCurrentSong(Songs[indexSong + 1]);
    setPlay(false);
  };

  const prevSong = () => {
    const indexSong = Songs.indexOf(currentSong);
    const lastIndexSong = Songs.length - 1;

    setCurrentSong(
      indexSong !== 0 ? Songs[indexSong - 1] : Songs[lastIndexSong],
    );
    setPlay(false);
  };

  const handleChangeInput = () => {
    setValueInput(progressBar.current.value);
    progressBar.current.style.setProperty(
      '--played-width',
      valueInput,
    );
  };

  useEffect(() => {
    handleChangeInput();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueInput]);

  useEffect(() => {
    setPlay(false);
    setCurrentSong(song);
  }, [song]);

  return (
    <div className="musicPlayer">
      <div className="songImage">
        <img src={currentSong.imgSrc} alt={currentSong.songName} />
      </div>
      <div className="songAttributes">
        <audio
          src={currentSong.song}
          preload="metadata"
          ref={audioPlayer}
        />

        <div className="top">
          <div className="left">
            <div className="loved" onClick={changeSongLove}>
              {isLove ? (
                <i>
                  <FaRegHeart />
                </i>
              ) : (
                <i>
                  <FaHeart />
                </i>
              )}
            </div>
            <i className="download">
              <BsDownload />
            </i>
          </div>

          <div className="middle">
            <div className="back">
              <i onClick={prevSong}>
                <FaStepBackward />
              </i>
              <i>
                <FaBackward />
              </i>
            </div>
            <div className="playPause" onClick={changePlayPause}>
              {isPlaying ? (
                <i>
                  <FaPause />
                </i>
              ) : (
                <i>
                  <FaPlay />
                </i>
              )}
            </div>
            <div className="forward">
              <i>
                <FaForward />
              </i>
              <i onClick={nextSong}>
                <FaStepForward />
              </i>
            </div>
          </div>

          <div className="right">
            <i>
              <FaShareAlt />
            </i>
          </div>
        </div>

        <div className="bottom">
          <div className="currentTime">00:00</div>
          <input
            type="range"
            className="progressBar"
            ref={progressBar}
            defaultValue="0"
            onChange={handleChangeInput}
          />
          <div className="duration">00:00</div>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
