$(function () {
  // if user is running mozilla then use it's built-in WebSocket
  window.WebSocket = window.WebSocket || window.MozWebSocket;

  const connection = new WebSocket('ws://localhost:8080/githubEvents');

  connection.onopen = function () {
    // connection is opened and ready to use
  };

  connection.onerror = function (error) {
    // an error occurred when sending/receiving data
  };

  connection.onmessage = function (message) {
    // try to decode json (I assume that each message
    // from server is json)
    try {
      const githubEvent = JSON.parse(message.data); // display to the user appropriately
    } catch (e) {
      console.log('This doesn\'t look like a valid JSON: '+ message.data);
      return;
    }
    // handle incoming message
  };
});