import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./AppLayout";
import { SIDEBAR_CONFIG } from "./config/SideBar.config";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          {SIDEBAR_CONFIG.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          <Route path="/" element={<Navigate to={`/dashboard`} />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
