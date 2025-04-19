import data from "./data.json";
import { useState } from "react";

export default function App() {
  const [extension, setExtension] = useState(data);

  return (
    <main className="card">
      <div className="header">
        <img
          className="logo"
          src={process.env.PUBLIC_URL + "./assets/images/logo.svg"}
          alt="logo"
        />
        <img
          className="theme"
          src={process.env.PUBLIC_URL + "./assets/images/icon-sun.svg"}
          alt="theme"
        />
      </div>
      <div className="list">
        <h1>Extensions List</h1>
        <div className="list-buttons">
          <div className="list-button active">All</div>
          <div className="list-button">Active</div>
          <div className="list-button">Inactive</div>
        </div>
      </div>
      <div className="extensions">
        <div className="extension-card">
          <div className="extension-header">
            <img
              src={process.env.PUBLIC_URL + "./assets/images/logo-devlens.svg"}
              alt="DevLens"
            />
            <div className="extension-info">
              <h3>DevLens</h3>
              <p>
                Quickly inspect page layouts and visualize element boundaries.
              </p>
            </div>
          </div>

          <div className="extension-footer">
            <button className="remove-button">Remove</button>
            <label className="extension-toggle">
              <input type="checkbox" checked readOnly />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        <div className="extension-card">
          <div className="extension-header">
            <img
              src={process.env.PUBLIC_URL + "./assets/images/logo-devlens.svg"}
              alt="DevLens"
            />
            <div className="extension-info">
              <h3>DevLens</h3>
              <p>
                Quickly inspect page layouts and visualize element boundaries.
              </p>
            </div>
          </div>

          <div className="extension-footer">
            <button className="remove-button">Remove</button>
            <label className="extension-toggle">
              <input type="checkbox" checked readOnly />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </div>
    </main>
  );
}

// DevLens
// Quickly inspect page layouts and visualize element boundaries.
// Remove

// StyleSpy
// Instantly analyze and copy CSS from any webpage element.
// Remove

// SpeedBoost
// Optimizes browser resource usage to accelerate page loading.
// Remove

// JSONWizard
// Formats, validates, and prettifies JSON responses in-browser.
// Remove

// TabMaster Pro
// Organizes browser tabs into groups and sessions.
// Remove

// ViewportBuddy
// Simulates various screen resolutions directly within the browser.
// Remove

// Markup Notes
// Enables annotation and notes directly onto webpages for collaborative debugging.
// Remove

// GridGuides
// Overlay customizable grids and alignment guides on any webpage.
// Remove

// Palette Picker
// Instantly extracts color palettes from any webpage.
// Remove

// LinkChecker
// Scans and highlights broken links on any page.
// Remove

// DOM Snapshot
// Capture and export DOM structures quickly.
// Remove

// ConsolePlus
// Enhanced developer console with advanced filtering and logging.
// Remove
