const { docClient } = require('../database');

const saveMovie = (req, res) => {
  const item = {
    TableName: 'Movies',
    Item: req.body
  }
  docClient.put(item, (err, item) => {
    if (err) {
      console.error("No se pudo agregar el item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
      console.log('Save item', JSON.stringify(item));
      res.status(200).json(item);
    }
  });
};

const getByYear = (req, res) => {
  const { year } = req.params;
  var params = {
    TableName: "Movies",
    KeyConditionExpression: "#yr = :yyyy",
    ExpressionAttributeNames: {
      "#yr": "year"
    },
    ExpressionAttributeValues: {
      ":yyyy": parseInt(year)
    }
  };
  docClient.query(params, function (err, data) {
    if (err) {
      console.log("Unable to read item: " + "\n" + JSON.stringify(err, undefined, 2));
    } else {
      console.log('Find element', data);
      res.status(200).json(data.Items);
    }
  });
}

const updateMovie = (req, res) => {
  const { year, title } = req.params;
  const itemUpdate = req.body;
  var params = {
    TableName: 'Movies',
    Key: {
      "year": parseInt(year),
      "title": title
    },
    UpdateExpression: "set info.rating = :r, info.plot=:p",
    ExpressionAttributeValues: {
      ":r": itemUpdate.info.rating,
      ":p": itemUpdate.info.plot
    },
    ReturnValues: "UPDATED_NEW"
  };

  docClient.update(params, function (err, data) {
    if (err) {
      res.status(501).send({ error: err });
    } else {
      console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
      res.send(data);
    }
  });







}

module.exports = {
  saveMovie,
  getByYear,
  updateMovie
}