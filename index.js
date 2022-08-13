
import fetch from "node-fetch"

import data66 from "./clientsSaturday.js"







let Data = data66.data66;
const MicrosoftWorkspace = "teams-bot"
//const KoneWorkspace = `[data-shared-channel='kone']`
const PandaWorspace = "pandacoachbot"
const BrainlyWorkspace = "shared-brainly-2"

const morningSession = "6200d57014d1b95a4c82dc68"
const eveningSession = "61b65debfe32175adb317233"

//SEND
//msteams-fibo
///////      data_userid
////////     channel_id(ssessionid)
//shared_channel=teams-bot
//team_id=teams_abc
async function sendMicrosoft(id, session) {
    try {
        const response = await fetch(`https://www.fibofy.com/msteams-fibo/startNewConversation/${id}/channel_id/${session}?shared_channel=teams-bot&team_id=teams_abc&session_type=Nano`, {
            "headers": {
              "accept": "*/*",
              "authorization": "8a4bfadf32bfb287126fd9ef9ebac259ca32f132bd5cb4f8391edf9a69a06758",
              "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,uk;q=0.6",
              "sec-ch-ua": "\"Chromium\";v=\"104\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"104\"",
              "sec-ch-ua-mobile": "?0",
              "sec-ch-ua-platform": "\"macOS\"",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin",
              "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "https://www.fibofy.com/panda/admin/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "include"
          });
        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }
        const result = await response.text();
        console.log(result, " id: ", id);
        if (result === "User ref not found."){
            console.log(id)
        }
    } catch (err) {
        console.log(err);
    }
}

async function sendBrainly(id, session, team_id) {
    try {
        const res2 = await fetch(`https://www.fibofy.com/panda-sharedchannels/checkUserPrivateChannel/${id}?shared_channel=shared-brainly-2&team_id=T7NBLKUJV&session_type=Nano&bypass=cc4d9d62ad12bb29cce8663cffdaf6e9026961cc81b8dfcf10d4683087403180`, {
            "headers": {
              "accept": "*/*",
              "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,uk;q=0.6",
              "sec-ch-ua": "\"Chromium\";v=\"104\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"104\"",
              "sec-ch-ua-mobile": "?0",
              "sec-ch-ua-platform": "\"macOS\"",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin",
              "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "https://www.fibofy.com/panda/admin/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "include"
          });
        var response = await fetch(`https://www.fibofy.com/panda-sharedchannels/startNewConversation/${id}/D01HRBQ7L3H/${session}?shared_channel=shared-brainly-2&team_id=${team_id}&session_type=Nano`, {
            "headers": {
              "accept": "*/*",
              "authorization": "8a4bfadf32bfb287126fd9ef9ebac259ca32f132bd5cb4f8391edf9a69a06758",
              "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,uk;q=0.6",
              "sec-ch-ua": "\"Chromium\";v=\"104\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"104\"",
              "sec-ch-ua-mobile": "?0",
              "sec-ch-ua-platform": "\"macOS\"",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin",
              "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "https://www.fibofy.com/panda/admin/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "include"
          });
        const result1 = await res2.text()
        console.log(result1)
        const result = await response.text();
        console.log(result, " id: ", id);
        if (result === "User ref not found."){
            console.log(id)
        }
    } catch (err) {
        console.log(err);
    }
}


async function sendPandatron(id, session) {
    try {
        const res2 = await fetch(`https://www.fibofy.com/panda-sharedchannels/checkUserPrivateChannel/${id}?shared_channel=pandacoachbot&team_id=T014DKXB53N&session_type=Nano&bypass=cc4d9d62ad12bb29cce8663cffdaf6e9026961cc81b8dfcf10d4683087403180`, {
            "headers": {
              "accept": "*/*",
              "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,uk;q=0.6",
              "sec-ch-ua": "\"Chromium\";v=\"104\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"104\"",
              "sec-ch-ua-mobile": "?0",
              "sec-ch-ua-platform": "\"macOS\"",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin",
              "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "https://www.fibofy.com/panda/admin/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "include"
          });
        var response = await fetch(`https://www.fibofy.com/panda-sharedchannels/startNewConversation/${id}/D01E1Q8MYQM/${session}?shared_channel=pandacoachbot&team_id=T014DKXB53N&session_type=Nano`, {
            "headers": {
              "accept": "*/*",
              "authorization": "8a4bfadf32bfb287126fd9ef9ebac259ca32f132bd5cb4f8391edf9a69a06758",
              "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,uk;q=0.6",
              "sec-ch-ua": "\"Chromium\";v=\"104\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"104\"",
              "sec-ch-ua-mobile": "?0",
              "sec-ch-ua-platform": "\"macOS\"",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin",
              "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "https://www.fibofy.com/panda/admin/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "include"
          });
        const result1 = await res2.text()
        console.log(result1)
        const result = await response.text();
        console.log(result, " id: ", id);
        if (result === "User ref not found."){
            console.log(id)
        }
    } catch (err) {
        console.log(err);
    }
}
async function getMonday(){
    try {
    var response = await fetch('https://61vqrvqwn3.execute-api.us-east-1.amazonaws.com/staging2?day=Monday', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
    const result = await response.json();
    return await  result
    }catch (err) {
    console.log(err);
    }
}

async function getTuesday(){
    try {
    var response = await fetch('https://61vqrvqwn3.execute-api.us-east-1.amazonaws.com/staging2?day=Tuesday', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
    const result = await response.json();
    return await result
    }catch (err) {
    console.log(err);
    }
}

async function getWednesday(){
        try {
        var response = await fetch('https://61vqrvqwn3.execute-api.us-east-1.amazonaws.com/staging2?day=Wednesday', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }})
        const result = await response.json();
        return await result
        }catch (err) {
        console.log(err);
        }
}

 const getThursday= async()=>{
    try {
    var response = await fetch('https://61vqrvqwn3.execute-api.us-east-1.amazonaws.com/staging2?day=Thursday', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }})
    const result = await response.json();
    return await result
    }catch (err) {
    console.error(err);
    }
}


async function getFriday(){
    try {
    var response = await fetch('https://61vqrvqwn3.execute-api.us-east-1.amazonaws.com/staging2?day=Friday', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }})
    const result = await response.json();
    //console.log(result);
    return await result
    }catch (err) {
    console.log(err);
    }
}


