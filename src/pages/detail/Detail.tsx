import React, { useContext, useEffect } from 'react';
import {
    Image, Card, Rate, Space, Tabs
} from 'antd-mobile';
import { observer } from 'mobx-react';
import { LeftOutline, EnvironmentOutline } from 'antd-mobile-icons';
import { useHistory } from 'react-router';
import styles from './Detail.less';

const MList: React.FC = () => {
    const history = useHistory();

    useEffect(() => {
        console.log('search');
    }, []);

    return (
        <Space direction="vertical" block style={{ '--gap': '12px' }}>
            <div className={styles.header}>
                <LeftOutline onClick={() => {
                    history.push('/');
                }}
                />
                <div className={styles.title}>
                    门店详情
                </div>

            </div>
            <Card
                title="星巴克(唐镇来安路店)"
                bodyClassName={styles.cardBody}
            >
                <div className={styles.main}>
                    <Image
                        style={{ borderRadius: 8 }}
                        src="https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60"
                        width={66}
                        height={66}
                        fit="fill"
                    />
                    <div className={styles.content}>
                        <div className={styles.rate}>
                            <Rate readonly value={4} style={{ '--star-size': '12px' }} />
                        </div>
                        <div className={styles.categray}>
                            咖啡饮料
                        </div>
                    </div>
                </div>
                <div className={styles.footer}>
                    <Space>
                        <EnvironmentOutline />
                        <div>
                            上海市普东新区来安路666号
                        </div>
                    </Space>
                </div>
            </Card>

            <Card
                bodyClassName={styles.cardBody}
            >
                <Tabs>
                    <Tabs.TabPane title="优惠" key="price">
                        优惠
                    </Tabs.TabPane>
                    <Tabs.TabPane title="评论" key="comment">
                        评论
                    </Tabs.TabPane>
                </Tabs>
            </Card>
        </Space>
    );
};

export default observer(MList);
