import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import App from './components/App';
import './index.css';

// INFO: create-react-appすると作成されるキャッシュ用のコード
// import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


//registerServiceWorker();
