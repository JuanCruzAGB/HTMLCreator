/**
 * * Button creates an excellet <button>.
 * @export
 * @class Button
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 */
export class Button{
    /**
     * * Creates an instance of Button.
     * @param {Object} [properties] Button properties:
     * @param {String} [properties.id] Button ID.
     * @param {String} [properties.title] Button title.
     * @param {String[]} [properties.classes] Button class names.
     * @param {Object} [states] Button states:
     * @param {Boolean} [states.preventDefault] Button click event prevent default.
     * @param {Boolean} [states.disabled] Button disabled status.
     * @param {Object} [callback] Button click callback.
     * @param {Function} [callback.function] Button click callback function.
     * @param {Object} [callback.params] Button click callback params.
     * @param {HTMLElement} [innerHTML] Button inner HTML Element.
     * @memberof Button
     */
    constructor(properties = {
        id: 'button-1',
        title: false,
        classes: [],
    }, states = {
        preventDefault: false,
        disabled: false,
    }, callback = {
        function: function(){ /* console.log('clicked') */ },
        params: {
            //
        },
    }, innerHTML = false){
        this.setProperties(properties);
        this.setStates(states);
        this.setCallback(callback);
        this.createHTML(innerHTML);
    }

    /**
     * * Set the Button properties.
     * @param {Object} [properties] Button properties:
     * @param {String} [properties.id] Button ID.
     * @param {String} [properties.title] Button title.
     * @param {String[]} [properties.classes] Button class names.
     * @memberof Button
     */
    setProperties(properties = {
        id: 'button-1',
        title: false,
        classes: [],
    }){
        this.properties = {};
        this.setIDProperty(properties);
        this.setTitleProperty(properties);
        this.setClassesProperty(properties);
    }

    /**
     * * Returns the Button properties or an specific property.
     * @param {String} [name] Property name.
     * @returns {Object|*}
     * @memberof Button
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
     * @memberof Button
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
     * @memberof Button
     */
    changeProperty(name = '', value = ''){
        if (this.hasProperty(name)) {
            this.properties[name] = value;
        }
        switch (name) {
            case 'title':
                if (this.hasProperty('title')) {
                    this.html.title = this.getProperties('title');
                }
                break;
        }
    }

    /**
     * * Set the Button ID.
     * @param {Object} [properties] Button properties:
     * @param {String} [properties.id] Button ID.
     * @memberof Button
     */
    setIDProperty(properties = {
        id: 'button-1',
    }){
        if (properties.hasOwnProperty('id')) {
            this.properties.id = properties.id;
        } else {
            this.properties.id = 'button-1';
        }
    }

    /**
     * * Returns the Button ID.
     * @returns {String}
     * @memberof Button
     */
    getIDProperty(){
        return this.properties.id;
    }

    /**
     * * Set the Button title.
     * @param {Object} [properties] Button properties:
     * @param {String} [properties.title] Button title.
     * @memberof Button
     */
    setTitleProperty(properties = {
        title: false,
    }){
        if (properties.hasOwnProperty('title')) {
            this.properties.title = properties.title;
        }
    }

    /**
     * * Returns the Button title.
     * @returns {String}
     * @memberof Button
     */
    getTitleProperty(){
        return this.properties.title;
    }

    /**
     * * Set the Button class names.
     * @param {Object} [properties] Button properties:
     * @param {String[]} [properties.classes] Button class names.
     * @memberof Button
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
     * * Returns the Button class names.
     * @returns {Array}
     * @memberof Button
     */
    getClassesProperty(){
        return this.properties.classes;
    }

    /**
     * * Set the Button states.
     * @param {Object} [states] Button states:
     * @param {Boolean} [states.preventDefault] Button click event prevent default.
     * @param {Boolean} [states.disabled] Button disabled status.
     * @memberof Button
     */
    setStates(states = {
        preventDefault: false,
        disabled: false,
    }){
        this.states = {};
        this.setPreventDefaultStatus(states);
        this.setDisabledStatus(states);
    }

    /**
     * * Returns the Button states or an specific states.
     * @param {String} [property] States name.
     * @returns {Object|*}
     * @memberof Button
     */
    getStates(property = ''){
        if (property && property != '') {
            return this.states[property];
        } else {
            return this.states;
        }
    }

