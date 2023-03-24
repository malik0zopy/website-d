//indexedDB


//main varibales
let blynkData = document.querySelector(".show-data");
let i = 0;
let date = new Date();
function timeout() {
  setTimeout(function () {
    getData();
    timeout();
    
  }, 1000);
}



function getData() {
  fetch(
    `https://ny3.blynk.cloud/external/api/get?token=U-nfUdhCpO9A5VhMmw7c6nULbVJWnFvM&dataStreamId=6`
  ).then((response) => {
    response.json().then((data) => {
      //create container for data
      let d = document.createElement("div");
      d.className = "data-name";
      //sensor info
      let sensorVal = document.createElement("span");
      sensorVal.innerHTML = `<b>sensor value:</b><span style="color: red">${data}</span>\t`;
      sensorVal.className = "sensor-val";
      //time info
      let date = new Date();
      let timeVal = document.createElement("span");
      timeVal.innerHTML = `<b>time:</b><span>${date}</span`;
      timeVal.className = "time-val";
      //appending to main container
      d.append(sensorVal, timeVal);
      blynkData.prepend(d);


      
    });
  });
}

timeout();