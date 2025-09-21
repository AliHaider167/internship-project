import {
  Header,
  ExisitingEmployee,
  ResultedEmployee,
  getEmployees,
} from "./index";
import { useEffect, useState } from "react";

function Main() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const employee = await getEmployees();
        setEmployees(employee);
      } catch (err) {
        console.error(err);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <>
      <Header />
      <ExisitingEmployee employees={employees} /> 
      <ResultedEmployee />
    </>
  );
}

export default Main;
