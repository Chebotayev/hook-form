const SSEServer = require('sse-fake-server');

// Pass callback to SSEServer
SSEServer(client => {
    const statuses = ['pending', 'succeed', 'failure'];
    setInterval(() => {
        client.send(statuses[Math.floor(Math.random() * statuses.length)])
    }, 2000);
});