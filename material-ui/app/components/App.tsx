import * as React from 'react'; 
import * as ReactDOM from 'react-dom';

import data from '../data/items';
import ItemList from './ItemList';
 
const App = () => (<ItemList items={data.map(item => Object.assign(item, {key: item.id}))} />);

export default App;