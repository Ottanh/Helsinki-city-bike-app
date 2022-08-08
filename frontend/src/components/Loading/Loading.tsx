import { Triangle } from 'react-loader-spinner';
import './Loading.css';



const Loading = () => {
  return (
    <section className="Main-content" >
      <div className="Loading">
        <Triangle
          height="80"
          width="80"
          color="black"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          visible={true}
        />
      </div>
    </section>
  );
}

export default Loading;