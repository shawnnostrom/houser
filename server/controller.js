module.exports = {
  getHouses: (req,res,next) => {
    const db = req.app.get('db')
    db.get()
    .then(houses => res.send(houses))
    .catch(error => console.error(error))
  },
  addHouse: (req,res,next) => {
    const db = req.app.get('db');
    const {name,address,city,state,zip,url,mortgage,rent} = req.body;
    db.newhouse([name,address,city,state,zip,url,mortgage,rent])
    .then(()=> res.send("saved"))
    .catch(error => console.error(error))
  },
  deleteHouse: (req,res,next) => {
    const db = req.app.get('db');
    const id = req.params.id;
    db.delete(id)
    .then(() => res.send('deleted'))
    .catch(error => console.error(error))
  }

}