import "bootstrap/dist/css/bootstrap.css";

import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="App">
      <div className="container-sm app">
        <Weather defaultCity="Bologna" />
      </div>
      <Footer />
    </div>
  );
}
export default App;
