import React from 'react';
import Button from '../containers/Button';
import ItemList from '../containers/ItemList'
import Loading from '../containers/Loading'


let App = () => (
  <div>
    <Button />
    <Loading />
    <ItemList />
  </div>
);


export default App;
