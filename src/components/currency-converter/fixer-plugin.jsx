import { Button } from 'antd';
import axios from 'axios';


const FixerPlugin = () => {

    const apiKey = 'JrY5tpMsTvOM3zFx1h3UdVaAU5ZzMxDW';
    
    const url = "https://api.apilayer.com/fixer/timeseries?start_date=2023-02-04&end_date=2023-04-04&base=USD&symbols=PKR";
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

        // var axiosRequestOptions = {
        //     redirect: 'follow',
        //     headers: myHeaders
        // };
        // axios
        // .get(url, axiosRequestOptions)
        // .then(response => response.text())
        // .then(result => console.log('response', result))
        // .catch(err => console.log('Err', err))
    }
    return ( 
        <>
            <Button type="primary" onClick={convertHandler}>Convert Fixer</Button>
        </>
    );
}

export default FixerPlugin;