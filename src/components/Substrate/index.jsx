function Substrate({ substrate }) {
  return (
    <div className='substrate'>
      <div className={`icon ${substrate.name}`}>{substrate.icon}</div>
      <div className='data'>
        <h3>{substrate.value + substrate.unit}</h3>
        <p>{substrate.name}</p>
      </div>
    </div>
  );
}

export default Substrate;
