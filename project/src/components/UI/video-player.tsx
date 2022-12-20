import { MutableRefObject, useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setPlayerToggler, setTimeLeft } from '../../store/main-data/main-data';
import { getIsPlaying } from '../../store/main-data/main-data-selectors';

type VideoPlayerProps = {
  videoLink: string;
  backgroundImage: string;
}

function VideoPlayer({ videoLink, backgroundImage }: VideoPlayerProps): JSX.Element {
  const dispatch = useAppDispatch();
  const playerRef = useRef() as MutableRefObject<HTMLVideoElement>;
  const isPlaying = useAppSelector(getIsPlaying);

  useEffect(() => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.play();
      } else {
        playerRef.current.pause();
      }
    }

  }, [isPlaying]);

  const currentTimeHandler = () => {
    const durationTime = playerRef.current.duration;
    const currentTime = playerRef.current.currentTime;
    if (durationTime && currentTime) {
      const timeLeft = durationTime - currentTime;
      dispatch(setTimeLeft(`${Math.floor(timeLeft / 60)}:${(`0${Math.floor(timeLeft % 60)}`).slice(-2)}`));
      dispatch(setPlayerToggler(Math.round(currentTime / durationTime * 100)));
    }
  };

  return (
    <video
      ref={playerRef}
      src={videoLink}
      autoPlay
      muted
      className="player__video"
      poster={backgroundImage}
      onTimeUpdate={currentTimeHandler}
    >
    </video>
  );
}

export default VideoPlayer;
