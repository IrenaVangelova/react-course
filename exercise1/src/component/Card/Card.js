const Card = ({ cssClasses, children }) => {
	const classes = "card " + cssClasses;
	return <div className={classes}>{children}</div>;
};

export default Card;
