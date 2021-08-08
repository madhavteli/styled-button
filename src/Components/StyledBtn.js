const StyledBtn = (props) => {
	return(
		<button className='styled-btn' style={props.style}>{props.children}</button>
	);
};

export default StyledBtn;