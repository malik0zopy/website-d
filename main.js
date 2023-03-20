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
      let d = document.createElement("div");
      d.className = "data-name";
      let dataTEXT = document.createTextNode(
        `sensor value:${data},time:${date}`
      );
      d.appendChild(dataTEXT);
      blynkData.appendChild(d);
    });
  });
}

timeout();
