/**
 * * Span creates an excellent <span>.
 * @export
 * @class Span
 */
export class Span{
    /**
     * * Creates an instance of Span.
     * @param {Object} [properties] Span properties:
     * @param {String} [properties.id] Span ID.
     * @param {String[]} [properties.classes] Span class names.
     * @param {String} [innerHTML] Span inner HTML.
     * @memberof Span
     */
    constructor(properties = {
        id: 'span-1',
        classes: [],
    }, innerHTML = 'Hi i\'m an span!'){
        this.setProperties(properties);
        this.createHTML(innerHTML);
    }

    /**
     * * Set the Span properties.
     * @param {Object} [properties] Span properties:
     * @param {String} [properties.id] Span ID.
     * @param {String[]} [properties.classes] Span class names.
     * @memberof Span
     */
    setProperties(properties = {
        id: 'span-1',
        classes: [],
    }){
        this.properties = {};
        this.setIDProperty(properties);
        this.setClassesProperty(properties);
    }

    /**
     * * Returns the Span properties or an specific property.
     * @param {String} [property] Property name.
     * @returns {Object|*}
     * @memberof Span
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
     * @memberof Span
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
     * @memberof Span
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
     * * Set the Span ID.
     * @param {Object} [properties] Span properties:
     * @param {String} [properties.id] Span ID.
     * @memberof Span
     */
    setIDProperty(properties = {
        id: 'span-1',
    }){
        if (properties.hasOwnProperty('id')) {
            this.properties.id = properties.id;
        } else {
            this.properties.id = 'span-1';
        }
    }

    /**
     * * Returns the Span ID.
     * @returns {String}
     * @memberof Span
     */
    getIDProperty(){
        return this.properties.id;
    }

    /**
     * * Set the Span class names.
     * @param {Object} [properties] Span properties:
     * @param {String[]} properties.classes Span class names.
     * @memberof Span
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
     * * Returns the Span class names.
     * @returns {Array}
     * @memberof Span
     */
    getClassesProperty(){
        return this.properties.classes;
    }

    /**
     * * Returns the <span> HTML Element.
     * @returns {HTMLElement}
     * @memberof Span
     */
    getHTML(){
        return this.html;
    }

    /**
     * * Creates the <span> HTML Element.
     * @param {String} [innerHTML] Span inner HTML.
     * @memberof Span
     */
    createHTML(innerHTML = 'Hi i\'m an span!'){
        this.html = document.createElement('span');
        this.html.id = this.getIDProperty();
        for (const className of this.getClassesProperty()) {
            this.html.classList.add(className);
        }
        if (innerHTML) {
            this.html.innerHTML = innerHTML;
        }
    }
}