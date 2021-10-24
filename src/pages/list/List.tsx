import React, { useContext, useEffect } from 'react';
import { Image, Card, Rate } from 'antd-mobile';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router';
import { LeftOutline, EnvironmentOutline } from 'antd-mobile-icons';
import styles from './List.less';
import { IShop } from '../../store/Shop';

interface Iprops{ 
    list : IShop[]
}

const MList: React.FC<Iprops> = (prosp) => {
    const history = useHistory();

    const { list } = prosp;

    useEffect(() => {
        console.log('list page init');
    }, []);

    return (
        <>
            {
                list.map((item) => (
                    <Card
                        key={item.id}
                        className={styles.card}
                        bodyClassName={styles.cardBody}
                        onClick={() => {
                            history.push({
                                pathname: `detail/${item.id}`,
                                state: {
                                    detail: item
                                }
                            });
                        }}
                    >
                        <Image
                            style={{ borderRadius: 8 }}
                            src={item?.img}
                            className={styles.image}
                            width={70}
                            height={70}
                            fit="cover"
                        />
                        <div className={styles.content}>
                            <div className={styles.header}>
                                {item.name}
                            </div>
                            <div className={styles.rate}>
                                <Rate readonly value={item.rate} style={{ '--star-size': '12px' }} />

                                <div className={styles.distance}>
                                    {item.distance}
                                </div>
                            </div>
                            <div className={styles.categray}>
                                <EnvironmentOutline
                                    style={{
                                        marginRight: 5,
                                        fontSize: 12,
                                    }}
                                />
                                <div className={styles.site}>{item.site}</div>
                            </div>
                        </div>
                    </Card>
                ))
            }
        </>

    );
};

export default observer(MList);
