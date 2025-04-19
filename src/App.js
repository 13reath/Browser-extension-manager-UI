import data from "./data.json";
import { useState } from "react";

export default function App() {
  const [extension, setExtension] = useState(data);

  return (
    <main>
      <div className="header">
        <img src="" alt="logo" />
        <img src="" alt="theme" />
      </div>
      <div className="List">
        <h1>Extensions List</h1>
        <div className="list-button">All</div>
        <div className="list-button">Active</div>
        <div className="list-button">Inactive</div>
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
