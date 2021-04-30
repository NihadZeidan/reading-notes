'use strict';

const superagent = require('superagent');



//  With normal syntax .then()
superagent.get('URL').then((data) => {
    console.log(data);
}).catch((err) => console.error(err));


// With async\await syntax 

async function getData() {
    try {
        let result = await superagent.get('URL');
        console.log(result);

    } catch {
        console.error(error)
    }
}

getData();