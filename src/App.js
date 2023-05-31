import Auth from "./components/auth";
import Login from "./components/login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>firebase</h1>
        <Auth />
        <Login />
      </header>
    </div>
  );
}

export default App;
