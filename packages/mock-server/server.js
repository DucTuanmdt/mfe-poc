const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const port = 4500;

// Simple token generation function
function generateBasicToken(email) {
  const tokenBase = `${email}:${new Date().getTime()}`;
  return Buffer.from(tokenBase).toString('base64');
}


server.use(jsonServer.bodyParser)


// Modified login route with basic token generation
server.post('/login', (req, res) => {
  const db = router.db;
  const { email, password } = req.body;

  const user = db.get('users')
    .find({ email: email, password: password })
    .value();

  if (user) {
    // Generate a simple token
    const token = generateBasicToken(email);

    // remove password from the response
    const securedUser = { ...user };
    delete securedUser.password;

    res.jsonp({ success: true, message: 'Login successful', token: token, user:securedUser });
  } else {
    res.status(401).jsonp({ success: false, message: 'Invalid email or password' });
  }
});

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running at http://localhost:${port}`);
});