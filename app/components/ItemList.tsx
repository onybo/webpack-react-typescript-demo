import * as React from 'react'; 
import {default as Item, ItemProps as ItemProps} from './Item';

export interface IItem{
  id: number;
  name: string;
}

export interface ItemListProps {
  items: IItem[];
}

export default class ItemList extends React.Component<ItemListProps, any> {
	constructor(props: ItemListProps) {
    super(props);
  } 
	render() {		
		var items = this.props.items.map(function(item) {
      		return (
        		<Item key={item.id} name={item.name} />
      		);
    	});
	
		return (<div>{items}</div>);
	}
}