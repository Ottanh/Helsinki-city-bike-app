import './Error.css';

interface Props {
  error: string;
}

const Error = ({ error }: Props) => {

  return (
    <section className="Main-content" >
      <div className="Error-view">
        <h2 id="error">{error}</h2>
      </div>
    </section>
  );
}

export default Error;