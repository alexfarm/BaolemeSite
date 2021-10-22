import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import Main from '../main';
import Search from '../search';
import styles from './Layout.less';
import Detail from '../detail';

const LayoutComponent: React.FC = () => (
    <div className={styles.layout}>
        <Switch>
            <Route
                exact
                path="/search"
                component={Search}
            ></Route>
            <Route
                exact
                path="/detail/:id"
                component={Detail}
            ></Route>
            <Route
                exact
                path="/"
                component={Main}
            ></Route>
        </Switch>
    </div>
);

export default LayoutComponent;
