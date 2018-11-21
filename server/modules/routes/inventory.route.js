const express = require( 'express' );
const router = express.Router();
const inventory = require( '../inventory.module' );

router.get( '/', ( req, res )=>{
    res.send( inventory.list )
}); //end GET

router.post( '/', ( req, res )=>{
    console.log( 'POST hit:', req.body )
    if( inventory.addItem( req.body ) ){
        res.sendStatus( 200 );
    } //end item added successfully
    else{
        res.sendStatus( 500 );
    } // end problem adding item
}); //end GET

module.exports = router;