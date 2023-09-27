
import fetch from 'node-fetch'
const ApiCalls = () => {
  const api = "http://dummy.restapiexample.com/api/v1/"
  
  
  const fetchEmployees = async () => {
    const employeesAPI = api.concat("employees");
    try {     
      const res = await fetch(employeesAPI);
      
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      
      const data = await res.json();
      
      return data;
      
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }
  
  const fetchEmployeesById = async id => {
    const employeeAPI =  api.concat("employee");
    try {
      const employeeID = employeeAPI.concat(`/${id}`);
      console.log(employeeID);
      const res = await fetch(employeeID);
      
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      
      const data = await res.json();
      
      return data;
      
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }
  
  const createEmployee = async (name, salary, age, image) => {
    const createAPI =  api.concat("create");
    console.log(createAPI)
    const employees = await fetchEmployees();
    let lastEmployeeID = await employees.data[employees.data.length-1].id;
    let newID = lastEmployeeID++;

    const newEmployee = {
      id: newID,
      employee_name: name,
      employee_salary: salary,
      employee_age: age,
      profile_image: ''
    }
    
    fetch(createAPI,{
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newEmployee)
      
    }).then( res => {
      
      return ( res.json())
    }).then(async data =>{
      console.log("data sent succesfully:", data);
    }).catch(error => console.error("Error:", error))
    
  }
  
  const SortBySalary = async salary =>{
    const employees = await fetchEmployees();
    const employeesArray = await [...employees.data];
    let selectedEmployees = 0;

    employeesArray.forEach(employee => {
      if(employee.employee_salary > salary){
        selectedEmployees++;
      }
    })
  
    console.log("Employees earning more than 300,000",selectedEmployees);
  }

  SortBySalary(300000);
  //receiving 404 error from server says create directory doesnt exist
  //createEmployee('Mario Galvez', '15000', 32, '');


}

ApiCalls();
