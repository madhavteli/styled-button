import React from 'react';
import StyledBtn from "./Components/StyledBtn";

function App() {
	return (
		<div>
			<div>
				<StyledBtn>Click Me!</StyledBtn>
			</div><br/>
			<div>
				<StyledBtn style={{ background: 'red' }}>Not Me!</StyledBtn>
			</div><br/>
			<div>
				<StyledBtn>Or Me!</StyledBtn>
			</div>
		</div>
	);
}

export default App;

