import React from 'react';
import ReactDom from 'react-dom';
import {
    HashRouter as Router
} from 'react-router-dom';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';
import Layout from './pages/layout';
import { stores } from './store';
import './index.less';

configure({
    enforceActions: 'observed'
});

const App: React.FC = () => (
    <Router>
        <Provider {...stores}>
            <Layout />
        </Provider>
    </Router>
);

const renderApp = () => {
    ReactDom.render(
        <App />,
        document.getElementById('app')
    );
};

if ((module as any).hot) {
    // 启动热替换代码
    (module as any).hot.accept();
    renderApp();
} else {
    renderApp();
}
