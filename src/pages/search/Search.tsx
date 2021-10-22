import React, { useState, useEffect, useRef } from 'react';
import {
    Search, Space, Button, Tag
} from 'antd-mobile';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router';
import { SearchRef } from 'antd-mobile/es/components/search';
import { LeftOutline } from 'antd-mobile-icons';
import styles from './Search.less';

const MSearch: React.FC = () => {
    const [value, setValue] = useState('');
    const history = useHistory();
    const searchRef = useRef<SearchRef>(null);

    useEffect(() => {
        searchRef.current?.focus();
    }, []);

    return (
        <Space direction="vertical" block style={{ '--gap': '12px' }}>
            <div className={styles.searchArea}>
                <LeftOutline onClick={() => {
                    history.push('/');
                }}
                />
                <div className={styles.search}>
                    <Search
                        ref={searchRef}
                        placeholder="请输入内容"
                        value={value}
                        onChange={(val) => {
                            setValue(val);
                        }}
                    />
                </div>
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

            <div className={styles.hotSearch}>
                热门搜索
            </div>

            <Space>
                <Tag color="primary" fill="outline">
                    火锅
                </Tag>
                <Tag color="primary" fill="outline">
                    咖啡
                </Tag>
            </Space>
        </Space>
    );
};

export default observer(MSearch);
