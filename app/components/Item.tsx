import * as React from 'react'; 

export interface ItemProps {
  name: string;
}

export default class Item extends React.Component<ItemProps, any> {
	constructor(props: ItemProps) {
    super(props);
  }
	render() {
		return <div>
			Item name: {this.props.name}
		</div>;
	}
}