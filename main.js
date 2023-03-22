//main varibales

function getData() {
  fetch(
    `https://ny3.blynk.cloud/external/api/get?token=U-nfUdhCpO9A5VhMmw7c6nULbVJWnFvM&dataStreamId=6`
  ).then((response) => {
    response.json().then((data) => {
      let d = document.createElement("div");
      d.className = "data-name";
      let sensorVal = document.createElement("span");
      sensorVal.innerHTML = `<b>sensor value:</b>${data}`;
      sensorVal.className = "sensor-val";
      let timeVal = document.createElement("span");
      timeVal.innerHTML = `<b>time:</b>${date}`;
      timeVal.className = "time-val";
      d.appendChild(sensorVal);
      d.appendChild(timeVal);
      blynkData.appendChild(d);
    });
  });
}