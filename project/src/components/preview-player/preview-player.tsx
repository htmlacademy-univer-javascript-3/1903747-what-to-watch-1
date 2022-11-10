type videoPlayerProps = {
  videoSrc: string;
}
import { useEffect, useRef, useState } from 'react';

function PreviewPlayer({ videoSrc }: videoPlayerProps): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    videoRef.current.addEventListener('loadeddata', () => setIsLoading(false));

    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
  }, [isPlaying]);

  return (
    <video
      ref={videoRef}
      src={videoSrc}
      className="player__video"
      poster="img/player-poster.jpg"
      muted
    >
    </video>
  );
}

export default PreviewPlayer;
