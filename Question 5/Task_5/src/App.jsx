import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [search, setSearch] = useState("");
  const [counter, setCounter] = useState(0);
  const suggestions = ["UI design", "UI design practice", "UI pattern", "Daily UI"];

  return (
    <>
    <div className="container text-center mt-2">
      <h1>Sample Page UI</h1>
    </div>
    <div className="container py-5">
      <div className="row g-4">
        <div className="col-md-6">
          <label className="form-label">Normal</label>
          <input
            type="text"
            placeholder="Placeholder text"
            className="form-control"
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Focus</label>
          <input
            type="text"
            placeholder="Placeholder text"
            className="form-control focus-visible"
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Password</label>
          <input
            type="password"
            placeholder="********"
            className="form-control"
          />
        </div>

        <div className="col-md-6 position-relative">
          <label className="form-label">Autocomplete</label>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="form-control"
          />
          {search && (
            <ul className="list-group position-absolute w-100" style={{ zIndex: 1 }}>
              {suggestions
                .filter((item) =>
                  item.toLowerCase().includes(search.toLowerCase())
                )
                .map((item, index) => (
                  <li
                    key={index}
                    className="list-group-item"
                    onClick={() => setSearch(item)}
                  >
                    {item}
                  </li>
                ))}
            </ul>
          )}
        </div>

        <div className="col-md-6">
          <label className="form-label">Active</label>
          <input
            type="text"
            value="UI"
            className="form-control"
            readOnly
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Error</label>
          <input
            type="text"
            placeholder="Placeholder text"
            className="form-control is-invalid"
          />
          <div className="invalid-feedback">
            Please provide a valid email address
          </div>
        </div>

        <div className="col-md-6">
          <label className="form-label">Date</label>
          <input
            type="date"
            className="form-control"
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Value</label>
          <div className="input-group">
            <button
              className="btn btn-outline-secondary"
              onClick={() => setCounter((prev) => Math.max(prev - 1, 0))}
            >
              -
            </button>
            <input
              type="number"
              value={counter}
              className="form-control text-center"
              readOnly
            />
            <button
              className="btn btn-outline-secondary"
              onClick={() => setCounter((prev) => prev + 1)}
            >
              +
            </button>
          </div>
        </div>

        <div className="col-md-12">
          <label className="form-label">Normal</label>
          <input
            type="text"
            placeholder="Placeholder text"
            className="form-control"
          />
          <small className="text-muted">
            Write any text that might help the user to fill the input.
          </small>
        </div>
      </div>
    </div>
    </>
    
  );
}

export default App;
