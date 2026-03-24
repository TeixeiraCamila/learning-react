import { BrowserRouter, Routes, Route } from "react-router";
import AppPage from "./pages/HomePage";
import ComponentsPage from "./pages/ComponentsPage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#1E1E1E]">
        <main className="container mx-auto p-3">
          <Routes>
            <Route path="/" element={<AppPage />} />
            <Route path="/components" element={<ComponentsPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;