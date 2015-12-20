import * as React from 'react'; 
import {default as Item, ItemProps as ItemProps} from './Item';

export interface ItemListProps {
  items: ItemProps[];
}

export default class ConferenceList extends React.Component<ItemListProps, any> {
	constructor(props: ItemListProps) {
    super(props);
  } 
	render() {		
		var items = this.props.items.map(function(item) {
      		return (
        		<Item name={item.name} />
      		);
    	});
		
		return (<div>{items}</div>);
	}
}