import React, { useContext, useEffect } from 'react';
import { Search, Space, Button } from 'antd-mobile';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router';
import { AppContext } from '../../store';
import Banner from '../banner';
import List from '../list';
import styles from './Main.less';

const Main: React.FC = () => {
    const { shopStore } = useContext(AppContext);
    const history = useHistory();
    const { list } = shopStore;

    useEffect(() => {
        console.log('main page init');
    }, []);

    return (
        <Space direction="vertical" block style={{ '--gap': '12px' }}>
            <div
                className={styles.search}
                onClick={() => {
                    history.push('/search');
                }}
            >
                <Search
                    placeholder="请输入内容"
                    value=""
                    onFocus={() => {
                        history.push('/search');
                    }}
                />
                <div className={styles.button}>
                    <Button
                        style={{ '--border-radius': '8px' }}
                        size="mini"
                        color="primary"
                    >
                        搜索
                    </Button>
                </div>
            </div>
            <Banner />
            <List list={list} />
        </Space>
    );
};

export default observer(Main);
