import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ROUTES from './Components/constants/Routes';

// importar componentes da página
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Bullet from './Components/Bullet/Bullet';

// importar todos os componentes que serão roteados
import Home from './Components/Home/Home';
import Content from './Components/Content/Content';
import About from './Components/About/About';

const Routes = () => {
    return (
        <div>
            {/* <Router basename="/mercato-bixiga"> */}
            <Router>
                <Navbar />
                <Switch>
                    <Route path={ROUTES.HOME} exact component={Home} />
                </Switch>
                <Bullet name="ifood"/>
            </Router>
        </div>
    )
}

// const Routes = (props) => {

//   const [ propsData, setPropsData ] = useState({});

//   useEffect(() => {
//     setPropsData(props);
//   }, [props]);

//   return(
//     <div>
//       <Router basename="/mercato-bixiga">
//         <Navbar />
//         <Switch>
//           <Route path={ROUTES.HOME} exact component={Home} />
//           <Route path={ROUTES.CONTENT} exact component={Content} />
//           <Route path={ROUTES.ABOUT} exact component={About} />

//           {/* rota do cardapio passando função para pegar o filtro utilizado
//           <Route path={ROUTES.MENU} exact render={(props) => (
//             <Cardapio menuCategory={propsData.getMenuCategory} filterCategory={propsData.getMenuFilter} {...props} />
//           )} /> */}

//           {/* rota do cardapio passando funcao para pegar o filtro utilizado
//           <Route path={ROUTES.MENU_FILTER} exact render={(props) => (
//             <FiltroCardapio filterCategory={propsData.getMenuFilter} {...props} />
//           )} /> */}
          
//           {/* rota de vinhos passando função para pegar o filtro utilizado
//           <Route path={ROUTES.WINE} exact render={(props) => (
//             <Vinhos getWineFilters={propsData.getWineFilters} {...props} />
//           )} /> */}

//           {/* rota de bebidas passando função para pegar o filtro utilizado
//           <Route path={ROUTES.BEV} exact render={(props) => (
//             <Bebidas bevCategory={propsData.getBeverageCategory} {...props} />
//           )} /> */}

//         </Switch>
//         <Footer />
//       </Router>
//     </div>
//   )
// }

export default Routes;