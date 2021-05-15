/**
 * * Link creates an excellet <a>.
 * @export
 * @class Link
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 */
export class Link{
    /**
     * * Creates an instance of Link.
     * @param {Object} [properties] Link properties:
     * @param {String} [properties.id] Link ID.
     * @param {String} [properties.href] Link href.
     * @param {String} [properties.title] Link title.
     * @param {String[]} [properties.classes] Link class names.
     * @param {Object} [states] Link states:
     * @param {Boolean} [states.preventDefault] Link click event prevent default.
     * @param {Object} [callback] Link click callback.
     * @param {Function} [callback.function] Link click callback function.
     * @param {Object} [callback.params] Link click callback params.
     * @param {HTMLElement} [innerHTML] Link inner HTML Element.
     * @memberof Link
     */
    constructor(properties = {
        id: 'link-1',
        href: '#',
        title: false,
        classes: [],
    }, states = {
        preventDefault: false,
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
     * * Set the Link properties.
     * @param {Object} [properties] Link properties:
     * @param {String} [properties.id] Link ID.
     * @param {String} [properties.href] Link href.
     * @param {String} [properties.title] Link title.
     * @param {Object} [properties.innerHTML] Link inner HTML:
     * @param {String[]} [properties.innerHTML.icon] Link Inner HTML icon.
     * @param {String} [properties.innerHTML.text] Link Inner HTML text.
     * @param {String[]} [properties.classes] Link class names.
     * @memberof Link
     */
    setProperties(properties = {
        id: 'link-1',
        href: '#',
        title: false,
        classes: [],
    }){
        this.properties = {};
        this.setIDProperty(properties);
        this.setHrefProperty(properties);
        this.setTitleProperty(properties);
        this.setClassesProperty(properties);
    }

    /**
     * * Returns the Link properties or an specific property.
     * @param {String} [name] Property name.
     * @returns {Object|*}
     * @memberof Link
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
     * @memberof Link
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
     * @memberof Link
     */
    changeProperty(name = '', value = ''){
        if (this.hasProperty(name)) {
            this.properties[name] = value;
        }
        switch (name) {
            case 'href':
                this.html.href = this.getProperties('href');
                break;
            case 'title':
                if (this.hasProperty('title')) {
                    this.html.title = this.getProperties('title');
                }
                break;
        }
    }

    /**
     * * Set the Link ID.
     * @param {Object} [properties] Link properties:
     * @param {String} [properties.id] Link ID.
     * @memberof Link
     */
    setIDProperty(properties = {
        id: 'link-1',
    }){
        if (properties.hasOwnProperty('id')) {
            this.properties.id = properties.id;
        } else {
            this.properties.id = 'link-1';
        }
    }

    /**
     * * Returns the Link ID.
     * @returns {String}
     * @memberof Link
     */
    getIDProperty(){
        return this.properties.id;
    }

    /**
     * * Set the Link href.
     * @param {Object} [properties] Link properties:
     * @param {String} [properties.href] Link href.
     * @memberof Link
     */
    setHrefProperty(properties = {
        href: '#',
    }){
        if (properties.hasOwnProperty('href')) {
            this.properties.href = properties.href;
        } else {
            this.properties.href = '#';
        }
    }

    /**
     * * Returns the Link href.
     * @returns {String}
     * @memberof Link
     */
    getHrefProperty(){
        return this.properties.href;
    }

    /**
     * * Set the Link title.
     * @param {Object} [properties] Link properties:
     * @param {String} [properties.title] Link title.
     * @memberof Link
     */
    setTitleProperty(properties = {
        title: false,
    }){
        if (properties.hasOwnProperty('title')) {
            this.properties.title = properties.title;
        }
    }

    /**
     * * Returns the Link title.
     * @returns {String}
     * @memberof Link
     */
    getTitleProperty(){
        return this.properties.title;
    }

    /**
     * * Set the Link class names.
     * @param {Object} [properties] Link properties:
     * @param {String[]} [properties.classes] Link class names.
     * @memberof Link
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
     * * Returns the Link class names.
     * @returns {Array}
     * @memberof Link
     */
    getClassesProperty(){
        return this.properties.classes;
    }

    /**
     * * Set the Link states.
     * @param {Object} [states] Link states:
     * @param {Boolean} [states.preventDefault] Link click event prevent default.
     * @memberof Link
     */
    setStates(states = {
        preventDefault: false,
    }){
        this.states = {};
        this.setPreventDefaultStatus(states);
    }

    /**
     * * Returns the Link states or an specific states.
     * @param {String} [property] States name.
     * @returns {Object|*}
     * @memberof Link
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
     * @memberof Link
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
     * @memberof TabMenu
     */
    changeStatus(name = '', value = ''){
        if (this.hasStates(name)) {
            this.states[name] = value;
        }
        switch (name) {
            default:
                break;
        }
    }

    /**
     * * Set the Link click prevent default status.
     * @param {Object} [states] Link states:
     * @param {Boolean} [states.preventDefault] Link click event prevent default.
     * @memberof Link
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
     * * Returns the Link click prevent default status.
     * @returns {Boolean}
     * @memberof Link
     */
    getPreventDefaultStatus(){
        return this.states.preventDefault;
    }

    /**
     * * Set the Link click callback.
     * @param {Object} [callback] Link click callback.
     * @param {Function} [callback.function] Link click callback function.
     * @param {Object} [callback.params] Link click callback params.
     * @memberof Link
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
     * * Returns the Link click callback.
     * @returns {Object}
     * @memberof Link
     */
    getCallback(){
        return this.callback;
    }

    /**
     * * Returns the <a> HTML Element.
     * @returns {HTMLElement}
     * @memberof Link
     */
    getHTML(){
        return this.html;
    }

    /**
     * * Creates the <a> HTML Element.
     * @param {HTMLElement} [innerHTML] Link inner HTML Element.
     * @memberof Link
     */
    createHTML(innerHTML = false){
        let instance = this;
        this.html = document.createElement('a');
        this.html.id = this.getProperties('id');
        this.html.href = this.getProperties('href');
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
            params.link = instance;
            instance.getCallback().function(params);
        });
    }

    /**
     * * Append an HTML Element.
     * @param {HTMLElement} html New child.
     * @memberof Link
     */
    appendChild(html){
        this.html.appendChild(html);
    }

    /**
     * * Insert an HTML Element before another.
     * @param {HTMLElement} newHTML New child.
     * @param {HTMLElement} oldHTML New child.
     * @memberof Link
     */
    insertBefore(newHTML, oldHTML){
        this.html.insertBefore(newHTML, oldHTML);
    }
}