
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
        const response = await fetch(`https://www.fibofy.com/msteams-fibo/startNewConversation/${id}/channel_id/${session}?shared_channel=teams-bot&team_id=teams_abc`, {
            "headers": {
                "accept": "*/*",
                "authorization": "8a4bfadf32bfb287126fd9ef9ebac259ca32f132bd5cb4f8391edf9a69a06758",
                "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,uk;q=0.6",
                "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"100\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"macOS\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest",
                "cookie": "_ga=GA1.2.1295714696.1654112488; _hjSessionUser_1737608=eyJpZCI6Ijc1YzY4Njc4LTVkM2MtNTFiMi1hNWYzLWJlYTdlMTJjYmExYyIsImNyZWF0ZWQiOjE2NTQxMTI0ODg1MjgsImV4aXN0aW5nIjp0cnVlfQ==; connect.sid=s%3AkoOPfyj2iDVzt3SJtEYRlOQgGXrgk0vS.wI684u1BYbBFIFa3PqK6nDVt2K581hFMkg%2Fg3ObqyiM; mp_5e395adbffa8613b8525c450d4ccb06e_mixpanel=%7B%22distinct_id%22%3A%20%221811e0ceb7dbe9-0f46e7d5771867-53580614-13c680-1811e0ceb7e41d%22%2C%22%24device_id%22%3A%20%221811e0ceb7dbe9-0f46e7d5771867-53580614-13c680-1811e0ceb7e41d%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.fibofy.com%2Fsignin%2F%3Fredir%3D%2Fpanda%2Fadmin%2F%22%2C%22%24initial_referring_domain%22%3A%20%22www.fibofy.com%22%7D; AWSELB=43F19BD70A0EC6AEC3E24AA779BA6DDF4EA15902C7BF33B5004702A544C14D64B0C21F4E9F5CD3B18FE20A1BAF2A94A0D2BFEDAA74115F80D33D51B8CA39A2F39942AEA08D; AWSELBCORS=43F19BD70A0EC6AEC3E24AA779BA6DDF4EA15902C7BF33B5004702A544C14D64B0C21F4E9F5CD3B18FE20A1BAF2A94A0D2BFEDAA74115F80D33D51B8CA39A2F39942AEA08D",
                "Referer": "https://www.fibofy.com/panda/admin/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
        });
        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }
        const result = await response.text();
        console.log(result);
        if (result === "User ref not found."){
            console.log(id)
        }
    } catch (err) {
        console.log(err);
    }
}

