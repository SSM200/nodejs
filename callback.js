function processData (callback) {
    fetchData(function (err, data) {
      if (err) {
        console.log("An error has occurred. Abort everything!");
        return callback(err);
      }
      data += 1;
      console.log("I am here!");
      callback(data);
    });

}
processData();