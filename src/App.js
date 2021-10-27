import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Routing from "./components/Routing/Routing";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./Context/AuthProvider";
toast.configure();

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routing />
      </AuthProvider>
    </div>
  );
}

export default App;
