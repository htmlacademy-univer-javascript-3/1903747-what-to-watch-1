type videoPlayerProps = {
  videoSrc: string;
}

function PreviewPlayer({ videoSrc }: videoPlayerProps): JSX.Element {
  return (
    <video
      autoPlay
      src={videoSrc}
      className="player__video"
      poster="img/player-poster.jpg"
      muted
    >
    </video>
  );
}

export default PreviewPlayer;
