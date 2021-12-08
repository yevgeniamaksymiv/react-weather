const api = {
  key: "cec0b6382bb0b4c15fefe54bb1557bfa",
  base: "https://api.openweathermap.org/data/2.5/"
};

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
          />
        </div>
      </main>
    </div>
  );
}

export default App;
