function SurfboardForm() {
  return (
    <div className="surfboard-form panel">
      <h4 className="subtitle is-3">Add Surfboard</h4>
      <form>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              value={"name"}
              onChange={() => {}}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default SurfboardForm;
