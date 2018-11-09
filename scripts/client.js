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
// our inventory array
let inventory = [];

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
        // push new item into our array
        inventory.push( tempItem );
        // empty inputs
        $( '#itemNameIn' ).val( '' );
        $( '#itemDescriptionIn' ).val( '' );
        updateInventory( inventory );
    } // no empties
} // end addItem

function displayAdd(){
    console.log( 'in displayAdd' );
    $( '#inputDiv' ).show();
    $( '#outputDiv' ).hide();
} // end displayAdd

function displaySearch(){
    console.log( 'in displaySearch' );
    $( '#inputDiv' ).hide();
    $( '#outputDiv' ).show();
} // end displaySearch

function filterList(){
    console.log( 'in filterList' );
    let matches = [];
    // get two filter fields (size/color)
    // loop through the inventory and collect matches
    for( item of inventory ){
        if( item.size === $( '#searchSizeIn').val() && item.color === $( '#searchColorIn').val() ){
            // found match
            matches.push( item );
        } // end match
    } // end for of
    updateInventory( matches );
    console.log( 'matches:', matches );
} // end filterList

function readyNow(){
    console.log( 'in readyNow' );
    $( '#addItemButton' ).on( 'click', addItem );
    $( '#filterListButton' ).on( 'click', filterList );
    $( '#allButton' ).on( 'click', showAll );
    $( '#addNewButton' ).on( 'click', displayAdd );
    $( '#viewSearchButton' ).on( 'click', displaySearch );
    displayAdd();
} // readyNow

function showAll(){
    console.log( 'in showAll' );
    updateInventory( inventory );
} // end showAll

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