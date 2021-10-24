import React, { useContext, useEffect, useState } from 'react';
import {
    Image, Card, Rate, Space, Tabs
} from 'antd-mobile';
import { observer } from 'mobx-react';
import { LeftOutline, EnvironmentOutline } from 'antd-mobile-icons';
import { useHistory , useLocation} from 'react-router';
import { withRouter } from 'react-router-dom';
import styles from './Detail.less';

const MDetail: React.FC = () => {
    const history = useHistory();
    const loaction = useLocation();
    const [detail, setDetail] = useState(null);
    const { state } = history.location;

    useEffect(() => {
        console.log('detail-page');
        if(state.detail) {
            setDetail(state.detail);
        }
    }, [state]);

    // console.log(state.detail);

    return (
        <Space direction="vertical" block style={{ '--gap': '12px' }}>
            { detail && <>
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
                    title={detail.name}
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
                        <EnvironmentOutline
                            style={{
                                marginRight: '10px',
                                fontSize: 20
                            }}
                        />
                        <div>
                            {detail.site}
                        </div>
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
            </>
            }
        </Space>
    );
};

export default withRouter(observer(MDetail));
