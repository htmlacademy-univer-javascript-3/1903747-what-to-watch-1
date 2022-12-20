import { useAppSelector } from '../../hooks';
import { getPlayerToggler, getTimeLeft } from '../../store/main-data/main-data-selectors';

function PlayerControls(): JSX.Element {
  const timeLeft = useAppSelector(getTimeLeft);
  const videoProgress = useAppSelector(getPlayerToggler);

  return (
    <div className="player__controls-row">
      <div className="player__time">
        <progress className="player__progress" value={videoProgress} max="100"></progress>
        <div className="player__toggler" style={{ left: `${videoProgress}%` }}>Toggler</div>
      </div>
      <div className="player__time-value">{timeLeft}</div>
    </div>
  );
}

export default PlayerControls;
