import React, { useState, useEffect, useContext, useRef, Fragment } from 'react';
import {
    Search, Space, Button, Tag
} from 'antd-mobile';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router';
import { SearchRef } from 'antd-mobile/es/components/search';
import { LeftOutline } from 'antd-mobile-icons';
import { AppContext } from '../../store';
import List from '../list';
import styles from './Search.less';

const MSearch: React.FC = () => {
    const [value, setValue] = useState('');
    const { shopStore } = useContext(AppContext);
    const [showSearchResult, setShowSearchResult] = useState(false);
    const history = useHistory();
    const searchRef = useRef<SearchRef>(null);
    const { searchList } = shopStore;

    useEffect(() => {
        searchRef.current?.focus();
    }, []);

    return (
        <Space direction="vertical" block style={{ '--gap': '12px' }}>
            <div className={styles.searchArea}>
                <div className={styles.search}>
                    <Search
                        ref={searchRef}
                        placeholder="请输入内容"
                        value={value}
                        style={{
                            '--border-radius': '100px',                        }}
                        clearable
                        onChange={(val) => {
                            setValue(val);
                        }}
                        onClear={() => {
                            setValue('');
                        }}
                        onSearch={() => {
                            setShowSearchResult(true)
                            shopStore.search(value);
                        }}
                    />
                </div>
                <div className={styles.button}>
                    <Button
                        style={{
                            fontSize: '14px'
                        }}
                        size="mini"
                        fill='none'
                        onClick={() => {
                            history.push('/');
                        }}
                    >
                        取消
                    </Button>
                </div>
            </div>

        { !showSearchResult ? (
                <Fragment>
                    <div className={styles.hotSearch}>
                        热门搜索
                    </div>

                    <Space>
                        <Tag color="primary" fill="outline">
                            咖啡
                        </Tag>

                        <Tag color="primary" fill="outline">
                            周末去哪聚餐
                        </Tag>
                    </Space>
                </Fragment>
            ) : (
                <Fragment>
                    {  searchList.length > 0 && 
                        <List list={searchList} />

                    }
                </Fragment>
            )}
        </Space>
    );
};

export default observer(MSearch);