    /**
     * * Check if there is a status.
     * @param {String} name Status name.
     * @returns {Boolean}
     * @memberof Button
     */
    hasStates(name = ''){
        if (this.states.hasOwnProperty(name)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * * Change a status value.
     * @param {String} name Status name.
     * @param {*} value Status value.
     * @memberof Button
     */
    changeStatus(name = '', value = ''){
        if (this.hasStates(name)) {
            this.states[name] = value;
        }
        switch (name) {
            case 'disabled':
                this.getHTML().disabled = this.getStates('disabled');
                break;
        }
    }

    /**
     * * Set the Button click prevent default status.
     * @param {Object} [states] Button states:
     * @param {Boolean} [states.preventDefault] Button click event prevent default.
     * @memberof Button
     */
    setPreventDefaultStatus(states = {
        preventDefault: false,
    }){
        if (states.hasOwnProperty('preventDefault')) {
            this.states.preventDefault = states.preventDefault;
        } else {
            this.states.preventDefault = false;
        }
    }

    /**
     * * Returns the Button click prevent default status.
     * @returns {Boolean}
     * @memberof Button
     */
    getPreventDefaultStatus(){
        return this.states.preventDefault;
    }

    /**
     * * Set the Button disabled status.
     * @param {Object} [states] Button states:
     * @param {Boolean} [states.disabled] Button disabled status.
     * @memberof Button
     */
    setDisabledStatus(states = {
        disabled: false,
    }){
        if (states.hasOwnProperty('disabled')) {
            this.states.disabled = states.disabled;
        } else {
            this.states.disabled = false;
        }
    }

    /**
     * * Returns the Button disabled status.
     * @returns {Boolean}
     * @memberof Button
     */
    getDisabledStatus(){
        return this.states.disabled;
    }

    /**
     * * Set the Button click callback.
     * @param {Object} [callback] Button click callback.
     * @param {Function} [callback.function] Button click callback function.
     * @param {Object} [callback.params] Button click callback params.
     * @memberof Button
     */
    setCallback(callback = {
        function: function(){ /* console.log('clicked') */ },
        params: {
            //
        },
    }){
        this.callback = {
            function: (callback.hasOwnProperty('function')) ? callback.function : function(){ /* console.log('clicked') */ },
            params: (callback.hasOwnProperty('params')) ? callback.params : {},
        };
    }

    /**
     * * Returns the Button click callback.
     * @returns {Object}
     * @memberof Button
     */
    getCallback(){
        return this.callback;
    }

    /**
     * * Returns the <button> HTML Element.
     * @returns {HTMLElement}
     * @memberof Button
     */
    getHTML(){
        return this.html;
    }

    /**
     * * Creates the <button> HTML Element.
     * @param {HTMLElement} [innerHTML] Button inner HTML Element.
     * @memberof Button
     */
    createHTML(innerHTML = false){
        let instance = this;
        this.html = document.createElement('button');
        this.html.id = this.getProperties('id');
        if (this.getStates('disabled')) {
            this.html.disabled = true;
        }
        if (this.hasProperty('title')) {
            this.html.title = this.getProperties('title');
        }
        for (const className of this.getProperties('classes')) {
            this.html.classList.add(className);
        }
        if (innerHTML) {
            this.html.appendChild(innerHTML);
        }
        this.html.addEventListener('click', function(e){
            if (instance.getStates('preventDefault')) {
                e.preventDefault();
            }
            let params = instance.getCallback().params;
            params.button = instance;
            instance.getCallback().function(params);
        });
    }

    /**
     * * Append an HTML Element.
     * @param {HTMLElement} html New child.
     * @memberof Button
     */
    appendChild(html){
        this.html.appendChild(html);
    }

    /**
     * * Insert an HTML Element before another.
     * @param {HTMLElement} newHTML New child.
     * @param {HTMLElement} oldHTML New child.
     * @memberof Button
     */
    insertBefore(newHTML, oldHTML){
        this.html.insertBefore(newHTML, oldHTML);
    }
}