import Create from "./components/Create";
import Update from "./components/Update";
import Read from "./components/Read";
import './styles.css';
import{
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
export default function App(){
  return(
    <div class="main">
    <h1>Curd operation</h1>
<BrowserRouter>
<Routes>
<Route exact path="/create" element={<Create /> } />
<Route exact path="/update" element={<Update /> } />
<Route exact path="/read" element={<Read /> } />

</Routes>
</BrowserRouter>
</div>

  
  )
}
