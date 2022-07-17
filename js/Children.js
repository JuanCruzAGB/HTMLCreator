// ? JuanCruzAGB repository
import Html from "@juancruzagb/htmlcreator";

/**
 * * Controls the Children methods.
 * @export
 * @class Methods
 * @author JuanCruzAGB <juan.cruz.armentia@gmail.com>
 */
export default class Methods {
    /**
     * @var {array} list
     * @memberof Children
     */
    list = []

    /**
     * * Append an Html Element.
     * @param {array|object|Html|HTMLElement} child
     * @param {Html|false} [nodeElement=false]
     * @throws {Error}
     * @returns
     * @memberof Children
     */
    append (child = false, parentNode = false) {
        if (parentNode) this.parentNode = parentNode;

        if (Array.isArray(child)) {
            for (const childNode of child) {
                this.append(childNode);
            }

            return;
        } else if (child instanceof HTMLElement) {
            this.parentNode.nodeElement.appendChild(child);
        } else if (child instanceof Html) {
            this.parentNode.nodeElement.appendChild(child.nodeElement);
        } else {
            if (!child.hasOwnProperty('props')) child.props = {};

            if (!child.props.hasOwnProperty('id')) child.props.id = `${ this.parentNode.props.id }-child-${ this.list.length + 1 }`;

            child = new Html(child);
            this.parentNode.nodeElement.appendChild(child.nodeElement);
        }

        this.list.push(child);
    }

    /**
     * * Check if there is a child.
     * @param {string} nodeName
     * @memberof Children
     */
    has (nodeName) {
        console.warn('Has child is not supported yet.', [ nodeName, ]);
    }

    /**
     * * Insert an Html Element before another.
     * @param {object|string|Html|HTMLElement} child
     * @param {number} [index=0]
     * @memberof Children
     */
    insert (child = false, index = 0) {
        console.warn('Insert child is not supported yet.', [ child, index, ]);
    }

    /**
     * * Remove an Html Element before another.
     * @param {object|string|Html|HTMLElement} child
     * @memberof Children
     */
    remove (child = false) {
        console.warn('Remove child is not supported yet.', [ child, ]);
    }
};