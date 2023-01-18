import { useDispatch, useSelector } from "react-redux";
import { deleteSurfboard } from "../store";

function SurfboardList() {
  const dispatch = useDispatch();

  const surfboards = useSelector(({ surfboards: { data, searchTerm } }) => {
    return data.filter((surfboard) =>
      surfboard.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleSurfboardDelete = (id) => {
    dispatch(deleteSurfboard(id));
  };

  const renderedSurfboards = surfboards.map((surfboard) => {
    return (
      <div key={surfboard.id} className="panel">
        <p>
          {surfboard.name} - ${surfboard.cost}
        </p>
        <button
          onClick={() => handleSurfboardDelete(surfboard.id)}
          className="button is-danger"
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="surfboard-list">
      {renderedSurfboards}
      <hr />
    </div>
  );
}

export default SurfboardList;
