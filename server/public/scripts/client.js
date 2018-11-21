$( document ).ready( readyNow );
// the class for our items
class Item{
    constructor( name, description, color, size){
        this.name = name;
        this.description = description;
        this.color = color;
        this.size = size;
    } // end constructor
} // end Item class

function addItem(){
    if( $( '#itemNameIn' ).val() === '' || $( '#itemDescriptionIn' ).val() === '' ){
        alert( "All fields mandatory, yo!" );
    } // empties found
    else{
        console.log( 'in addItem' );
        // instantiate a new Item from class
        // using inputs from DOM
        const tempItem = new Item( 
            $( '#itemNameIn' ).val(),
            $( '#itemDescriptionIn' ).val(), 
            $( '#itemColorIn' ).val(), 
            $( '#itemSizeIn' ).val()
        ); 
        console.log( 'adding:', tempItem );
        // send new item to server
        $.ajax({
            method: 'POST',
            url: '/inventory',
            data: tempItem
        }).then( function( result ){
            console.log( 'back from POST with:', result );
            // empty inputs
            $( '#itemNameIn' ).val( '' );
            $( '#itemDescriptionIn' ).val( '' );
            getInventory();
        }).catch( function( err ){
            console.log( 'error:', err );
            alert( 'Could not add item' );
        })
    } // no empties
} // end addItem

function displayAdd(){
    console.log( 'in displayAdd' );
    $( '#inputDiv' ).show();
    $( '#outputDiv' ).hide();
} // end displayAdd

function displayInventory(){
    console.log( 'in displayInventory' );
    getInventory();
    $( '#inputDiv' ).hide();
    $( '#outputDiv' ).show();
} // end displayInventory

function getInventory(){
    console.log( 'in getInventory');
    $.ajax({
        method: 'GET',
        url: '/inventory'
    }).then( function( response ){
        console.log( 'back from GET with:', response );
        updateInventory( response ); 
    }).catch( function( err ){
        console.log( 'error:', err );
        alert( 'unable to retrieve list' );
    }) // end ajax
} //end getInventory

function readyNow(){
    console.log( 'in readyNow' );
    $( '#addItemButton' ).on( 'click', addItem );
    $( '#addNewButton' ).on( 'click', displayAdd );
    $( '#viewInventoryButton' ).on( 'click', displayInventory );
    displayAdd();
} // readyNow


function updateInventory( array ){
    console.log( 'in updateInventory' );
    // target the ul by ID
    let el =  $( '#itemList' );
    // empty ul
    el.empty();
    // loop through the inventory & display each item in ul
    for( let item of array ){
        let displayString = `<li>${item.name}, ${item.description}: ${item.size} ${item.color}</li>`;
        el.append( displayString );
    } // end for 
} // end updateInventory