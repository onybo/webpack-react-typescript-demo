import * as React from 'react'; 
import * as ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin'; 

import App from './components/App';

injectTapEventPlugin(); 
ReactDOM.render(React.createElement(App), document.getElementById('content'));