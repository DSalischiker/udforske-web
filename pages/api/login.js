export default (req, res) => {
    console.log('LOGIN: Console Log Backend', req);
    const {values} = req.body;

    //ACA VAMOS A INTERACTUAR CON LA BASE


    res.statusCode = 200
    res.json({ message: 'Hola', email: values.email});
  }
