// requires
const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const inventory = require( './modules/routes/inventory.route' );
// globals
const app = express();
const port = process.env.PORT || 5000;
//uses
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( '/inventory', inventory );
// server up
app.listen( port, ()=>{
    console.log( 'server up on:', port );
}); // end server up