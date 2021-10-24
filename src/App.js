
import React, { Component }  from 'react';
import './App.css';
import Header from './components/Header';
import Item from './components/Item'

import Accesssories from './assets/Desktop-Accessories.jpg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import SolarPanels from './assets/Desktop-SolarRoof.jpeg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'



function App() {
  return (
    <div className="App">
      <Header/>
      <div className="app__itemsContainer">
        <Item
          title='Lowest cost solar Panels in Norway'
          desc='Money-back guarantee'
          descLink=''
          backgroundImg={SolarPanels}
          leftBtnLink='ORDER NOW'
          rightBtnTxt='Leanr more'
          rightBtnLink=''
          twoButtons='true'
          first
        />
        <Item
          title='Model S'
          desc='$ 100000'
          descLink=''
          backgroundImg={ModelS}
          leftBtnLink='COSTUM ORDER'
          rightBtnTxt='Leanr more'
          rightBtnLink=''
          twoButtons='true'
  
        />
        <Item
          title='Model 3'
          desc='Money-back guarantee'
          descLink=''
          backgroundImg={Model3}
          leftBtnLink='COSTUM ORDER'
          rightBtnTxt='Leanr more'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item
          title='Modle X'
          desc='Money-back guarantee'
          descLink=''
          backgroundImg={ModelX}
          leftBtnLink='COSTUM ORDER'
          rightBtnTxt='Leanr more'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item
          title='Model Y'
          desc='Money-back guarantee'
          descLink=''
          backgroundImg={ModelY}
          leftBtnLink='COSTUM ORDER'
          rightBtnTxt='Leanr more'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item
          title='Solar for you new roof'
          desc='Money-back guarantee'
          descLink=''
          backgroundImg={SolarRoof}
          leftBtnLink='COSTUM ORDER'
          rightBtnTxt='Leanr more'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item
          title='Accessories'
          desc='Money-back guarantee'
          descLink=''
          backgroundImg={Accesssories}
          leftBtnLink='COSTUM ORDER'
          rightBtnTxt='Leanr more'
          rightBtnLink=''
          twoButtons='true'
        
        />
        

      </div>

    </div>
  );
}

export default App;
