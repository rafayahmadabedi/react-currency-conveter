import { Line } from '@ant-design/charts';
import { useEffect, useState } from 'react';

const Chart = () => {
    const [data, setData] = useState([]);
    const localCurr = 'PKR';

    const generateGraphData = (data) => {
        let DataArr = [];
        let max = 0;
        let min = 0;
        for (const key in data) {
            if (Object.hasOwnProperty.call(data, key)) {
                const rateObj = data[key];
                const conversionValue = rateObj[localCurr];
                DataArr.push({"date": key, conversionValue});

                max = (conversionValue > max) ? conversionValue : max;
                min = (conversionValue < min) ? conversionValue : min;
            }
        }

        return { DataArr, min, max };
    };

    const getData = () => {
        fetch('FixerDummyResponse.json',
            {
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
        .then( resp => resp.json() )
        .then(response => {
            const {DataArr, min, max} = generateGraphData(response.rates);
            
            setData(DataArr);
            
            config.yAxis.max = max + 10;
            config.yAxis.min = min - 10;
        });
    }

    useEffect(() => {
        getData();
    },[]);

  
    const config = {
        data,
        padding: 'auto',
        xField: 'date',
        yField: 'conversionValue',
        yAxis: {
            min: 10,
            max: 0
        }
    };

  return (
    <>
        <h1>Currency history chart</h1>
        <Line {...config} />;
    </>
    )
}

export default Chart;