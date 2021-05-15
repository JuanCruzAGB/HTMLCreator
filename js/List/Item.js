/**
 * * Item creates an excellent <li>.
 * @export
 * @class Item
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 */
export class Item{
    /**
     * * Creates an instance of Item.
     * @param {Object} [properties] Item properties:
     * @param {String} [properties.id] Item ID.
     * @param {String[]} [properties.classes] Item class names.
     * @param {HTMLElement} [innerHTML] Button inner HTML Element.
     * @memberof Item
     */
    constructor(properties = {
        id: 'item-1',
        classes: [],
    }, innerHTML = false){
        this.setProperties(properties);
        this.createHTML(innerHTML);
    }

    /**
     * * Set the Item properties.
     * @param {Object} [properties] Item properties:
     * @param {String} [properties.id] Item ID.
     * @param {String} [properties.type] Item type.
     * @param {String[]} [properties.classes] Item class names.
     * @memberof Item
     */
    setProperties(properties = {
        id: 'item-1',
        classes: [],
    }){
        this.properties = {};
        this.setIDProperty(properties);
        this.setClassesProperty(properties);
    }

    /**
     * * Returns the Item properties or an specific property.
     * @param {String} [name] Property name.
     * @returns {Object|*}
     * @memberof Item
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
     * @memberof Item
     */
    hasProperty(name = ''){
        if (this.properties.hasOwnProperty(name)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * * Change a property value.
     * @param {String} name Property name.
     * @param {*} value Property value.
     * @memberof Item
     */
    changeProperty(name = '', value = ''){
        if (this.hasProperty(name)) {
            this.properties[name] = value;
        }
        switch (name) {
            default:
                break;
        }
    }

    /**
     * * Set the Item ID.
     * @param {Object} [properties] Item properties:
     * @param {String} [properties.id] Item ID.
     * @memberof Item
     */
    setIDProperty(properties = {
        id: 'item-1',
    }){
        if (properties.hasOwnProperty('id')) {
            this.properties.id = properties.id;
        } else {
            this.properties.id = 'item-1';
        }
    }

    /**
     * * Returns the Item ID.
     * @returns {String}
     * @memberof Item
     */
    getIDProperty(){
        return this.properties.id;
    }

    /**
     * * Set the Item class names.
     * @param {Object} [properties] Item properties:
     * @param {String[]} [properties.classes] Item class names.
     * @memberof Item
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
     * * Returns the Item class names.
     * @returns {Array}
     * @memberof Item
     */
    getClassesProperty(){
        return this.properties.classes;
    }

    /**
     * * Returns the <li> HTML Element.
     * @returns {HTMLElement}
     * @memberof Item
     */
    getHTML(){
        return this.html;
    }

    /**
     * * Creates the <li> HTML Element.
     * @param {HTMLElement} [innerHTML] Button inner HTML Element.
     * @memberof Item
     */
    createHTML(innerHTML = false){
        this.html = document.createElement('li');
        for (const className of this.getProperties('classes')) {
            this.html.classList.add(className);
        }
        if (innerHTML) {
            this.html.appendChild(innerHTML);
        }
    }

    /**
     * * Append an HTML Element.
     * @param {HTMLElement} html New child.
     * @memberof Item
     */
    appendChild(html){
        this.html.appendChild(html);
    }

    /**
     * * Insert an HTML Element before another.
     * @param {HTMLElement} newHTML New child.
     * @param {HTMLElement} oldHTML New child.
     * @memberof Item
     */
    insertBefore(newHTML, oldHTML){
        this.html.insertBefore(newHTML, oldHTML);
    }
}