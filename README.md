# Maze Viz

This skeleton project should be used by your maze solver to render a representation of the maze as your algorithm uncovers it in realtime.

Run these commands to install dependencies and start the web server (pre-requisites are node and npm):

```bash
npm install
npm run start
```

This server has two endpoints:
* http://localhost:8010 - the main site that renders `index.html`
* http://localhost:8010/events - receives JSON post requests and passes them to the browser via websocket

To see that things are working, here's a curl command that posts coordinate data to the `events` endpoint which should get logged to the browser console by the websocket handler in `index.html`:

```bash
curl -d '{"x":4,"y":8}' \
  -H "Content-Type: application/json" \
  http://localhost:8010/events
```

The visualization can be implemented in javascript, html and css by editing `index.html`. By default, jquery is included as a helper but feel free to use whatever library you are comfortable with.

Good luck!
