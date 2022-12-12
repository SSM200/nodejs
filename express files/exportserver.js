server(app);
// before it const {server} = require("./server.js")
const server = (app) => {
  var serverF = app.listen(8000, function (req, res) {
    var host = serverF.address().address;
    var port = serverF.address().port;
    console.log(host + port);
    return;
  });
};

module.exports = { server };