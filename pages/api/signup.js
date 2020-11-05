export default (req, res) => {
    console.log('SIGNUP: Console Log Backend', req);
    const {values} = req.body;

    //ACA VAMOS A INTERACTUAR CON LA BASE


    res.statusCode = 200
    res.json({ message: 'Bienvenide', name: values.name, email: values.email});
  }
