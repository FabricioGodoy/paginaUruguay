import { EmpleadosLista } from './components/EmpleadosLista/EmpleadosLista';
import Barra1 from './components/Navbar/Navbar';
import { Slider } from './components/Slider/Slider';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { Newsletter } from './components/pages/Newsletter';
import { NuestraEmpresa } from './components/pages/NuestraEmpresa';
import { TrabajaConNosotros } from './components/pages/TrabajaConNosotros';
import { Contacto } from './components/pages/Contacto';
import { Footer } from './components/Footer/Footer';
import { Capacitaciones } from './components/pages/Capacitaciones';
import { Rma } from './components/pages/Rma';
import { SelectorRma } from './components/pages/SelectorRma';
import { RmaItemFallado } from './components/pages/RmaItemFallado';
import { ApiMap } from './components/ApiMarcas/ApiMap';
import { DetalleItems } from './components/DetalleItems/DetalleItems';
import { HomeFramerMotion } from './components/Body/homeFramerMotion';
import { EmpleadosListaPM } from './components/EmpleadosLista/EmpleadoListaPM'
import { EmpleadosListaVentas} from './components/EmpleadosLista/EmpleadoListaVendedores'
import { Home } from './components/Body/Home'

function App() {
  return (
 
    <BrowserRouter>
        <Barra1/>
        <Slider/> 
        
            <Routes>
              <Route path="/" element= {<Home/> }/>
              <Route path="/homeFramerMotion" element= {<HomeFramerMotion/> }/>


              <Route path="/empleadosGerentes" element= { <EmpleadosLista/> }/>
              <Route path="/empleadosGerentes/:catId" element= { <EmpleadosLista/> }/>


              <Route path="/EmpleadosPM" element= { <EmpleadosListaPM/> }/>
              <Route path="/EmpleadosPM/:catId" element= { <EmpleadosListaPM/> }/>

              <Route path="/EmpleadosVentas" element= { <EmpleadosListaVentas/> }/>
              <Route path="/EmpleadosVentas/:catId" element= { <EmpleadosListaVentas/> }/>

              <Route path='/newsletter' element= {<Newsletter/>}/>
              <Route path='/nuestraempresa' element= {<NuestraEmpresa/>}/>
              <Route path='trabajaconnosotros' element= { <TrabajaConNosotros/> } />
              <Route path='contacto' element= { <Contacto/> } />
              <Route path='capacitaciones' element= { <Capacitaciones/> } />
              <Route path='rma2' element= { <Rma/> } />
              <Route path='rma' element= { <SelectorRma/> } />
              <Route path='rma3' element= { <RmaItemFallado/> } />
              <Route path='*' element= { <Navigate to ="/" /> } />
              <Route path="/marcas/:id" element= { <ApiMap/> }/>
              <Route path="/detalle/:itemId" element= { <DetalleItems/> }/>
              
            </Routes>

        <Footer/>
        
    </BrowserRouter> 
  );
}

export default App;