setInterval(() => {
    var date = new Date();
    let wait = 1;
    const expr = date.getDay();
    switch (expr) {
        case 1:
            console.log("Today is Monday");
            (async ()=>{
                Data = await getMonday()
            })();
            break;
        case 2:
            console.log("Today is Tuesday");
            (async ()=>{
                Data = await getTuesday()
            })();
            break;
        case 3:
            console.log("Today is Wednesday");
            (async ()=>{
                Data = await getWednesday()
            })();
            break;
        case 4:
            console.log("Today is Thursday");
            (async ()=>{
                Data = await getThursday()
            })();
            break;
        case 5:
            console.log("Today is Friday");
            (async ()=>{
                Data = await getFriday()
            })();
            break;
        case 6:
            console.log("Today is Saturday");
            Data=data66.data66
            break;
        case 0:
            console.log("Today is Sunday");
            Data=data66.data66
            break;
        default:
            console.log(`Sorry, we are out of ${expr}.`);
    }

    console.log(date.toISOString().slice(0, 10), " hours: " + date.getHours(), " minutes: " + date.getMinutes(), " day " + date.getDay())
    for (let index = 0; index < Data.length; index++) {
        const element = Data[index];
        
        if ((element.morninghours === date.getHours() && element.morningminutes === date.getMinutes())) {
            console.log("found the user")
            setTimeout(() => {
                if (element.workspace == MicrosoftWorkspace) {
                    sendMicrosoft(element.id, element.morningsession)
                }
                if (element.workspace == BrainlyWorkspace) {
                    sendBrainly(element.id, element.morningsession, element.team_id)
                }
                if (element.workspace == PandaWorspace) {
                    sendPandatron(element.id, element.morningsession)
                }
                //run(element.id, element.workspace, element.session);
            }, wait * 3000);
            wait += 2
        }

        if ((element.eveninghours === date.getHours() && element.eveningminutes === date.getMinutes())) {
            console.log("found the user")
            //const session = element.eveningsession
            setTimeout(() => {
                if (element.workspace === MicrosoftWorkspace) {
                    sendMicrosoft(element.id, element.eveningsession)
                }
                if (element.workspace === BrainlyWorkspace) {
                    sendBrainly(element.id, element.eveningsession, element.team_id)
                }
                if (element.workspace === PandaWorspace) {
                    sendPandatron(element.id, element.eveningsession)
                }
                //run(element.id, element.workspace, element.session);
            }, wait * 3000);
            wait += 2
        }

    }
}, 60000);
























