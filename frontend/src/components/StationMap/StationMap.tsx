import './StationMap.css';

interface Props {
  mapURL: string;
}

const StationMap = ({ mapURL }: Props) => {
  return (
    <div className="Map">
      <iframe
        width="100%"
        height="100%"
        frameBorder="0" 
        style={{border:0}}
        referrerPolicy="no-referrer-when-downgrade"
        src={mapURL}
        allowFullScreen>
      </iframe>
    </div>
  )
}

export default StationMap;