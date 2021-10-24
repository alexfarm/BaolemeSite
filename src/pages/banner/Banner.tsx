import React, { useContext, useEffect } from 'react';
import { Swiper } from 'antd-mobile';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import cx from 'classnames';
import { AppContext } from '../../store';
import styles from './Banner.less';

const Banner: React.FC = () => {
    const { adStore } = useContext(AppContext);
    const { adList, getAll } = adStore;

    useEffect(() => {
        console.log('ad page init');
        getAll();
    }, [adStore]);

    return (
        <>
            <Swiper
                style={{
                    '--track-padding': ' 0 0 16px',
                }}
                indicatorProps={{
                    '--active-dot-size': '10px',
                }}
            >
                {
                    toJS(adList).map((ad: any, index: number) => (
                        <Swiper.Item key={index}>
                            <div
                                className={cx(styles.content, styles[`img_${ad.type}`])}                            >
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
