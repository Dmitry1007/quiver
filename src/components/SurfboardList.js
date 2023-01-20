import { useDispatch, useSelector } from "react-redux";
import { deleteSurfboard } from "../store";

function SurfboardList() {
  const dispatch = useDispatch();

  const { surfboards, name } = useSelector(
    ({ surfboards: { data, searchTerm }, form }) => {
      const filteredList = data.filter((surfboard) =>
        surfboard.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return { surfboards: filteredList, name: form.name };
    }
  );

  const handleSurfboardDelete = (id) => {
    dispatch(deleteSurfboard(id));
  };

  const renderedSurfboards = surfboards.map((surfboard) => {
    const bold =
      name && surfboard.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div key={surfboard.id} className={`panel ${bold && "bold"}`}>
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
