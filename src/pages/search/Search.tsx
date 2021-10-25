import React, { useState, useEffect, useContext, useRef, Fragment } from 'react';
import {
    Search, Space, Button, Tag
} from 'antd-mobile';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router';
import { SearchRef } from 'antd-mobile/es/components/search';
import { AppContext } from '../../store';
import List from '../list';
import styles from './Search.less';

const MSearch: React.FC = () => {
    const [value, setValue] = useState('');
    const { shopStore } = useContext(AppContext);
    const [showSearchResult, setShowSearchResult] = useState(false);
    const history = useHistory();
    const searchRef = useRef<SearchRef>(null);
    const { searchList, initStore, showNullResult, hotSearchList } = shopStore;

    useEffect(() => {
        searchRef.current?.focus();
    }, []);

    useEffect(() => {
        if (!value) {
            initStore();
            setShowSearchResult(false);
        }
    }, [value])

    return (
        <Space direction="vertical" block style={{ '--gap': '12px' }}>
            <div className={styles.searchArea}>
                {/* <div className={styles.search}> */}
                    <Search
                        ref={searchRef}
                        placeholder="请输入内容"
                        value={value}
                        style={{
                            flex: 1,
                            '--border-radius': '100px',
                            '--adm-color-primary': '#ED5349'
                        }}
                        clearable
                        onChange={(val) => {
                            setValue(val);
                        }}
                        onClear={() => {
                            setValue('');
                        }}
                        onSearch={() => {
                            setShowSearchResult(true);
                            shopStore.search(value);
                        }}
                    />
                {/* </div> */}
                <div className={styles.button}>
                    <Button
                        style={{
                            fontSize: 15
                        }}
                        size="mini"
                        fill='none'
                        onClick={() => {
                            initStore();
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
                    <Space wrap style={{padding: '0 12px'}}>
                        {hotSearchList.map((item: any) => (
                            <div
                                key={item.id}
                                onClick={() => {
                                    setValue(item.value);
                                    setShowSearchResult(true);
                                    shopStore.search(item.value);
                                }}
                            >
                                <Tag
                                    color="#ED5349"
                                    style={{fontSize: 15, padding: 3}}
                                    fill="outline"
                                > 
                                    {item.value}
                                </Tag>
                            </div>
                        ))}
                    </Space>
                </Fragment>
            ) : (
                <Fragment>
                    {  searchList.length > 0 && 
                        <List list={searchList} />
                    }
                    {   showNullResult &&  
                        <div
                            className={styles['null-result']}
                        >客服为你解答:<span>{value}</span></div>
                    }
                </Fragment>
            )}
        </Space>
    );
};

export default observer(MSearch);
