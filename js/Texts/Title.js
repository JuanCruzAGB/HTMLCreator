/**
 * * Title creates an excellent <h1>, <h2>...
 * @export
 * @class Title
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 */
export class Title{
    /**
     * * Creates an instance of Title.
     * @param {Object} [properties] Title properties:
     * @param {String} [properties.id] Title ID.
     * @param {String} [properties.type] Title type.
     * @param {String[]} [properties.classes] Title class names.
     * @param {String} [innerHTML] Title inner HTML.
     * @memberof Title
     */
    constructor(properties = {
        id: 'title-1',
        type: 'h1',
        classes: [],
    }, innerHTML = ''){
        this.setProperties(properties);
        this.createHTML(innerHTML);
    }

    /**
     * * Set the Title properties.
     * @param {Object} [properties] Title properties:
     * @param {String} [properties.id] Title ID.
     * @param {String} [properties.type] Title type.
     * @param {String[]} [properties.classes] Title class names.
     * @memberof Title
     */
    setProperties(properties = {
        id: 'title-1',
        type: 'h1',
        classes: [],
    }){
        this.properties = {};
        this.setIDProperty(properties);
        this.setTypeProperty(properties);
        this.setClassesProperty(properties);
    }

    /**
     * * Returns the Title properties or an specific property.
     * @param {String} [name] Property name.
     * @returns {Object|*}
     * @memberof Title
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
     * @memberof Title
     */
    hasProperty(name = ''){
        if (this.properties.hasOwnProperty(name)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * * Set the Title ID.
     * @param {Object} [properties] Title properties:
     * @param {String} [properties.id] Title ID.
     * @memberof Title
     */
    setIDProperty(properties = {
        id: 'title-1',
    }){
        if (properties.hasOwnProperty('id')) {
            this.properties.id = properties.id;
        } else {
            this.properties.id = 'title-1';
        }
    }

    /**
     * * Returns the Title ID.
     * @returns {String}
     * @memberof Title
     */
    getIDProperty(){
        return this.properties.id;
    }

    /**
     * * Set the Title type.
     * @param {Object} [properties] Title properties:
     * @param {String} [properties.type] Title type.
     * @memberof Title
     */
    setTypeProperty(properties = {
        type: 'h1',
    }){
        if (properties.hasOwnProperty('type')) {
            this.properties.type = properties.type;
        } else {
            this.properties.type = 'h1';
        }
    }

    /**
     * * Returns the Title type.
     * @returns {String}
     * @memberof Title
     */
    getTypeProperty(){
        return this.properties.type;
    }

    /**
     * * Set the Title class names.
     * @param {Object} [properties] Title properties:
     * @param {String} [properties.classes] Title class names.
     * @memberof Title
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
     * * Returns the Title class names.
     * @returns {Array}
     * @memberof Title
     */
    getClassesProperty(){
        return this.properties.classes;
    }

    /**
     * * Returns the <header> HTML Element.
     * @returns {HTMLElement}
     * @memberof Title
     */
    getHTML(){
        return this.html;
    }

    /**
     * * Creates the <header> HTML Element.
     * @param {String} [innerHTML] Title inner HTML.
     * @memberof Title
     */
    createHTML(innerHTML = ''){
        this.html = document.createElement(this.getProperties('type'));
        if (innerHTML) {
            this.html.innerHTML = innerHTML;
        }
        for (const className of this.getClassesProperty()) {
            this.html.classList.add(className);
        }
    }

    /**
     * * Append an HTML Element.
     * @param {HTMLElement} html New child.
     * @memberof Title
     */
    appendChild(html){
        this.html.appendChild(html);
    }

    /**
     * * Insert an HTML Element before another.
     * @param {HTMLElement} newHTML New child.
     * @param {HTMLElement} oldHTML New child.
     * @memberof Title
     */
    insertBefore(newHTML, oldHTML){
        this.html.insertBefore(newHTML, oldHTML);
    }
}