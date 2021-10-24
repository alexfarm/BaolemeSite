import React, { useRef, useEffect } from 'react';
import { Search, Space, Button,Image } from 'antd-mobile';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router';
import { DownFill } from 'antd-mobile-icons';
import { SearchRef } from 'antd-mobile/es/components/search';
import Banner from '../banner';
import iconPng from './images/icon.png';
import moneyPng from './images/money.png';
import styles from './Main.less';


const Main: React.FC = () => {
    const history = useHistory();
    const searchRef = useRef<SearchRef>(null)

    useEffect(() => {
        console.log('main page init');
    }, []);

    return (
        <Space direction="vertical" block style={{ '--gap': '12px' }}>
            <div
                className={styles.header}
            >
                <div style={{fontSize: 16, marginRight: 12}}>上海 <DownFill fontSize={12}/></div>
                <div
                    className={styles.search}
                    onClick={() => {
                        history.push('/search');
                    }}
                >
                    <Search
                        ref={searchRef}
                        placeholder="请输入您感兴趣的内容"
                        value=""
                        onFocus={() => {
                            history.push('/search');
                        }}
                        style={{
                            '--border-radius': '100px'
                        }}
                    />
                </div>
            </div>
            <Image src={iconPng} />
            <Banner />
            <Image src={moneyPng} />
        </Space>
    );
};

export default observer(Main);
