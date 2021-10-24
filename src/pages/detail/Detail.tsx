import React, { useContext, useEffect, useState } from 'react';
import {
    Image, Card, Rate, Space, Tabs, Tag
} from 'antd-mobile';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import { LeftOutline, EnvironmentOutline } from 'antd-mobile-icons';
import { useHistory, useParams} from 'react-router';
import { withRouter } from 'react-router-dom';
import { AppContext } from '../../store';
import styles from './Detail.less';

const MDetail: React.FC = () => {
    const history = useHistory();
    const params = useParams();
    const { shopStore } = useContext(AppContext);
    const [detail, setDetail] = useState(null);
    const {shopDetail, detailTags, getDetail} = shopStore;

    console.log(toJS(detailTags));
    useEffect(() => {
        console.log('detail-page');
        if (params && params.id) {
            getDetail(params.id);
        }
    }, []);

    return (
        <Space direction="vertical" block style={{ '--gap': '12px' }}>
            { shopDetail && <>
                <div className={styles.header}>
                    <LeftOutline
                        style={{fontSize: 18}}
                        onClick={() => {
                            history.push('/');
                        }}
                    />
                    <div className={styles.title}>
                        门店详情
                    </div>

                </div>
                <Card
                    title={
                        <div style={{
                            fontSize: 24
                        }}>
                            {shopDetail.name}
                        </div>
                    }
                    bodyClassName={styles.cardBody}
                >
                    <div className={styles.main}>
                        <Image
                            style={{ borderRadius: 8 }}
                            src={shopDetail.img}
                            width={70}
                            height={70}
                            fit="cover"
                        />
                        <div className={styles.content}>
                            <div className={styles.rate}>
                                <Rate readonly value={4} style={{ '--star-size': '12px' }} />
                            </div>
                            <div className={styles.category}>
                                {shopDetail.category.name}/{shopDetail.category.type}
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
                            {shopDetail.site}
                        </div>
                    </div>
                </Card>

                <Card
                    bodyClassName={styles.cardBody}
                >
                    <Tabs>
                        <Tabs.TabPane title="优惠" key="price">
                            <Space wrap>
                                {detailTags && toJS(detailTags).length && toJS(detailTags).map((item:any) => (
                                    <Tag
                                        color="#ED5349"
                                        style={{fontSize: 15, padding: 3}}
                                        fill="outline"
                                        key={item.id}
                                    >{item.name}</Tag>
                                ))}
                                </Space>
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
