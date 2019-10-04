import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavBar/Index';
import TabMenu from './components/TabMenu/Index';
function App() {
  return (

	<React.Fragment className="container-fluid">
	
       <NavigationBar></NavigationBar>
	   
	   <div className="container mainContent">
		<div className="card">
		  <div className="card-body">
			<TabMenu className="marged-4-rem"></TabMenu>
		  </div>
		</div>
	   </div>
       
    </React.Fragment>
	
  );
}

export default App;
