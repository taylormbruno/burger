const connection = require("../config/connection");

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }

let orm = {
    // select and show all in database
    selectAll: function(table, cb) {
        let qS = "SELECT * FROM " + table + ";";
        connection.query(qS, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    // insert new item to the database
    insertOne: function(input, cb) {
      // inserts name as null but console log shows the name;
        let qS = "INSERT INTO burgers (burger_name) VALUES (?)";
        console.log('input: ', input)
        connection.query(qS, [input], function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    // devour the burger
    updateOne: function(table, objColVals, condition, cb) {
        let qS = "UPDATE burgers SET ";
        qS += objToSql(objColVals);
        qS += " WHERE ";
        qS += condition;

        console.log(qS);

        connection.query(qS, function(err, result) {
            if (err) throw err;
            cb(result);
        })

    }
}

module.exports = orm;