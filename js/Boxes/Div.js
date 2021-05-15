// ? JuanCruzAGB repository
import Class from "../../JuanCruzAGB/js/Class.js";

/** @var {object} defaultProps Default properties. */
let defaultProps = {
    id: 'div-1',
    classes: [],
};

/**
 * * Div creates an excellent <div>.
 * @export
 * @class Div
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Class
 */
export class Div extends Class {
    /**
     * * Creates an instance of Div.
     * @param {object} [props] Div properties:
     * @param {string} [props.id='div-1'] Div primary key.
     * @param {string[]} [props.classes] Div class names.
     * @param {HTMLElement} [innerHTML=false] Div inner HTML Element.
     * @memberof Div
     */
    constructor(props = {
        id: 'div-1',
        classes: [],
    }, innerHTML = false){
        super({ ...defaultProps, ...props });
        this.createHTML(innerHTML);
    }

    /**
     * * Creates the <div> HTML Element.
     * @param {HTMLElement} [innerHTML=false] Div inner HTML Element.
     * @memberof Div
     */
    createHTML(innerHTML = false){
        this.setHTML(document.createElement('div'));
        if (innerHTML) {
            this.html.appendChild(innerHTML);
        }
        for (const className of this.getClassesProperty()) {
            this.html.classList.add(className);
        }
    }

    /**
     * * Append an HTML Element.
     * @param {HTMLElement} html New child.
     * @memberof Div
     */
    appendChild(html){
        this.html.appendChild(html);
    }

    /**
     * * Insert an HTML Element before another.
     * @param {HTMLElement} newHTML New child.
     * @param {HTMLElement} oldHTML New child.
     * @memberof Div
     */
    insertBefore(newHTML, oldHTML){
        this.html.insertBefore(newHTML, oldHTML);
    }
}