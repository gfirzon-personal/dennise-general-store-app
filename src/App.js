//import logo from './logo.svg';
import { Routes, Route } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query";
import NavMenu from './components/NavMenu';
import Departments from './screens/departments/Departments'
import DepartmentDetails from './screens/departments/DepartmentDetails'
import Employees from './screens/employees/Employees'
import Products from './screens/products/Products'
import Home from './screens/home/Home'
import NewCounter from "./components/NewCounter";
import { DeptContextProvider } from './contexts/DeptContext'

const queryClient = new QueryClient();

function App() {
  return (
    <div className="container">
      <NavMenu />
      <QueryClientProvider client={queryClient}>
        <DeptContextProvider>
          <Routes>
            <Route >
              <Route path="/" element={<Home />} />
              <Route path="departments" element={<Departments />} />
              <Route path="departments/:id" element={<DepartmentDetails />} />
              <Route path="employees" element={<Employees />} />
              <Route path="products" element={<Products />} />
              <Route path="newcounter" element={<NewCounter />} />
            </Route>
          </Routes>
        </DeptContextProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
