let socket = io();
socket.on("connect", function () {
  console.log("Connected to server");
});

socket.on("disconnect", function () {
  console.log("disconnected from server");
});

socket.on("newMessage", function (message) {
  const formattedTime = moment(message.createdAt).format("LT");
  let li = document.createElement("li");
  li.innerText = `${message.from} ${formattedTime}: ${message.text}`;
  document.querySelector("body").appendChild(li);
});

socket.on("newLocationMessage", function (message) {
  const formattedTime = moment(message.createdAt).format("LT");
  let li = document.createElement("li");
  let a = document.createElement("a");
  li.innerText = `${message.from} ${formattedTime}: `;
  a.setAttribute("target", "_blank");
  a.setAttribute("href", message.url);
  a.innerHTML = "My Current Location";
  li.appendChild(a);
  document.querySelector("body").appendChild(li);
});

socket.emit(
  "createMessage",
  {
    from: "John",
    text: "Hello everyone",
  },
  function (message) {
    console.log(message + "sent to server");
  }
);

document
  .querySelector("#send-location")
  .addEventListener("click", function (e) {
    e.preventDefault();
    if (!navigator.geolocation) {
      return alert("Geolocation not supported by your browser");
    }
    navigator.geolocation.getCurrentPosition(
      function (position) {
        socket.emit("createLocationMessage", {
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      },
      function () {
        console.log("unable to fetch location");
      }
    );
  });

document.querySelector("#submit-btn").addEventListener("click", function (e) {
  e.preventDefault();
  socket.emit(
    "createMessage",
    {
      from: "John",
      text: document.querySelector("input[name='message']").value,
    },
    function () {}
  );
});
