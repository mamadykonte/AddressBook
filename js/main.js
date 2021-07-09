'use strict';

/*******************************************************************************************/
/************************************* CODE PRINCIPAL **************************************/
/*******************************************************************************************/
/*
 * Installation d'un gestionnaire d'évènement déclenché quand l'arbre DOM sera
 * totalement construit par le navigateur.
 *
 * Lorsque l'on donne en argument une fonction à jQuery, elle est utilisée comme
 * gestionnaire d'évènements pour l'évènement JavaScript natif DOMContentLoaded.
 */
$(function()
{
    // Installation des gestionnaires d'évènements.
    $('#add-contact').on('click', onClickAddContact);
    $('#clear-address-book').on('click', onClickClearAddressBook);
    $('#save-contact').on('click', onClickSaveContact);
    $('#contact-details a').on('click', onClickEditContact);

    /*
     * Mise à jour d'un contact
     *
     * Installation d'un gestionnaire d'évènement "dans le futur", quand il y aura
     * des hyperliens ajoutés dans l'arbre DOM (liste des contacts affichés au fur et à mesure).
     * Ces liens n'existent pas forcément au chargement de la page, donc on délègue la détection à document
     *
     * https://javascript.developpez.com/actu/85848/Comprendre-la-delegation-d-evenement-en-JavaScript/
     */
    $(document).on('click', '#address-book a', onClickShowContactDetails);

    // Rafraîchissement de la liste des contacts sur la page HTML
    refreshAddressBook();
});