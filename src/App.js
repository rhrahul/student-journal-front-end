import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Error from "./components/Error";

// Entries
import All from "./components/entry/All";
import Create from "./components/entry/Create";
import Edit from "./components/entry/Edit";
import Single from "./components/entry/Single";
import Header from "./components/Header";
import ThemeProvider from "./components/ThemeProvider.jsx";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <div className="container py-10">
          <Routes>
            <Route path="/" element={<Navigate to="/entry" />} />
            <Route path="/entry" element={<All />} />
            <Route path="/entry/:id" element={<Single />} />
            <Route path="/entry/create" element={<Create />} />
            <Route path="/entry/edit/:id" element={<Edit />} />
            <Route path="*" element={<Navigate to="/entry" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
