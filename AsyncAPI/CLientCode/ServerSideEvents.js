 const evtSource = new EventSource('/events');

 evtSource.addEventListener('event', function(evt) {
      const data = JSON.parse(evt.data);
      // Use data here
 },false);