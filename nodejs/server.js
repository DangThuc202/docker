const express = require( 'express' );
const { Sequelize } = require( 'sequelize' );
const app = express();
const port = 3000;

// Kết nối đến MySQL
const sequelize = new Sequelize( 'php', 'root', 'password', {
  host: 'db',
  dialect: 'mysql'
} );

sequelize.authenticate()
  .then( () =>
  {
    console.log( 'Connected to MySQL' );
  } )
  .catch( err =>
  {
    console.error( 'Unable to connect to MySQL:', err );
  } );

app.get( '/', ( req, res ) =>
{
  res.send( 'Hello, World!' );
} );

app.listen( port, () =>
{
  console.log( `Server is running on http://localhost:${ port }` );
} );
