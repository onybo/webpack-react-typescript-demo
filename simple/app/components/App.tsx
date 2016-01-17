import * as React from 'react'; 
import * as ReactDOM from 'react-dom';

import {default as ItemList} from './ItemList';
 
var data = [
  {id: 1, name: "item 1"},
  {id: 2, name: "item 2"},
  {id: 3, name: "item 3"},
  {id: 4, name: "item 4"}  
];

export default class App extends React.Component<any, any> {
	constructor(props: any) {
    super(props);
  }
	render() {
		return (<ItemList items={data} />);
	}
}