import { BrowserRouter, Routes, Route} from "react-router-dom";

import HomePage from "./components/HomePage";
import MyInfoPage from "./components/MyInfoPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import { UserProvider } from "./context/UserContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Store from "./components/Store";


function App() {
  return (
    // yang ada protected route nya berarti harus login dlu baru bisa masuk
    // user provider buat user sessionnya
    <UserProvider> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProtectedRoute><MyInfoPage /></ProtectedRoute>} />
          <Route path ="/home" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
          <Route path="/store" element={<ProtectedRoute><Store /></ProtectedRoute>} />


          {/* <Route path="/home" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />

          <Route path="/add-employee" element={<ProtectedRoute><AddEmployeePage /></ProtectedRoute>} />

          <Route path="/profile" element={<ProtectedRoute><MyInfoPage /></ProtectedRoute>} />

          <Route path="/login" element={<LoginPage />} />

          <Route path="/register" element={<RegisterPage />} />

          <Route path="/employee/:id" element={<ProtectedRoute><EmployeeDetailsPage /></ProtectedRoute>} /> */}

          {/* Input rute lain di sini */}
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
