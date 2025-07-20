async function loadStatus() {
  const res = await fetch(
    "https://script.google.com/macros/s/AKfycbw_dhIsBb1L3abzgVFs3pLRnzGqOK-0TD2KSW-62FpTahJx4MGEpfhF9zRV_4ZZWF83/exec"
  );
  const status = await res.json();
  const rooms = await (await fetch("rooms.json")).json();
  const list = document.getElementById("room-list");
  list.innerHTML = "";

  rooms.forEach(room => {
    const info = status[room];
    const div = document.createElement("div");
    div.className = "room";
    div.innerHTML = `
      <h3>${room}</h3>
      <p>${info ? `🟢 ${info.name} 使用中（${info.time}）` : "⚪ 無人使用"}</p>
    `;
    list.appendChild(div);
  });
}

loadStatus();
setInterval(loadStatus, 5000);
