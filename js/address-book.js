'use strict';


/***************************************************************************************/
/***************************** DONNEES CARNET D'ADRESSES *******************************/
/***************************************************************************************/

const DOM_STORAGE_ITEM_NAME = 'Address Book';


/***************************************************************************************/
/***************************** FONCTIONS CARNET D'ADRESSES *****************************/
/***************************************************************************************/
 
/**
 * Crée un nouveau contact
 * @param title - La civilité du contact
 * @param firstName - Le prénom du contact
 * @param lastName - Le nom du contact
 * @param phone - Le téléphone du contact
 * @returns {Object} - Objet contenant les informations du contact
 */
function createContact(title, firstName, lastName, phone)
{
    //création d'un objet (voir au dessus)
    const contact           = new Object();
    contact.firstName = firstName;
    contact.lastName  = lastName.toUpperCase();
    contact.phone     = phone;
    //on vérifie si c'est un monsieur une dame ou une mademoiselle (damoiseau hahahaha)
    switch(title) {

        case '1':
            contact.title = 'Madame';
            break;

        case '2':
            contact.title = 'Mademoiselle';
            break;

        case '3':
            contact.title = 'Monsieur';
            break;
    }
    //on oubli pas de retourner la valeur
    return contact;
}

/**
 * Charge les données du carnet d'adresses du Local Storage
 * @returns {Array} Le tableau d'objets Contacts
 */
function loadAddressBook()
{
     // Chargement du carnet d'adresses depuis le DOM storage.
    let addressBook = loadDataFromDomStorage(DOM_STORAGE_ITEM_NAME);

    // Est-ce qu'il n'y avait aucune donnée dans le DOM storage ?
    if(addressBook == null) {

        // Oui, création d'un carnet d'adresses vide.
        addressBook = new Array();
    }

    return addressBook;
}

/**
 * Mise à jour de l'affichage de la liste de contacts
 */
function refreshAddressBook()
{
    // Chargement des données du carnet d'adresses
    const addressBook = loadAddressBook();

    // Construction de la liste <ul> contenant le carnet d'adresses HTML.
    const addressBookList = $('<ul>').addClass('list-unstyled');

    /**
     * Affichage HTML du carnet d'adresses, un contact à la fois en bouclant sur le tableau de contacts
     * grâce à la méthode .forEach() de la classe Array
     * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/forEach
     */
    addressBook.forEach(function(contact, index){

        // Construction de l'hyperlien <a> contenant le nom et prénom du contact.
        const hyperlink = $('<a>')
            .attr('href', '#contact-details')
            .data('index', index)
            .text(contact.firstName + ' ' + contact.lastName)
            .prepend($('<i>').addClass('far fa-user').attr('aria-hidden','true'));

        /*
         * 1. Insertion de la balise <a> dans une nouvelle balise <li>
         * 2. Ajout de la balise <li> à l'intérieur de la balise <ul>
         */
        addressBookList.append($('<li>').append(hyperlink));
    });

    /**
     * Affichage de la liste de contacts en remplaçant la liste existante
     *
     *    Solution 1 :
     *      $('#address-book').empty(); // Effacer tout ce qui se trouve dans #address-book
     *      $('#address-book').append(list);
     *
     *    Solution 2 : https://api.jquery.com/html/
     *      $('#address-book').html(list);
     */
    if( addressBook.length > 0 ) {
        // Insérer la ul dans la section de la page
        $('#address-book').html(addressBookList);
    }
    else {
        $('#address-book').html( $('<p>').text('Aucun contact enregistré') );
    }
}

/**
 * Enregistrement du carnet d'adresses dans le Local Storage
 * @param addressBook - Le tableau d'objets contenant les contacts du carnet d'adresses
 */
function saveAddressBook(addressBook)
{
    saveDataToDomStorage(DOM_STORAGE_ITEM_NAME, addressBook);

}