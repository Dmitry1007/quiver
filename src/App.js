import SurfboardForm from "./components/SurfboardForm";
import SurfboardSearch from "./components/SurfboardSearch";
import SurfboardList from "./components/SurfboardList";
import SurfboardValue from "./components/SurfboardValue";

function App() {
  return (
    <div className="container is-fluid">
      <SurfboardForm />
      <SurfboardSearch />
      <SurfboardList />
      <SurfboardValue />
    </div>
  );
}

export default App;
