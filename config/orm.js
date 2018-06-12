let connection = require("./connection.js");

var orm = {
  selectAll: (tableName, cb) => {
    connection.query("SELECT * FROM ??;", [tableName], (err,result)=>{
      if(err) console.log(err);

      else cb(result);
    });
  },

  insertOne: (tableName, cols, vals, cb) => {
    connection.query(
      `INSERT INTO ?? (${cols.map(col=>"??").join(", ")}) VALUES (${vals.map(val=>"?").join(",")})`,
      [tableName].concat(cols).concat(vals),
      (err,result)=>{
        if(err) console.log(err);

        else cb(result);
      }
    );
  },

  //conditions and vals are objects
  updateOne: (tableName, conditions, vals, cb) => {
    connection.query(
      `UPDATE ?? SET ${Object.keys(vals).map(val=>"?? = ?").join(", ")} WHERE ${Object.keys(conditions).map(condition => "?? = ?").join(" AND ")}`,
      [tableName]
      .concat(Object.keys(vals).map(key=>[key,vals[key]]).reduce((arr,keyval)=>arr.concat(keyval)))
      .concat(Object.keys(conditions).map(key=>[key,conditions[key]]).reduce((arr,keyval)=>arr.concat(keyval))),
      (err,result)=>{
        if(err) console.log(err);

        else cb(result);
      }
    );
  }
};

module.exports = orm;