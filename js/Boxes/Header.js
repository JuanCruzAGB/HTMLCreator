// ? HTMLCreatorJS repository
import { Title } from "../Texts/Title.js";

/**
 * * Header creates an excellent <header>.
 * @export
 * @class Header
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 */
export class Header{
    /**
     * * Creates an instance of Header.
     * @param {Object} [properties] Header properties:
     * @param {String} [properties.id] Header ID.
     * @param {String[]} [properties.classes] Header class names.
     * @param {Object} [title] Title properties.
     * @memberof Header
     */
    constructor(properties = {
        id: 'header-1',
        classes: [],
    }, title = {}){
        this.setProperties(properties);
        this.setTitle(title);
        this.createHTML();
    }

    /**
     * * Set the Header properties.
     * @param {Object} [properties] Header properties:
     * @param {String} [properties.id] Header ID.
     * @param {String[]} [properties.classes] Header class names.
     * @memberof Header
     */
    setProperties(properties = {
        id: 'header-1',
        classes: [],
    }){
        this.properties = {};
        this.setIDProperty(properties);
        this.setClassesProperty(properties);
    }

    /**
     * * Returns the Header properties or an specific property.
     * @param {String} [name] Property name.
     * @returns {Object|*}
     * @memberof Header
     */
    getProperties(name = ''){
        if (name && name != '') {
            return this.properties[name];
        } else {
            return this.properties;
        }
    }

    /**
     * * Check if there is a property.
     * @param {String} name Property name.
     * @returns {Boolean}
     * @memberof Header
     */
    hasProperty(name = ''){
        if (this.properties.hasOwnProperty(name)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * * Set the Header ID.
     * @param {Object} [properties] Header properties:
     * @param {String} [properties.id] Header ID.
     * @memberof Header
     */
    setIDProperty(properties = {
        id: 'header-1',
    }){
        if (properties.hasOwnProperty('id')) {
            this.properties.id = properties.id;
        } else {
            this.properties.id = 'header-1';
        }
    }

    /**
     * * Returns the Header ID.
     * @returns {String}
     * @memberof Header
     */
    getIDProperty(){
        return this.properties.id;
    }

    /**
     * * Set the Header class names.
     * @param {Object} [properties] Header properties:
     * @param {String} [properties.classes] Header class names.
     * @memberof Header
     */
    setClassesProperty(properties = {
        classes: [],
    }){
        if (properties.hasOwnProperty('classes')) {
            this.properties.classes = properties.classes;
        } else {
            this.properties.classes = [];
        }
    }

    /**
     * * Returns the Header class names.
     * @returns {Array}
     * @memberof Header
     */
    getClassesProperty(){
        return this.properties.classes;
    }

    /**
     * * Set the Header Title.
     * @param {Object} [title] Title properties.
     * @memberof Header
     */
    setTitle(title = {}){
        this.title = new Title(((title.hasOwnProperty('properties')) ? title.properties : {}), ((title.hasOwnProperty('innerHTML')) ? title.innerHTML : undefined));
    }

    /**
     * * Returns the Header Title.
     * @returns {Title}
     * @memberof Header
     */
    getTitle(){
        return this.title;
    }

    /**
     * * Returns the <header> HTML Element.
     * @returns {HTMLElement}
     * @memberof Header
     */
    getHTML(){
        return this.html;
    }

    /**
     * * Creates the <header> HTML Element.
     * @memberof Header
     */
    createHTML(){
        this.html = document.createElement('header');
        if (this.getTitle()) {
            this.html.appendChild(this.getTitle().getHTML());
        }
        for (const className of this.getClassesProperty()) {
            this.html.classList.add(className);
        }
    }

    /**
     * * Append an HTML Element.
     * @param {HTMLElement} html New child.
     * @memberof Header
     */
    appendChild(html){
        this.html.appendChild(html);
    }

    /**
     * * Insert an HTML Element before another.
     * @param {HTMLElement} newHTML New child.
     * @param {HTMLElement} oldHTML New child.
     * @memberof Header
     */
    insertBefore(newHTML, oldHTML){
        this.html.insertBefore(newHTML, oldHTML);
    }
}