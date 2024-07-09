let jsonteam ;
let jsonteamarray ;

async function loadJson(){
  const res = await fetch('team.json');
  const json = await res.json();
  return json;
}

async function loadJson(){
  const res = await fetch('teamarray.json');
  const json = await res.json();
  return json;
}

loadJson().then(res => jsonteam = res);
loadJson().then(res => {
  jsonteamarray = res;
  let select = document.createElement("select");
  for (let x in jsonteamarray.team) {
    let option = document.createElement("option");
    option.value = jsonteamarray.team[x][0];
    option.text = jsonteamarray.team[x][1];
    select.appendChild(option);
  }
  let select_player = document.getElementsByClassName('select_player')[0];
  select_player.append(select);
} );



