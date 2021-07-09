'use strict';

/**
 * Gestionnaires d'événements
 */

``

/**
 * Gestionnaire d'événement au clic sur le bouton d'ajout de contact
 */
function onClickAddContact()
{
    // Réinitialisation du formulaire (efface les champs texte, etc.).
    $('#contact-form').trigger('reset');
    $('#contact-details').hide();
    $('#address-book li.is-current').removeClass('is-current');

    // Basculement du formulaire en mode ajout puis affichage.
    $('#contact-form').data('mode', 'add').fadeIn('fast');
}

/**
 * Gestionnaire d'événement au clic sur le bouton de remise à zéro du carnet d'adresses
 */
function onClickClearAddressBook()
{
    // Sauvegarde d'un carnet d'adresse vide, écrasant le carnet d'adresse existant.
     saveAddressBook(new Array());
    // Mise à jour de l'affichage
    $('#contact-details').hide();
    
    // Mise à jour de l'affichage
    refreshAddressBook()
}

/**
 * Gestionnaire d'événement au clic sur le bouton d'édition d'un contact
 */
function onClickEditContact()
{
    /*
     * this = objet DOM qui a déclenché l'évènement,
     *        il s'agit donc de l'hyperlien généré dans onClickShowContactDetails()
     *
     * On initialise jQuery avec la variable this pour obtenir un objet jQuery
     * représentant l'hyperlien qui a donc déclenché l'évènement.
     *
     * La méthode data() de jQuery permet de lire/écrire les attributs HTML data-xxx
     */
    $('#firstName').val(contact.firstName);
    $('#lastName').val(contact.lastName);
    $('#phone').val(contact.phone);
     
     // Sélection de la bonne <option> HTML de la liste déroulante.
      switch(contact.Title)
    {
        case 'Monsieur':
            $('#title').val('1')
            break;

        case 'Madame':
            $('#title').val('2')
            break;

        case 'Mademoiselle':
            $('#title').val('3')
            break;
    }  
    $('#contact-details').hide();
    // Basculement du formulaire en mode édition puis affichage.
    $('#contact-form').data('mode','edit').fadeIn('slow') //slow effet lent
     
}

/**
 * Gestionnaire d'événement au clic sur le bouton d'enregistrement d'un contact
 */
function onClickSaveContact()
{
    let index;
    // Création d'un objet contact avec les données du formulaire.
    const contact = createContact
    (
        $('select[name=title]').val(),
        $('input[name=firstName]').val(),
        $('input[name=lastName]').val(),
        $('input[name=phone]').val()
    );
    
    const addressBook = loadAddressBook();
    //Si c'est En mode "Ajout"
    if($('#contact-form').data('mode') == 'add') {    
        // On ajoute simplement le contact au carnet d'adresses
        addressBook.push(contact);
    // En mode "Edition"... else
    } else {   
        // On récupère l'indice du contact à modifier à partir de l'attribut data "index" du lien "Editer le contact"
        index = $('#contact-details a').data("index");
        // Mise à jour du contact correspndant à l'indice récupéré
        addressBook[index] = contact;
    }    
    // Sauvegarde du carnet d'adresses dans le Local Storage
    saveAddressBook(addressBook);
    // Mise à jour de l'affichage des contacts
    $('#contact-form').fadeOut('slow');
    $('#contact-details').hide();
    refreshAddressBook();
}


/**
 * Gestionnaire d'événement au clic sur un contact
 */
 
 
function onClickShowContactDetails()
{
    /*
     * this = objet DOM qui a déclenché l'évènement,
     *        il s'agit donc de l'un des hyperliens généré dans refreshAddressBook()
     *
     * On initialise jQuery avec la variable this pour obtenir un objet jQuery
     * représentant l'hyperlien qui a donc déclenché l'évènement.
     *
     * La méthode data() de jQuery permet de lire/écrire les attributs HTML data-xxx
     */
     const index = $(this).data('index');
    // Chargement du carnet d'adresses puis récupération du contact sur lequel on a cliqué.
    const addressBook = loadAddressBook();
    const contact     = addressBook[index];
    
    /*
     * Affichage des données du contact, enregistrement du numéro (index) du contact dans
     * l'attribut HTML data-index de l'hyperlien "Editer ce contact"
     */
    $('#contact-details dt').text(contact.title + ' ' + contact.firstName + ' ' + contact.lastName);
    $('#contact-details dd').text('Tel : ' + contact.phone );
    $('#contact-details a').data('index',index);
     
     // Mise à jour de l'affichage
    $('#contact-form').fadeOut(0);
    $('#contact-details').show();
}