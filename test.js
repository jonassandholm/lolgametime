
function getpuid(){
    fetch('https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/Neeko%20Enjoyer/4847?api_key=RGAPI-a2400010-851b-4e1c-bd27-e17be5ac0194')
    .then(response => response.json())
    .then(data => console.log(data));
}


//https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/Pizza%20Dog/5127?api_key=RGAPI-a2400010-851b-4e1c-bd27-e17be5ac0194
// Zevo API https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/Neeko%20Enjoyer/4847?api_key=RGAPI-a2400010-851b-4e1c-bd27-e17be5ac0194
//GENERELL LÄNK FÖR ANVÄNDARE  https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/NAMN%20NAMN/XXXX?api_key=RGAPI-a2400010-851b-4e1c-bd27-e17be5ac0194

//chat gpt's version fetch('https://europe.api.riotgames.com/lor/match/v1/matches/by-puuid/XwIZqM9M3nfHzliE_0mPJv4b7hphCnPeh6vr3mq60NercTAugNaDpjT1BVfFHON6JJq-vCx56vDppw/ids?start=0&count=20&api_key=MIN_NYCKEL')

function getmatches(){
    fetch('https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/XwIZqM9M3nfHzliE_0mPJv4b7hphCnPeh6vr3mq60NercTAugNaDpjT1BVfFHON6JJq-vCx56vDppw/ids?start=0&count=20&api_key=RGAPI-a2400010-851b-4e1c-bd27-e17be5ac0194')
    .then(response => response.json())
    .then(data => console.log(data));
}
getpuid();
getmatches();

