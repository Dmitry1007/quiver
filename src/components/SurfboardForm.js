import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addSurfboard } from "../store";

function SurfboardForm() {
  const dispatch = useDispatch();

  const { name, cost } = useSelector((state) => {
    return state.form;
  });

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };

  const handleCostChange = (event) => {
    const surfboardCost = parseInt(event.target.value) || 0;
    dispatch(changeCost(surfboardCost));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting", "name", name, "cost", cost);
    dispatch(addSurfboard({ name, cost }));
  };

  return (
    <div className="surfboard-form panel">
      <h4 className="subtitle is-3">Add Surfboard</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              value={cost || ""}
              onChange={handleCostChange}
              type="number"
            />
          </div>
          <div className="field">
            <button className="button is-link">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SurfboardForm;
