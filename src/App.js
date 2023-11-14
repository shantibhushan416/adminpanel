import AppLayout from "./AppLayout";
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SIDEBAR_CONFIG } from "./config/SideBar.config";

function App() {
  return (
    <div style={{ background: "#f8f8f8"}}>
      <BrowserRouter>
        <AppLayout>
          <Routes>
            {SIDEBAR_CONFIG.map(({ path, Component }) => (
              <Route path={path} element={<Component />} />
            ))}
            <Route path="/" element={<Navigate to={`/dashboard`} />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
