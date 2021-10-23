import React, { useContext, useEffect } from 'react';
import { Swiper, Toast } from 'antd-mobile';
import { observer } from 'mobx-react';
import { AppContext } from '../../store';
import styles from './Banner.less';

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac'];

const Banner: React.FC = () => {
    const { adStore } = useContext(AppContext);
    const { list } = adStore;

    useEffect(() => {
        // adStore.initSocket(window);
        console.log('ad page init');
    }, [adStore]);

    return (
        <>
            <Swiper>
                {
                    list.map((ad: any, index: number) => (
                        <Swiper.Item key={index}>
                            <div
                                className={styles.content}
                                style={{ background: colors[index] }}
                                onClick={() => {
                                    Toast.show(`你点击了卡片 ${index + 1}`);
                                }}
                            >
                                {ad.description}
                            </div>
                        </Swiper.Item>
                    ))
                }
            </Swiper>
        </>
    );
};

export default observer(Banner);
