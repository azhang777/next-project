export const Banner = () => {
  return (
    <header className='row mb-4'>
      <div className='col-5'>
        <img
          src='./GloboLogo.png'
          alt='logo'
        />
        <h1 className='text-warning'>Hello Bootstrap</h1>
      </div>
      <div className='col-7 mt-5'>Providing houses all over the world</div>
    </header>
  );
};
