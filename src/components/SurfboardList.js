import { useSelector } from "react-redux";

function SurfboardList() {
  const surfboards = useSelector((state) => {
    return state.surfboards.data;
  });

  const renderedSurfboards = surfboards.map((surfboard) => {
    return (
      <div key={surfboard.id}>
        <h4>{surfboard.name}</h4>
        <p>{surfboard.cost}</p>
      </div>
    );
  });

  return <div>{renderedSurfboards}</div>;
}

export default SurfboardList;
