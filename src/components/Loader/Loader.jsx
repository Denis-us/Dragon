import { RevolvingDot } from 'react-loader-spinner'
import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.loader}>
      <RevolvingDot
        height="100"
        width="100"
        radius="5"
        color="#ebe379"
        secondaryColor=''
        ariaLabel="revolving-dot-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;