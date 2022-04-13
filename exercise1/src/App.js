import "./App.css";
import Navigation from "./component/Navigation";
import EmployeeList from "./component/Employees/EmployeeList/EmployeeList";
import CreateNewEmployee from "./component/Employees/CreateNewEmployee/CreateNewEmployee";
import employeeListData from "./data/data";
import { useState } from "react";

function generateRandomId() {
	return 'id_' + Math.floor(Math.random() * 1000000);
}
function enrichEmployeeList(list) {
	return list.map(elem => ({...elem, "_id": generateRandomId()}));
}

const App = () => {
	// const [employeeList, setEmployeeList] = useState(enrichEmployeeList(employeeListData));
	const [employeeList, setEmployeeList] = useState([]);
	const updateEmployeeList = (employee) => {
		console.log("App.js: updateEmployeeList, params received: ", employee);
		const newEmployee = {
			...employee,
			label: "Name",
			cssClasses: "name_wrapper",
			"_id": generateRandomId()
		};
		setEmployeeList((prevState) => [...prevState, newEmployee]);
	};



	
	return (
		<div className="app-container">
			<div className="navigation">
				<Navigation />
			</div>
			<div className="main_content">
				<CreateNewEmployee setNewEmployee={updateEmployeeList} />
				{/* true									true */}
				{/* {(employeeList.length == 0) && <p>No data is present.</p>}
				{(employeeList.length != 0) && <EmployeeList employeeList={employeeList} />} */}
				<EmployeeList employeeList={employeeList} />
			</div>
		</div>
	);
};

export default App;
