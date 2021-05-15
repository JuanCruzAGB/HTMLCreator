/**
 * * Tr creates an excellent <tr>.
 * @export
 * @class Tr
 */
export class Tr{
    /**
     * * Creates an instance of Tr.
     * @param {Object} [properties] Tr properties:
     * @param {String} [properties.id] Tr ID.
     * @param {String[]} [properties.classes] Tr class names.
     * @memberof Tr
     */
    constructor(properties = {
        id: 'tr-1',
        classes: [],
    }){
        this.setProperties(properties);
        this.createHTML();
    }

    /**
     * * Set the Tr properties.
     * @param {Object} [properties] Tr properties:
     * @param {String} [properties.id] Tr ID.
     * @param {String[]} [properties.classes] Tr class names.
     * @memberof Tr
     */
    setProperties(properties = {
        id: 'tr-1',
        classes: [],
    }){
        this.properties = {};
        this.setIDProperty(properties);
        this.setClassesProperty(properties);
    }

    /**
     * * Returns the Tr properties or an specific property.
     * @returns {Object|*}
     * @memberof Tr
     */
    getProperties(property = ''){
        if (property && property != '') {
            return this.properties[property];
        } else {
            return this.properties;
        }
    }

    /**
     * * Check if there is a property.
     * @param {String} property Property name.
     * @returns {Boolean}
     * @memberof Tr
     */
    hasProperty(property = ''){
        if (this.properties.hasOwnProperty(property)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * * Change a property value.
     * @param {String} property Property name.
     * @param {*} value Property value.
     * @memberof Tr
     */
    changeProperty(property = '', value = ''){
        if (this.hasProperty(property)) {
            this.properties[property] = value;
        }
        switch (property) {
            default:
                break;
        }
    }

    /**
     * * Set the Tr ID.
     * @param {Object} [properties] Tr properties:
     * @param {String} [properties.id] Tr ID.
     * @memberof Tr
     */
    setIDProperty(properties = {
        id: 'tr-1',
    }){
        if (properties.hasOwnProperty('id')) {
            this.properties.id = properties.id;
        } else {
            this.properties.id = 'tr-1';
        }
    }

    /**
     * * Returns the Tr ID.
     * @returns {String} The Tr ID.
     * @memberof Tr
     */
    getIDProperty(){
        return this.properties.id;
    }

    /**
     * * Set the Tr class names.
     * @param {Object} [properties] Tr properties:
     * @param {String[]} [properties.classes] Tr class names.
     * @memberof Tr
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
     * * Returns the Tr class names.
     * @returns {String[]}
     * @memberof Tr
     */
    getClassesProperty(){
        return this.properties.classes;
    }

    /**
     * * Returns the <tr>.
     * @returns {HTMLElement}
     * @memberof Tr
     */
    getHTML(){
        return this.html;
    }

    /**
     * * Creates a <tr>.
     * @memberof Tr
     */
    createHTML(){
        this.html = document.createElement('tr');
        this.html.id = this.getProperties('id');
        for (const className of this.getProperties('classes')) {
            this.html.classList.add(className);
        }
    }

    /**
     * * Append an HTML Element.
     * @param {HTMLElement} html New child.
     * @memberof Tr
     */
    appendChild(html){
        this.html.appendChild(html);
    }
}