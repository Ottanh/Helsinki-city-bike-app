import './ErrorView.css';

interface Props {
  error: string;
}

const ErrorView = ({ error }: Props) => {

  return (
    <article className="Main-content" >
        <div className="Error-view">
          <h2 id="error">{error}</h2>
        </div>
      </article>
  );
}

export default ErrorView;