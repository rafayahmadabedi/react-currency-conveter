import { Button } from 'antd';

import CurrencyAPI from '@everapi/currencyapi-js';

//https://currencyapi.com/
const CurrencyApiPlugin = () => {
    const baseCurrency = "PKR";
    const targetCurrency = "USD";
    const historyDate = "2023-03-04"; //YYYY-MM-DD

    const apiKey = "MGYFiZAyqNuKQZvW6594jT18YyiuIAIcFBxHqZS4";

    const currencyApi = new CurrencyAPI(apiKey);

    const convertHandler = () => {
        currencyApi.range({
            datetime_start: historyDate,
            datetime_end: "2023-04-04",
            base_currency: baseCurrency,
            currencies: targetCurrency
        }).then(response => {
            console.log('response', response);
        }).catch(err => {
            console.log('err', err)
        });
    };

    return (
        <>
            <Button type="primary" onClick={convertHandler}>Convert Currencyapi</Button>
        </>
    );
}

export default CurrencyApiPlugin;