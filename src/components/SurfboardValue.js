function SurfboardValue({ surfboards }) {
  const computedValue = () => {
    let value = 0;
    surfboards.map((surfboard) => {
      value += surfboard.cost;
    });
    return value;
  };

  return <div className="surfboard-value">Total Cost - ${computedValue()}</div>;
}

export default SurfboardValue;
