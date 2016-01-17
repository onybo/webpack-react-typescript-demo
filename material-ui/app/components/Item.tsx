import * as React from 'react'; 

import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';

export interface ItemProps {
  key: number;
  name: string;
  description: string;
}

const Item = (props:ItemProps) => (
  <Card initiallyExpanded={true}>
        <CardHeader
          title={props.name}
          actAsExpander={true}
          showExpandableButton={true} />
        <CardText expandable={true}>
          {props.description}
        </CardText> 
    <CardText expandable={true}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    </Card>
);

export default Item;

