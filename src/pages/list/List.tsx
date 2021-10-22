import React, { useContext, useEffect } from 'react';
import { Image, Card, Rate } from 'antd-mobile';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router';
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
                            history.push('detail/1');
                        }}
                    >
                        <Image
                            style={{ borderRadius: 8 }}
                            src={item?.img}
                            width={66}
                            height={66}
                            fit="fill"
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
                                {item.tag}
                            </div>
                        </div>
                    </Card>
                ))
            }
        </>

    );
};

export default observer(MList);
