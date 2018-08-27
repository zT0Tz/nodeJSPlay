
const request = require('request');





const getExchangeRate = (date, baseCurrency, callback) => {
    request({
        url: `https://api.exchangeratesapi.io/${date}?base=${baseCurrency}`,
        json: true,
    },(error, response, body) => {
        if(error){
            console.log('Unable to connect to the server');
        }
        else if(body.error){
            if(body.error === "Date too old")
                callback('Date too old,please enter a date after 1999-01-03');
            // console.log('Date too old,please enter a date after 1999-01-03');
            else if(body.error === "Invalid date")
                callback('Please input a valid date');
            // console.log('Please input a valid date');
            else if(body.error === "Not found")
                callback('Please input a valid date');
            // console.log('Please input a valid date');
            else if(body.error === "Invalid base")
                callback('Please input a valid base currency');
            // console.log('Please input a valid base currency');
        }
        else if(body.details){
            callback('Check the input format.  you should type e.g:   --date=2018-03-26');
            // console.log('Check the input format.  you should type e.g:   --date=2018-03-26');
        }
        else
            callback(undefined, {
                body,
            });
        // console.log(JSON.stringify(body, undefined, 2));

    });

};
