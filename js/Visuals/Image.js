/**
 * * Image creates an excellent <img>.
 * @export
 * @class Image
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 */
export class Image{
    /**
     * * Creates an instance of Image.
     * @param {Object} [properties] Properties:
     * @param {String} [properties.id] Image ID.
     * @param {String} [properties.url] Image URL.
     * @param {String} [properties.name] Image name.
     * @param {String[]} [properties.classes] Image class names.
     * @memberof Image
     */
    constructor(properties = {
        id: 'img-1',
        url: '',
        name: 'Image genereted with HTMLCreatorJS',
        classes: [],
    }){
        this.setProperties(properties);
        this.createHTML();
    }

    /**
     * * Set the Properties.
     * @param {Object} [properties] Properties:
     * @param {String} [properties.id] Image ID.
     * @param {String} [properties.url] Image URL
     * @param {String} [properties.name] Image name.
     * @param {String[]} [properties.classes] Image class names.
     * @memberof Image
     */
    setProperties(properties = {
        id: 'img-1',
        url: '',
        name: 'Image genereted with HTMLCreatorJS',
        classes: [],
    }){
        this.properties = {};
        this.setIDProperty(properties);
        this.setUrlProperty(properties);
        this.setNameProperty(properties);
        this.setClassesProperty(properties);
    }

    /**
     * * Returns the Properties or an specific property.
     * @param {String} [property] Property name.
     * @returns {Object|*}
     * @memberof Image
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
     * @memberof Image
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
     * @memberof Image
     */
    changeProperty(property = '', value = ''){
        if (this.hasProperty(property)) {
            this.properties[property] = value;
        }
        switch (property) {
            case 'url':
                this.getHTML().src = this.getProperties('url');
                break;
            case 'name':
                this.getHTML().alt = this.getProperties('name');
                break;
        }
    }

    /**
     * * Set the Image ID.
     * @param {Object} [properties] Properties:
     * @param {String} [properties.id] Image ID.
     * @memberof Image
     */
    setIDProperty(properties = {
        id: 'img-1',
    }){
        if (properties.hasOwnProperty('id')) {
            this.properties.id = properties.id;
        } else {
            this.properties.id = 'img-1';
        }
    }

    /**
     * * Returns the Image ID.
     * @returns {String}
     * @memberof Image
     */
    getIDProperty(){
        return this.properties.id;
    }

    /**
     * * Set the Image URL.
     * @param {Object} [properties] Properties:
     * @param {String} [properties.url] Image URL.
     * @memberof Image
     */
    setUrlProperty(properties = {
        url: '',
    }){
        if (properties.hasOwnProperty('url')) {
            this.properties.url = properties.url;
        } else {
            this.properties.url = '';
        }
    }

    /**
     * * Returns the Image URL.
     * @returns {String}
     * @memberof Image
     */
    getUrlProperty(){
        return this.properties.url;
    }

    /**
     * * Set the Image name.
     * @param {Object} [properties] Properties:
     * @param {String} [properties.name] Image name.
     * @memberof Image
     */
    setNameProperty(properties = {
        name: 'Image genereted with HTMLCreatorJS',
    }){
        if (properties.hasOwnProperty('name')) {
            this.properties.name = properties.name;
        } else {
            this.properties.name = 'Image genereted with HTMLCreatorJS';
        }
    }

    /**
     * * Returns the Image name.
     * @returns {String}
     * @memberof Image
     */
    getNameProperty(){
        return this.properties.name;
    }

    /**
     * * Set the Image class names.
     * @param {Object} [properties] Properties:
     * @param {String} [properties.classes] Image class names.
     * @memberof Image
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
     * * Returns the Image class names.
     * @returns {Array}
     * @memberof Image
     */
    getClassesProperty(){
        return this.properties.classes;
    }

    /**
     * * Returns the <img> HTML Element.
     * @returns {HTMLElement}
     * @memberof Image
     */
    getHTML(){
        return this.html;
    }

    /**
     * * Creates the <img> HTML Element.
     * @memberof Image
     */
    createHTML(){
        this.html = document.createElement('img');
        this.html.id = this.getProperties('id');
        this.html.src = this.getProperties('url');
        this.html.alt = this.getProperties('name');
        for (const className of this.getProperties('classes')) {
            this.html.classList.add(className);
        }
    }
}