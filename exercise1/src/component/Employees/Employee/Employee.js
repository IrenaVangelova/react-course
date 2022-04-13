function Employee(props) {
	const baseCss = "base_css " + props.cssClasses;

	const year = props.employeeData.years_experience > 1 ? " years" : " year";

	// const yearElement = () => {
	// 	const text = props.employeeData.years_experience > 1 ? " years" : " year";
	// 	return <span>{text}</span>
	// }

	const yearSyntax = <span>{year}</span>;
	
	return (
		<>
			<div className={baseCss}>
				<div className="information__personal">
					<h4>{props.employeeData.label}</h4>
					<p>{props.employeeData.name}</p>
					<h4>Experience</h4>
					<p>
						{props.employeeData.years_experience}
						{/* {props.employeeData.years_experience > 1 ? " years": " year"} */}
						{/* {year} */}
						{/* {yearElement()} */}
						{yearSyntax}
					</p>
				</div>

				<div className="information__department">
					<h4>Department:</h4>
					<p>{props.employeeData.department}</p>
				</div>
			</div>
			{props.children}
		</>
	);
}

export default Employee;
