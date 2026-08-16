
function getpuid(){
    fetch('https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/Neeko%20Enjoyer/4847?api_key=*****')
    .then(response => response.json())
    .then(data => console.log(data));
}


function getmatches(){
    fetch('https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/XwIZqM9M3nfHzliE_0mPJv4b7hphCnPeh6vr3mq60NercTAugNaDpjT1BVfFHON6JJq-vCx56vDppw/ids?start=0&count=20&api_key=RGAPI-********')
    .then(response => response.json())
    .then(data => console.log(data));
}
getpuid();
getmatches();

