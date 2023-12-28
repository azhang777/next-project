import styles from "./Banner.module.css"; //this is an object
import Image from "next/image";
const subtitleStyle = {
  fontStyle: "italic",
  fontSize: "x-large",
  color: "coral",
};

export const Banner = () => {
  return (
    <header className='row mb-4'>
      <div className='col-5'>
        <Image
          src='/GloboLogo.png'
          alt='logo'
          width={250}
          height={150}
        />
      </div>
      <div className='col-7 mt-5 fst-italic fs-3 fw-bold'>
        Providing houses all over the world
      </div>
    </header>
  );
};
