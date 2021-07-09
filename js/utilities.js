'use strict';

/*******************************************************************************************/
/********************************** FONCTIONS UTILITAIRES **********************************/
/*******************************************************************************************/
/**
 * Chargement de données du Local Storage au format JSON
 * @param name - Clé du Local Storage associée aux données à charger
 * @returns {any} - Les données récupérées
 */
function loadDataFromDomStorage(name)
{
    const jsonData = window.localStorage.getItem(name);

    /*
     * Donnée simple (chaîne) -> JSON parse (= désérialisation) -> Donnée complexe
     *
     * Voir ci-dessous pour plus d'explications sur le pourquoi du JSON.
     */
    return JSON.parse(jsonData);
}

/**
 * Enregistrement de données dans le Local Storage au format JSON
 * @param name - Clé du Local Storage associée aux données à enregistrer
 * @param data - Les données à enregistrer
 */
function saveDataToDomStorage(name, data)
{
    /*
     * Le DOM storage ne permet pas de stocker des données complexes (objet, tableau...).
     * On doit donc d'aborder sérialiser nos données dans un format simple, le JSON.
     *
     * On obtient une chaîne représentant l'objet complexe, et c'est cette chaîne que
     * l'on stocke dans le DOM storage.
     *
     * Donnée complexe -> JSON stringify (= sérialisation) -> Donnée simple (chaîne)
     */
    const jsonData = JSON.stringify(data);

    window.localStorage.setItem(name, jsonData);
}