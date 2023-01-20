import { useSelector } from "react-redux";

function SurfboardValue() {
  const totalCost = useSelector(({ surfboards: { data, searchTerm } }) => {
    return data
      .filter((surfboard) =>
        surfboard.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc, surfboard) => acc + surfboard.cost, 0);
  });

  return <div className="surfboard-value">Total Cost: - ${totalCost}</div>;
}

export default SurfboardValue;
