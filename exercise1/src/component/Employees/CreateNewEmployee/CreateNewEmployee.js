import { useState } from "react";
import "./CreateNewEmployee.css";

const CreateNewEmployee = (props) => {
	const [employeeData, setEmployeeData] = useState({
		name: "",
		department: "",
		years_experience: 0
	});

	/**
	 * this writes the inputs to the state
	 * @param {*} event
	 */
	const handleInputFormChange = (event) => {
		const {
			target: { value, name },
		} = event;
		setEmployeeData((prevState) => ({ ...prevState, [name]: value }));
	};

	const onSubmit = (event) => {
		event.preventDefault();
		console.log('CreateNewEmployee.js:onSubmit func, params sent: ', employeeData)
		props.setNewEmployee(employeeData);
	};

	return (
		<div className="new_employee_container">
			<div className="input_form card">
				<h3>New employee</h3>
				<form onSubmit={onSubmit}>
					<div className="form-control">
						<label htmlFor="name">Full name</label>
						<input
							name="name"
							type="text"
							placeholder="Enter the name"
							value={employeeData.name}
							onChange={(event) => handleInputFormChange(event)}
						/>
					</div>
					<div className="form-control">
						<label htmlFor="department">Department</label>
						<input
							name="department"
							type="text"
							placeholder="Enter the department"
							value={employeeData.department}
							onChange={(event) => handleInputFormChange(event)}
						/>
					</div>
					<div className="form-control">
						<label htmlFor="experience">Years experience</label>
						<select
							name="years_experience"
							type="text"
							value={employeeData.years_experience}
							onChange={handleInputFormChange}
						>
							<option value={0} disabled>Select year</option>
							<option value={1}>1 year</option>
							<option value={2}>2 years</option>
							<option value={3}>3 years</option>
							<option value={4}>4 years</option>
							<option value={5}>5 years</option>
							<option value={6}>6 years</option>
							<option value={7}>7 years</option>
							<option value={8}>8+ years</option>
						</select>
					</div>
					<div className="actions-container">
						<button className="button button-primary" type="submit">
							Save
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CreateNewEmployee;
