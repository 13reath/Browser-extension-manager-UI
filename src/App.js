import data from "./data.json";
import { useState } from "react";
import SvgIcon from "./SvgIcon";

export default function App() {
  const [extensions, setExtensions] = useState(data);
  const [group, setGroup] = useState("all");

  function toggleActive(name) {
    const toggle = extensions.map((ext) =>
      ext.name === name ? { ...ext, isActive: !ext.isActive } : ext
    );
    setExtensions(toggle);
  }

  const groupedExtensions = function groupExtensions(exts) {
    if (group === "all") return exts;
    if (group === "active") return exts.filter((ext) => ext.isActive === true);
    if (group === "inactive")
      return exts.filter((ext) => ext.isActive === false);
  };

  function removeButton(name) {
    const updated = extensions.filter((ext) => ext.name !== name);
    setExtensions(updated);
  }

  return (
    <main className="card">
      <div className="header">
        <SvgIcon />
        <img
          className="theme"
          src={process.env.PUBLIC_URL + "./assets/images/icon-sun.svg"}
          alt="theme"
        />
      </div>
      <div className="list">
        <h1>Extensions List</h1>
        <div className="list-buttons">
          <div
            className={`list-button ${group === "all" ? "active" : ""}`}
            onClick={() => setGroup("all")}
          >
            All
          </div>
          <div
            className={`list-button ${group === "active" ? "active" : ""}`}
            onClick={() => setGroup("active")}
          >
            Active
          </div>
          <div
            className={`list-button ${group === "inactive" ? "active" : ""}`}
            onClick={() => setGroup("inactive")}
          >
            Inactive
          </div>
        </div>
      </div>
      <Extensions
        array={groupedExtensions(extensions)}
        toggleActive={toggleActive}
        removeButton={removeButton}
      />
    </main>
  );
}

function Extensions({ array, toggleActive, removeButton }) {
  return (
    <div className="extensions">
      {array.map((ext) => (
        <Extension
          key={ext.name}
          name={ext.name}
          description={ext.description}
          logo={ext.logo}
          isActive={ext.isActive}
          onToggle={toggleActive}
          onRemove={removeButton}
        />
      ))}
    </div>
  );
}

function Extension({ name, description, logo, isActive, onToggle, onRemove }) {
  return (
    <div className="extension-card">
      <div className="extension-header">
        <img src={process.env.PUBLIC_URL + logo} alt="DevLens" />
        <div className="extension-info">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>

      <div className="extension-footer">
        <button onClick={() => onRemove(name)} className="remove-button">
          Remove
        </button>
        <label className="extension-toggle">
          <input
            type="checkbox"
            checked={isActive}
            onChange={() => onToggle(name)}
          />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
}
