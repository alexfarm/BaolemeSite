import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import styles from './Echart.less';
import shanghai from '../../map/shanghai.map';

const Echart: React.FC = () => {
    const chartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chartRef.current) {
            const chart = echarts.init(chartRef.current);
            echarts.registerMap('sh', shanghai);
            const option = {
                tooltip: {},
                geo: {
                    tooltip: {
                        show: true
                    },
                    map: 'sh',
                    roam: true
                },
                series: {
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    geoIndex: 0,
                    symbolSize(params: any) {
                        return (params[2] / 100) * 15 + 5;
                    },
                    itemStyle: {
                        color: '#b02a02'
                    },
                    encode: {
                        tooltip: 2
                    },
                    data: [
                        [121.48053886, 31.23592904, 100]
                    ]
                }
            };

            chart.setOption(option);
        }
    }, [chartRef]);

    return (
        <div className={styles.chart} ref={chartRef}>

        </div>
    );
};

export default Echart;
