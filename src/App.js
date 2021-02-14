import React, { useState } from 'react';
import Routes from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Routes />
    </div>
  );



//       <WineFiltersContext.Provider value={wineFilters}>
//         <BeverageCategoryContext.Provider value={beverageCategory}>
//           <MenuCategoryContext.Provider value={menuCategory}>
//             <MenuFiltersContext.Provider value={menuFilters}>
//               <Routes getWineFilters={getWineFilters} getBeverageCategory={getBeverageCategory} getMenuCategory={getMenuCategory} getMenuFilter={getMenuFilter} />
//             </MenuFiltersContext.Provider>
//           </MenuCategoryContext.Provider>
//         </BeverageCategoryContext.Provider>
//       </WineFiltersContext.Provider>
//     </div>

}

export default App;



// import './css/global.css';

// import { WineFiltersContext, BeverageCategoryContext, MenuCategoryContext, MenuFiltersContext } from './Components/Contexts';

// const App = () => {

//   const [ wineFilters, setWineFilters ] = useState({
//     tamanho: "",
//     origem: "",
//     tipo: "",
//   });

//   const [ beverageCategory, setBeverageCategory ] = useState("");

//   const [ menuCategory, setMenuCategory ] = useState("");

//   const [ menuFilters, setMenuFilters ] = useState({
//     isVegan: false,
//     isVegetarian: false,
//     isGlutenFree: false,
//     hasNotMilk: false,
//     hasNotEgg: false,
//   });

//   const getWineFilters = (filter) => {

//     let filterWord = "";
//     let otherFilters = {};

//     if (filter.tamanho) {
//       filterWord = "tamanho";
//       otherFilters = {
//         origem: "",
//         tipo: "",
//       };
//     } else if (filter.origem) {
//       filterWord = "origem";
//       otherFilters = {
//         tamanho: "",
//         tipo: "",
//       };
//     } else {
//       filterWord = "tipo";
//       otherFilters = {
//         origem: "",
//         tamanho: "",
//       };
//     }

//     setWineFilters({ ...otherFilters, [filterWord]: filter[filterWord] });
//   };

//   const getBeverageCategory = (category) => {
//     setBeverageCategory(category);
//   };

//   const getMenuCategory = (category) => {
//     setMenuCategory(category);
//   };

//   const getMenuFilter = ( filter ) => {
//     let otherFilters = {};
    
//     if (filter === "isVegan") {
//       otherFilters = {
//         isVegetarian: false,
//         isGlutenFree: false,
//         hasNotEgg: false,
//         hasNotMilk: false,
//       };
      
//     } else if (filter === "isVegetarian") {
//       otherFilters = {
//         isVegan: false,
//         isGlutenFree: false,
//         hasNotEgg: false,
//         hasNotMilk: false,
//       };
      
//     } else if (filter === "isGlutenFree") {
//       otherFilters = {
//         isVegan: false,
//         isVegetarian: false,
//         hasNotEgg: false,
//         hasNotMilk: false,
//       };
      
//     } else if (filter === "hasNotEgg") {
//       otherFilters = {
//         isVegan: false,
//         isVegetarian: false,
//         isGlutenFree: false,
//         hasNotMilk: false,
//       };
      
//     } else if (filter === "hasNotMilk") {
//       otherFilters = {
//         isVegan: false,
//         isVegetarian: false,
//         isGlutenFree: false,
//         hasNotEgg: false,
//       };
      
//     } else {
//       otherFilters = {
//         isVegan: false,
//         isVegetarian: false,
//         isGlutenFree: false,
//         hasNotEgg: false,
//         hasNotMilk: false,
//       };
//     }

//     setMenuFilters({ ...otherFilters, [filter]: true });
//   };