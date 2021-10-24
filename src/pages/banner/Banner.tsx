import React, { useContext, useEffect } from 'react';
import { Swiper, Toast } from 'antd-mobile';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import cx from 'classnames';
import { AppContext } from '../../store';
import styles from './Banner.less';

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac'];

const Banner: React.FC = () => {
    const { adStore } = useContext(AppContext);
    const { adList } = adStore;

    useEffect(() => {
        // adStore.initSocket(window);
        console.log('ad page init');
    }, [adStore]);

    console.log(toJS(adList));
    return (
        <>
            <Swiper
                style={{
                    '--track-padding': ' 0 0 16px'
                }}
                indicatorProps={{
                    '--active-dot-size': '30px'
                }}
            >
                {
                    toJS(adList).map((ad: any, index: number) => (
                        <Swiper.Item key={index}>
                            <div
                                className={cx(styles.content, styles[`img_${ad.type}`])}
                                // style={{ background: colors[index], }}
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
