import * as React from 'react'; 
import {default as Item, ItemProps as ItemProps} from './Item';

export interface IItem extends ItemProps {
  id: number;
}

export interface ItemListProps {
  items: IItem[];
}

const ItemList = (props:ItemListProps) => 
  (<div>{props.items.map((item) => (<Item {...item} />))} </div>);

export default ItemList;