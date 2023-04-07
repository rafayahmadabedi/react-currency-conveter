import { Button } from 'antd';
import moment from 'moment';

//https://fixer.io/
const FixerPlugin = () => {

    const fromDate = moment().subtract(1, 'month').format('YYYY-MM-DD');
    const toDate = moment().format('YYYY-MM-DD');
    const baseCurr = 'USD';
    const targetCurr = 'PKR';
    
    const url = `https://api.apilayer.com/fixer/timeseries?start_date=${fromDate}&end_date=${toDate}&base=${baseCurr}&symbols=${targetCurr}`;
    // const url = `https://data.fixer.io/api/latest?access_key=${apiKey}&base=USD&symbols=PKR`;


    const convertHandler = () => {

        var myHeaders = new Headers();
        myHeaders.append("apikey", "JrY5tpMsTvOM3zFx1h3UdVaAU5ZzMxDW");

        var fetchRequestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
        };

        fetch(url, fetchRequestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
    return ( 
        <>
            <Button type="primary" onClick={convertHandler}>Convert Fixer</Button>
        </>
    );
}

export default FixerPlugin;