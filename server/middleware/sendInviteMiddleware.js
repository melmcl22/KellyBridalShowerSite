const fetch = require("node-fetch");

module.exports = (req, res, next) => {

    //connect to database


    //get list of people with names and numbers
    const peopleList = [{name: 'fart head', number: '7606810199'}]

    //send messages
    peopleList.forEach(el => {
        fetch('https://textbelt.com/text', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                phone: el.number,
                message: 'Hello ' + el.name + ' youre a turd ',
                key: 'cdf80dd774b686fa55f87f23187c80f1470fb4175lDILWS1xiZfpMW1I5EdXSGE3Ú',
            }),
            }).then(response => {
                return response.json();
            }).then(data => {
                console.log(data);
        });
    });


    res.body = {message: "this is the message from middleware"};
    return next();
}
