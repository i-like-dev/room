async function loadStatus() {
  const res = await fetch(
    "https://script.google.com/macros/s/AKfycbwVAQD38JpZTldTblVAV4uD8g9AJNcLQHICnRFRmJT90rmHXB7vhBSBITaFkhHO5R76/exec"
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
