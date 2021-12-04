import Navbar from './Navbar';
import { BrowserRouter as Router ,Route, Switch } from 'react-router-dom';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
//in older version it was imporatn to import react bt now above 17

function App() {
  return (
    <Router >
      <div className ="App">
    <Navbar/>
    <div className ="content">
     <Switch >
       <Route exact path  ="/">
          <Home />
       </Route>
       <Route path ="/create">
          <Create />
       </Route>
       <Route path ="/blogs/:id">
          <BlogDetails/>
       </Route>
     </Switch>
     
    </div>
    </div>
    </Router>
   
    
    
  );
}

export default App;
//jsx = html + logic
//babel converts jsx into html , to be rendered in th website
