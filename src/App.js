import './App.css';
import {BrowserRouter , Routes, Route} from 'react-router-dom'; 
import Navbar from './component/Navbar.jsx';
import Home from './link/Home.jsx';
import About from './link/About.jsx';
import Contact from './link/Contact.jsx';
import Login from './link/Login.jsx';
import Template from './link/Template.jsx';
import Help from './page/Help.jsx';
import Press from './page/Press.jsx';
import Sales from './page/Sales.jsx';
import Support from './page/Support.jsx';
import Signup from './page/Signup.jsx';
import Privacy from './page/Privacy.jsx';
import Terms from './page/Terms.jsx';
import Alltemplate from './Templates/Alltemplate.jsx';
import Simple from './Templates/Simple.jsx';
import Professional from './Templates/Professional.jsx';
import Modern from './Templates/Modern.jsx';
import Simple1 from './Simple/Simple1.jsx';
import Simple2 from './Simple/Simple2.jsx';
import Simple3 from './Simple/Simple3.jsx';
import Simple4 from './Simple/Simple4.jsx';
import Modern1 from './Modern/Modern1.jsx';
import Modern2 from './Modern/Modern2.jsx';
import Modern3 from './Modern/Modern3.jsx';
import Modern4 from './Modern/Modern4.jsx';
import Professional1 from './Professsional/Professional1.jsx'
import Professional2 from './Professsional/Professional2.jsx';
import Professional3 from './Professsional/Professional3.jsx';
import Professional4 from './Professsional/Professional4.jsx';

import Query from './page/Query.jsx';

function App() {
  return (
<>
<BrowserRouter>
<Navbar></Navbar>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/template' element={<Template/>}/>
<Route path='/help' element={<Help/>}/>
<Route path='/press' element={<Press/>}/>
<Route path='/sales' element={<Sales/>}/>
<Route path='/support' element={<Support/>}/>
<Route path='/signup' element={<Signup/>}/>
<Route path='/privacy' element={<Privacy/>}/>
<Route path='/Terms' element={<Terms/>}/>
<Route path='/Query' element={<Query/>}/>
<Route path='/Alltemplate' element={<Alltemplate/>}/>
<Route path='/Simple' element={<Simple/>}/>
<Route path='/Professional' element={<Professional/>}/>
<Route path='/Modern' element={<Modern/>}/>
<Route path ='/Modern1' element ={<Modern1/>}></Route>
<Route path ='/Modern2' element ={<Modern2/>}></Route>
<Route path ='/Modern3' element ={<Modern3/>}></Route>
<Route path ='/Modern4' element ={<Modern4/>}></Route>
<Route path ='/Simple1' element ={<Simple1/>}></Route>
<Route path ='/Simple2' element ={<Simple2/>}></Route>
<Route path ='/Simple3' element ={<Simple3/>}></Route>
<Route path ='/Simple4' element ={<Simple4/>}></Route>
<Route path='/Professional1' element={<Professional1 />} />
<Route path='/Professional2' element={<Professional2 />} />
<Route path='/Professional3' element={<Professional3 />} />
<Route path='/Professional4' element={<Professional4 />} />

</Routes>
</BrowserRouter>

</>
  );
}

export default App;
