import { Button } from 'antd';
import axios from 'axios';

function CurrencyDataXEPlugin() {
    const appId = "nisum415426488";
    const apiKey = "llcmg5tpsv5skvhqeav82ives3";

    const params = new URLSearchParams();
    params.append('username', appId);
    params.append('password', apiKey);
    const token = btoa(`${appId}:${apiKey}`);
    
    const config = {
        headers: {
            'Authorization': `Basic ${token}`
        }
    };

    const convertHandler = (e) => {
        
        // const url = `https://xecdapi.xe.com/v1/account_info`;
        // const url = `https://xecdapi.xe.com/v1/convert_from/?to=GBP&from=PKR&amount=1`;
        const url = `https://xecdapi.xe.com/v1/historic_rate/period/?from=USD&to=CAD&start_timestamp=2017-09-01&end_timestamp=2017-11-30&per_page=500`;

        axios
        .get(url, config)
        .then(response => {
            console.log('response', response);
        })
    };
    return ( 
        <>
            <Button type="primary" onClick={convertHandler}>Convert XE Currency</Button>
        </>
     );
}

export default CurrencyDataXEPlugin;