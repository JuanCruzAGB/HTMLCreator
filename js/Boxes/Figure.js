// ? HTMLCreatorJS repository
import { Image } from "../Visuals/Image.js";

/**
 * * Figure creates an excellent <figure>.
 * @export
 * @class Figure
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 */
export class Figure{
    /**
     * * Creates an instance of Figure.
     * @param {Object} [properties] Figure properties:
     * @param {String} [properties.id] Figure ID.
     * @param {String[]} [properties.classes] Figure class names.
     * @param {Object} [image] Image properties.
     * @memberof Figure
     */
    constructor(properties = {
        id: 'figure-1',
        classes: [],
    }, image = {}){
        this.setProperties(properties);
        this.setImage(image);
        this.createHTML();
    }

    /**
     * * Set the Figure properties.
     * @param {Object} [properties] Figure properties:
     * @param {String} [properties.id] Figure ID.
     * @param {String[]} [properties.classes] Figure class names.
     * @memberof Figure
     */
    setProperties(properties = {
        id: 'figure-1',
        classes: [],
    }){
        this.properties = {};
        this.setIDProperty(properties);
        this.setClassesProperty(properties);
    }

    /**
     * * Returns the Figure properties or an specific property.
     * @param {String} [name] Property name.
     * @returns {Object|*}
     * @memberof Figure
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
     * @memberof Figure
     */
    hasProperty(name = ''){
        if (this.properties.hasOwnProperty(name)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * * Set the Figure ID.
     * @param {Object} [properties] Figure properties:
     * @param {String} [properties.id] Figure ID.
     * @memberof Figure
     */
    setIDProperty(properties = {
        id: 'figure-1',
    }){
        if (properties.hasOwnProperty('id')) {
            this.properties.id = properties.id;
        } else {
            this.properties.id = 'figure-1';
        }
    }

    /**
     * * Returns the Figure ID.
     * @returns {String}
     * @memberof Figure
     */
    getIDProperty(){
        return this.properties.id;
    }

    /**
     * * Set the Figure class names.
     * @param {Object} [properties] Figure properties:
     * @param {String} [properties.classes] Figure class names.
     * @memberof Figure
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
     * * Returns the Figure class names.
     * @returns {Array}
     * @memberof Figure
     */
    getClassesProperty(){
        return this.properties.classes;
    }

    /**
     * * Set the Figure Image.
     * @param {Object} [image] Image properties.
     * @memberof Figure
     */
    setImage(image = {}){
        this.image = new Image(((image.hasOwnProperty('properties')) ? image.properties : {}));
    }

    /**
     * * Returns the Figure Image.
     * @returns {Image}
     * @memberof Figure
     */
    getImage(){
        return this.image;
    }

    /**
     * * Returns the <figure> HTML Element.
     * @returns {HTMLElement}
     * @memberof Figure
     */
    getHTML(){
        return this.html;
    }

    /**
     * * Creates the <figure> HTML Element.
     * @memberof Figure
     */
    createHTML(){
        this.html = document.createElement('figure');
        if (this.getImage()) {
            this.html.appendChild(this.getImage().getHTML());
        }
        for (const className of this.getClassesProperty()) {
            this.html.classList.add(className);
        }
    }

    /**
     * * Append an HTML Element.
     * @param {HTMLElement} html New child.
     * @memberof Figure
     */
    appendChild(html){
        this.html.appendChild(html);
    }

    /**
     * * Insert an HTML Element before another.
     * @param {HTMLElement} newHTML New child.
     * @param {HTMLElement} oldHTML New child.
     * @memberof Figure
     */
    insertBefore(newHTML, oldHTML){
        this.html.insertBefore(newHTML, oldHTML);
    }
}