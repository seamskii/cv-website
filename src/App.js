import React from "react";
import EnglishPage from "./components/EnglishPage";
import HebrewPage from "./components/HebrewPage";
import{BrowserRouter as Router,Route,Switch} from "react-router-dom";




function App() {
	  return(
		<Router>
			<Switch>
			<Route path={"/"} exact component={EnglishPage}/>
			<Route path={"/eng"} component={EnglishPage}/>
			<Route path={"/heb"} component={HebrewPage}/>
			</Switch>
		</Router>
			
	  );
  }

export default App;
