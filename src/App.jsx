
import './App.css';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.css';
import '../src/assets/css/style.bundle.css'
import '../src/assets/plugins/custom/fullcalendar/fullcalendar.bundle.css'
import '../src/assets/plugins/custom/datatables/datatables.bundle.css'
import '../src/assets/plugins/global/plugins.bundle.css'
function App() {
  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;
