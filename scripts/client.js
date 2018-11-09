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
        updateInventory();
    } // no empties
} // end addItem

function filterList(){
    console.log( 'in filterList' );
} // end filterList

function readyNow(){
    console.log( 'in readyNow' );
    $( '#addItemButton' ).on( 'click', addItem );
    $( '#filterListButton' ).on( 'click', filterList );
} // readyNow

function updateInventory(){
    console.log( 'in updateInventory' );
    // target the ul by ID
    let el =  $( '#itemList' );
    // empty ul
    el.empty();
    // loop through the inventory & display each item in ul
    for( let item of inventory ){
        let displayString = `<li>${item.name}, ${item.description}: ${item.size} ${item.color}</li>`;
        el.append( displayString );
    } // end for 
} // end updateInventory