async function sendBrainly(id, session, team_id) {
    try {
        var response = await fetch(`https://www.fibofy.com/panda-sharedchannels/startNewConversation/${id}/D01JU76DJTS/${session}?shared_channel=shared-brainly-2&team_id=${team_id}`, {
        "headers": {
            "accept": "*/*",
            "authorization": "8a4bfadf32bfb287126fd9ef9ebac259ca32f132bd5cb4f8391edf9a69a06758",
            "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,uk;q=0.6",
            "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"100\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest",
            "cookie": "_ga=GA1.2.1295714696.1654112488; _hjSessionUser_1737608=eyJpZCI6Ijc1YzY4Njc4LTVkM2MtNTFiMi1hNWYzLWJlYTdlMTJjYmExYyIsImNyZWF0ZWQiOjE2NTQxMTI0ODg1MjgsImV4aXN0aW5nIjp0cnVlfQ==; connect.sid=s%3AkoOPfyj2iDVzt3SJtEYRlOQgGXrgk0vS.wI684u1BYbBFIFa3PqK6nDVt2K581hFMkg%2Fg3ObqyiM; _gid=GA1.2.1605631229.1655555154; currentAvatar=6005ab7f8c98a11d331e918c; mp_5e395adbffa8613b8525c450d4ccb06e_mixpanel=%7B%22distinct_id%22%3A%20%221811e0ceb7dbe9-0f46e7d5771867-53580614-13c680-1811e0ceb7e41d%22%2C%22%24device_id%22%3A%20%221811e0ceb7dbe9-0f46e7d5771867-53580614-13c680-1811e0ceb7e41d%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.fibofy.com%2Fsignin%2F%3Fredir%3D%2Fpanda%2Fadmin%2F%22%2C%22%24initial_referring_domain%22%3A%20%22www.fibofy.com%22%7D; AWSELB=43F19BD70A0EC6AEC3E24AA779BA6DDF4EA15902C7A6E2E052B0BF03B6A9B463D9674071055CD3B18FE20A1BAF2A94A0D2BFEDAA74115F80D33D51B8CA39A2F39942AEA08D; AWSELBCORS=43F19BD70A0EC6AEC3E24AA779BA6DDF4EA15902C7A6E2E052B0BF03B6A9B463D9674071055CD3B18FE20A1BAF2A94A0D2BFEDAA74115F80D33D51B8CA39A2F39942AEA08D",
            "Referer": "https://www.fibofy.com/panda/admin/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": null,
        "method": "GET"
        });
        //const result0 = await response0.text()
        const result = await response.text();
        //console.log(result0)
        console.log(result);
        if (result === "User ref not found."){
            console.log(id)
        }
    } catch (err) {
        console.log(err);
    }
}


async function sendPandatron(id, session) {
    try {
        var response = await fetch(`https://www.fibofy.com/panda-sharedchannels/startNewConversation/${id}/D01TNUGT9MM/${session}?shared_channel=pandacoachbot&team_id=T014DKXB53N`, {
  "headers": {
    "authorization": "8a4bfadf32bfb287126fd9ef9ebac259ca32f132bd5cb4f8391edf9a69a06758",
    "accept": "*/*",
    "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,uk;q=0.6",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"100\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest",
    "cookie": "_ga=GA1.2.1295714696.1654112488; _hjSessionUser_1737608=eyJpZCI6Ijc1YzY4Njc4LTVkM2MtNTFiMi1hNWYzLWJlYTdlMTJjYmExYyIsImNyZWF0ZWQiOjE2NTQxMTI0ODg1MjgsImV4aXN0aW5nIjp0cnVlfQ==; connect.sid=s%3AlAcwFCOEvTSrUOZ9kG3L2wpUfkdQt7h0.Gisj9i31ZjJ1a%2FLaIEPSKfsIY%2BLoVK81IV5PAHnjb1A; _gid=GA1.2.1429727279.1655817083; currentAvatar=6005ab7f8c98a11d331e918c; mp_5e395adbffa8613b8525c450d4ccb06e_mixpanel=%7B%22distinct_id%22%3A%20%221811e0ceb7dbe9-0f46e7d5771867-53580614-13c680-1811e0ceb7e41d%22%2C%22%24device_id%22%3A%20%221811e0ceb7dbe9-0f46e7d5771867-53580614-13c680-1811e0ceb7e41d%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.fibofy.com%2Fsignin%2F%3Fredir%3D%2Fpanda%2Fadmin%2F%22%2C%22%24initial_referring_domain%22%3A%20%22www.fibofy.com%22%7D; AWSELB=43F19BD70A0EC6AEC3E24AA779BA6DDF4EA15902C7BF33B5004702A544C14D64B0C21F4E9F5CD3B18FE20A1BAF2A94A0D2BFEDAA74115F80D33D51B8CA39A2F39942AEA08D; AWSELBCORS=43F19BD70A0EC6AEC3E24AA779BA6DDF4EA15902C7BF33B5004702A544C14D64B0C21F4E9F5CD3B18FE20A1BAF2A94A0D2BFEDAA74115F80D33D51B8CA39A2F39942AEA08D",
    "Referer": "https://www.fibofy.com/panda/admin/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "GET"
});
        //const result0 = await response0.text()
        const result = await response.text();
        //console.log(result0)
        console.log(result);
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
    let wait = 0;
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
            console.log("here")
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
            }, wait * 2000);
            wait += 1
        }

        if ((element.eveninghours === date.getHours() && element.eveningminutes === date.getMinutes())) {
            console.log("here")
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
            }, wait * 2000);
            wait += 1
        }

    }
}, 60000);
























