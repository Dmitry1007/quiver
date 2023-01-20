import { useSelector } from "react-redux";

function SurfboardValue() {
  const totalCost = useSelector(({ surfboards: { data, searchTerm } }) => {
    const filteredSurfboards = data.filter((surfboard) =>
      surfboard.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filteredSurfboards.reduce(
      (acc, surfboard) => acc + surfboard.cost,
      0
    );
  });

  return <div className="surfboard-value">Total Cost: - ${totalCost}</div>;
}

export default SurfboardValue;
