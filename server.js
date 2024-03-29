const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");

const app = express();
/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());

var myres = {
  width: 18,
  height: 18,
  points: [
    [16, 10, 10, 8, 8, 8, 5, 5, 2, 2, 5, 5, 8, 8, 8, 10, 10, 16],
    [13, 12, 2, 3, 3, 5, 5, 2, 2, 2, 2, 5, 5, 3, 3, 2, 12, 13],
    [12, 2, 3, 8, 10, 7, 8, 8, 9, 9, 8, 8, 7, 10, 8, 3, 2, 12],
    [3, 3, 12, 10, 10, 10, 10, 12, 9, 9, 12, 10, 10, 10, 10, 12, 3, 3],
    [3, 2, 8, 8, 12, 7, 8, 8, 9, 9, 8, 8, 7, 12, 8, 8, 2, 3],
    [1, 1, -5, -5, 1, -5, -5, 1, 3, 3, 1, -5, -5, 1, -5, -5, 1, 1],
    [-5, -5, 1, 1, -5, 1, 1, -5, 1, 1, -5, 1, 1, -5, 1, 1, -5, -5],
    [2, 2, 4, 2, -3, 1, 1, 1, -7, -7, 1, 1, 1, -3, 2, 4, 2, 2],
    [3, 3, 8, 5, 1, 1, 10, 2, -7, -7, 2, 10, 1, 1, 5, 8, 3, 3],
    [-7, 6, 12, 10, 2, 14, 8, 2, -5, -5, 2, 8, 14, 2, 10, 12, 6, -7],
    [2, -7, 6, 5, 16, 10, 12, 1, -5, -5, 1, 12, 10, 16, 5, 6, -7, 2],
    [5, 2, -7, -7, 2, 14, 8, 1, -6, -6, 1, 8, 14, 2, -7, -7, 2, 5],
    [7, 5, 2, 2, -7, -7, 10, -7, 1, 1, -7, 10, -7, -7, 2, 2, 5, 7],
    [10, 3, 5, 5, 2, 2, -7, 2, 6, 6, 2, -7, 2, 2, 5, 5, 3, 10],
    [10, 5, 6, 5, 3, -7, 2, 7, 14, 14, 7, 2, -7, 3, 5, 6, 5, 10],
    [10, 7, 3, 3, 5, 10, 2, 10, 16, 16, 10, 2, 10, 5, 3, 3, 7, 10],
    [12, 12, 7, 5, 3, 5, 3, 8, 10, 10, 8, 3, 5, 3, 5, 7, 12, 12],
    [15, 13, 13, 9, 9, 3, 5, 1, 9, 9, 1, 5, 3, 9, 9, 13, 13, 15]
  ],
  startedAtUnixTime: 0,
  turn: 0,
  tiled: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0],
    [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],
  teams: [
    {
      teamID: 1,
      agents: [
        {
          agentID: 1,
          x: 14,
          y: 3
        },
        {
          agentID: 2,
          x: 3,
          y: 4
        },
        {
          agentID: 3,
          x: 8,
          y: 4
        },
        {
          agentID: 4,
          x: 14,
          y: 5
        },
        {
          agentID: 5,
          x: 15,
          y: 10
        },
        {
          agentID: 6,
          x: 3,
          y: 15
        },
        {
          agentID: 7,
          x: 6,
          y: 16
        }
      ],
      tilePoint: 72,
      areaPoint: 0
    },
    {
      teamID: 2,
      agents: [
        {
          agentID: 8,
          x: 5,
          y: 3
        },
        {
          agentID: 9,
          x: 11,
          y: 4
        },
        {
          agentID: 10,
          x: 16,
          y: 4
        },
        {
          agentID: 11,
          x: 5,
          y: 5
        },
        {
          agentID: 12,
          x: 4,
          y: 10
        },
        {
          agentID: 13,
          x: 16,
          y: 15
        },
        {
          agentID: 14,
          x: 13,
          y: 16
        }
      ],
      tilePoint: 72,
      areaPoint: 0
    }
  ],
  actions: []
};
app.post("/", function(req, res) {
  console.log(req.body);
  var data = req.body.actions;
  data.forEach((element, index) => {
    myres.teams[0].agents[index].x += element.dx;
    myres.teams[0].agents[index].y -= element.dy;
  });
  console.log(myres.teams[0].agents);
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(myres));
});

app.get("/", function(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(myres));
});

app.listen(8082);
