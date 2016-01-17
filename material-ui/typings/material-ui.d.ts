/// <reference path="react/react.d.ts" />

declare module MaterialUi {
  class RaisedButton extends __React.Component<any, any> {}
  class Card extends __React.Component<any, any> {}
  class CardActions extends __React.Component<any, any> {}
  class CardHeader extends __React.Component<any, any> {}
  class FlatButton extends __React.Component<any, any> {}
  class CardText extends __React.Component<any, any> {}
  
  const injectTapEventPlugin:() => void; 
}

declare module "material-ui/lib/raised-button" {
  export default MaterialUi.RaisedButton
}

declare module "material-ui/lib/card/card" {
  export default MaterialUi.Card
}

declare module "material-ui/lib/card/card-actions" {
  export default MaterialUi.CardActions
}

declare module "material-ui/lib/card/card-header" {
  export default MaterialUi.CardHeader
}

declare module "material-ui/lib/flat-button" {
  export default MaterialUi.FlatButton
}

declare module "material-ui/lib/card/card-text" {
  export default MaterialUi.CardText
}

declare module "react-tap-event-plugin" {
  export default MaterialUi.injectTapEventPlugin
}