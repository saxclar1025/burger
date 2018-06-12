const orm = require("./../config/orm");

const burgerModel = {
  getAllBurgers: cb => {
    orm.selectAll("burgers", res=>{cb(res)});
  },

  createBurger: (name,cb) => {
    orm.insertOne("burgers", ["burger_name"], [name], res=>{cb(res)});
  },

  devourBurger: (id,cb) => {
    orm.updateOne("burgers", {id:id}, {devoured:true}, res=>{cb(res)});
  }
}

module.exports = burgerModel;