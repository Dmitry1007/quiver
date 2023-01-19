import SurfboardForm from "./components/SurfboardForm";
import SurfboardSearch from "./components/SurfboardSearch";
import SurfboardList from "./components/SurfboardList";

function App() {
  return (
    <div className="container is-fluid">
      <SurfboardForm />
      <SurfboardSearch />
      <SurfboardList />
    </div>
  );
}

export default App;
