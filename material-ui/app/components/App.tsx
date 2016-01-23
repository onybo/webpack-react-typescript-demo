import * as React from 'react'; 
import * as ReactDOM from 'react-dom';

import data from '../data/items';
import ItemList from './ItemList';
 
const App = () => (
  <div style={{margin: '72px'}}>
    <ItemList items={data.map(item => Object.assign(item, {key: item.id}))} />
  </div>
  );

export default App;