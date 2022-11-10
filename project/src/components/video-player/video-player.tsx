import { useEffect, useRef, useState } from 'react';

type videoPlayerProps = {
  videoSrc: string;
  autoPlay: boolean;
}

function VideoPlayer({videoSrc, autoPlay}: videoPlayerProps): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
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
    <div><p>m</p></div>
  );
}

export default VideoPlayer;
