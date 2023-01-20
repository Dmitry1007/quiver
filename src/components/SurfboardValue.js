import { useSelector } from "react-redux";

function SurfboardValue() {
  const totalCost = useSelector(({ surfboards: { data, searchTerm } }) => {
    const filteredSurfboards = data.filter((surfboard) =>
      surfboard.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    let cost = 0;
    for (let surfboard of filteredSurfboards) {
      cost += surfboard.cost;
    }
    return cost;
  });

  return <div className="surfboard-value">Total Cost: - ${totalCost}</div>;
}

export default SurfboardValue;
