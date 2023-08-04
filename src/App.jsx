import "./App.css";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.css";
import "../src/assets/css/style.bundle.css";
import "../src/assets/plugins/custom/fullcalendar/fullcalendar.bundle.css";
import "../src/assets/plugins/custom/datatables/datatables.bundle.css";
import "../src/assets/plugins/global/plugins.bundle.css";
import { GeneralProvider } from "./Context/GeneralContext";
function App() {
  return (
    <div className="App">
      <GeneralProvider>
        <Home></Home>
      </GeneralProvider>
    </div>
  );
}

export default App;
