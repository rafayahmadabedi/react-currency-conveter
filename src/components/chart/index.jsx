import { Line } from '@ant-design/charts';
import { useEffect, useState } from 'react';

const Chart = () => {
    const [conversionRateData, setConversionRateData] = useState([])
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
            console.log('response', response.rates);
            let DataArr = [];
            for (const key in response.rates) {
                if (Object.hasOwnProperty.call(response.rates, key)) {
                    const rate = response.rates[key];
                    DataArr.push({date: key, conversionValue: rate['PKR']})
                }
            }
            setConversionRateData(DataArr);
            console.log('setConversionRateData', conversionRateData);

        });
      }
      useEffect(()=>{
        getData()
      },[])
    const data = [
        { year: '1991', value: 3 },
        { year: '1992', value: 4 },
        { year: '1993', value: 3.5 },
        { year: '1994', value: 5 },
        { year: '1995', value: 4.9 },
        { year: '1996', value: 6 },
        { year: '1997', value: 7 },
        { year: '1998', value: 9 },
        { year: '1999', value: 13 },
      ];
    
    const config = {
        data,
        width: 800,
        height: 400,
        autoFit: false,
        xField: 'year',
        yField: 'value',
        point: {
          size: 5,
          shape: 'point',
        },
        label: {
          style: {
            fill: '#aaa',
          },
        },
      };
    return (
        <div>
            <h1>Currency history chart</h1>
            { conversionRateData.length > 0 && <Line {...config} /> }
        </div>
    );
}

export default Chart;