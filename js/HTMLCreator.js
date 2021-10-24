// ? JuanCruzAGB repository
import Class from '../../JuanCruzAGB/js/Class.js';

// ? HTMLCreatorJS repository
// ? Boxes
import Aside from './Boxes/Aside.js';
import Div from './Boxes/Div.js';
import Figure from './Boxes/Figure.js';
import Footer from './Boxes/Footer.js';
import Form from './Boxes/Form.js';
import Header from './Boxes/Header.js';
import Item from './Boxes/Item.js';
import Label from './Boxes/Label.js';
import List from './Boxes/List.js';
import Main from './Boxes/Main.js';
import Option from './Boxes/Option.js';
import Section from './Boxes/Section.js';
// ? Buttons
import Button from './Buttons/Button.js';
import Input from './Buttons/Input.js';
import Link from './Buttons/Link.js';
// ? Table
import Table from './Table/Table.js';
import TPart from './Table/TPart.js';
import Row from './Table/Row.js';
import Cell from './Table/Cell.js';
// ? Texts
import Italic from './Texts/Italic.js';
import LineBreak from './Texts/LineBreak.js';
import Paragraph from './Texts/Paragraph.js';
import Span from './Texts/Span.js';
import Title from './Texts/Title.js';
// ? Visuals
import Icon from './Visuals/Icon.js';
import Image from './Visuals/Image.js';
import Line from './Visuals/Line.js';

/**
 * * HTMLCreator creates multiple HTMLElement.
 * @export
 * @class HTMLCreator
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Class
 */
export default class HTMLCreator extends Class {
    /**
     * * Creates an instance of HTMLCreator.
     * @param {string} [query]
     * @param {object} [data]
     * @memberof HTMLCreator
     */
    constructor (query = 'DIV', data = {}) {
        super();
        if (!data || !data.hasOwnProperty('state')) {
            data = {
                state: {
                    exist: false,
                },
            };
        }
        if (document.querySelector(query)) {
            data.state.exist = true;
        }
        query = this.parseQuery(query);
        for (let subquery of query) {
            switch (subquery.nodeName.toUpperCase()) {
            // ? Boxes
                case 'ASIDE':
                    return new Aside(data);
                case 'DIV':
                    return new Div(data);
                case 'FIGURE':
                    return new Figure(data);
                case 'FOOTER':
                    return new Footer(data);
                case 'FORM':
                    return new Form(data);
                case 'HEADER':
                    return new Header(data);
                case 'LI':
                    return new Item(data);
                case 'LABEL':
                    return new Label(data);
                case 'OL':
                    if (data.hasOwnProperty('props') && !data.props.hasOwnProperty('type')) {
                        data.props.type = 'ordered';
                    }
                case 'UL':
                    if (data.hasOwnProperty('props') && !data.props.hasOwnProperty('type')) {
                        data.props.type = 'unordered';
                    }
                    return new List(data);
                case 'MAIN':
                    return new Main(data);
                case 'OPTION':
                    return new Option(data);
                case 'SECTION':
                    return new Section(data);
            // ? Buttons
                case 'BUTTON':
                    return new Button(data);
                case 'SELECT':
                    if (data.hasOwnProperty('props') && !data.props.hasOwnProperty('type')) {
                        data.props.type = 'select';
                    }
                case 'TEXTAREA':
                    if (data.hasOwnProperty('props') && !data.props.hasOwnProperty('type')) {
                        data.props.type = 'textarea';
                    }
                case 'INPUT':
                    return new Input(data);
                case 'A':
                    return new Link(data);
            // ? Table
                case 'TABLE':
                    return new Table(data);
                case 'TBODY':
                    if (data.hasOwnProperty('props') && !data.props.hasOwnProperty('type')) {
                        data.props.type = 'body';
                    }
                case 'THEAD':
                    if (data.hasOwnProperty('props') && !data.props.hasOwnProperty('type')) {
                        data.props.type = 'head';
                    }
                    return new TPart(data);
                case 'TR':
                    return new Row(data);
                case 'TD':
                    if (data.hasOwnProperty('props') && !data.props.hasOwnProperty('type')) {
                        data.props.type = 'normal';
                    }
                case 'TH':
                    if (data.hasOwnProperty('props') && !data.props.hasOwnProperty('type')) {
                        data.props.type = 'header';
                    }
                    return new Cell(data);
            // ? Texts
                case 'BR':
                    return new LineBreak(data);
                case 'I':
                    return new Italic(data);
                case 'P':
                    return new Paragraph(data);
                case 'SPAN':
                    return new Span(data);
                case 'H1':
                    if (data.hasOwnProperty('props') && !data.props.hasOwnProperty('level')) {
                        data.props.level = 1;
                    }
                case 'H2':
                    if (data.hasOwnProperty('props') && !data.props.hasOwnProperty('level')) {
                        data.props.level = 2;
                    }
                case 'H3':
                    if (data.hasOwnProperty('props') && !data.props.hasOwnProperty('level')) {
                        data.props.level = 3;
                    }
                case 'H4':
                    if (data.hasOwnProperty('props') && !data.props.hasOwnProperty('level')) {
                        data.props.level = 4;
                    }
                case 'H5':
                    if (data.hasOwnProperty('props') && !data.props.hasOwnProperty('level')) {
                        data.props.level = 5;
                    }
                case 'H6':
                    if (data.hasOwnProperty('props') && !data.props.hasOwnProperty('level')) {
                        data.props.level = 6;
                    }
                    return new Title(data);
            // ? Visuals
                case 'ICON':
                    return new Icon(data);
                case 'IMG':
                    return new Image(data);
                case 'HR':
                    return new Line(data);
            // ? Menus
                case 'NAVMENU':
                    this.import(query, data);
                    break;
                default:
                    console.warn(`HTMLCreatorJS does not support ${ query } yet`);
                    break;
            }
        }
    }

    /**
     * * Parse the query.
     * @param {string} [query='DIV']
     * @returns {object}
     * @memberof HTMLCreator
     */
    parseQuery (query = 'DIV') {
        query = query.split(' ');
        for (const key in query) {
            if (Object.hasOwnProperty.call(query, key)) {
                const subquery = query[key].split(':').shift();
                let classList = [], id = false, nodeName = subquery;
                if (/#/.exec(subquery)) {
                    id = subquery.split('#').pop();
                    nodeName = subquery.split('#').shift();
                }
                if (id && /\./.exec(id)) {
                    classList = id.split('.');
                    classList.shift();
                    id = id.split('.').shift();
                }
                if (!id && /\./.exec(nodeName)) {
                    classList = nodeName.split('.');
                    classList.shift();
                    nodeName = nodeName.split('.').shift();
                }
                query[key] = {
                    'classList': classList,
                    'id': id,
                    'nodeName': nodeName.toUpperCase(),
                };
            }
        }
        return query;
    }

    // async import (query = 'DIV', data = {}) {
    //     switch (query.toUpperCase()) {
    //     // ? Menus
    //         case 'NAVMENU':
    //             try {
    //                 const { Nav } = await import('./Menu/Nav/Nav.js');
    //                 console.log(new Nav());
    //             } catch (error) {
    //                 console.error(error);
    //                 // console.error('Nav module does not found');
    //             }
    //             break;
    //     }
    // }

    /**
     * * Set the inner HTML Element
     * @static
     * @param {object} HTML HTML Element created with HTMLCreatorJS.
     * @param {string|HTMLElement|array|false} [innerHTML=false] Inner HTML Element.
     * @memberof HTMLCreator
     */
    static setInnerHTML (HTML = false, innerHTML = false) {
        if (innerHTML !== false && innerHTML !== null) {
            if (typeof innerHTML === 'string' || typeof innerHTML === 'number') {
                HTML.appendChild(`${ innerHTML }`);
            }
            if (typeof innerHTML !== 'string' && typeof innerHTML !== 'number' && typeof innerHTML !== 'boolean') {
                if (innerHTML.nodeName) {
                    HTML.appendChild(innerHTML);
                }
                if (innerHTML.props && innerHTML.hasProp('nodeName')) {
                    HTML.appendChild(innerHTML.html);
                }
                if (!innerHTML.nodeName && !innerHTML.props) {
                    for (let child of innerHTML) {
                        if (!HTML.children) {
                            HTML.children = [];
                        }
                        if (child.nodeName) {
                            HTML.appendChild(child);
                        }
                        if (child.props && child.hasProp('nodeName')) {
                            HTML.appendChild(child.html);
                        }
                        if (!child.nodeName && !child.props) {
                            child = new this((child.length ? child[0] : 'DIV'), ((child.length > 1) ? child[1] : {}));
                            HTML.appendChild(child.html);
                        }
                        HTML.children.push(child);
                    }
                }
            }
        }
    }

    // * HTMLCreator childs:
    //  ? Boxes
    static Aside = Aside;
    static Div = Div;
    static Figure = Figure;
    static Footer = Footer;
    static Form = Form;
    static Header = Header;
    static Item = Item;
    static Label = Label;
    static List = List;
    static Main = Main;
    static Section = Section;
    //  ? Buttons
    static Button = Button;
    static Input = Input;
    static Link = Link;
    //  ? Table
    static Table = Table;
    static TPart = TPart;
    static Row = Row;
    static Cell = Cell;
    //  ? Texts
    static Paragraph = Paragraph;
    static Span = Span;
    static Title = Title;
    static LineBreak = LineBreak;
    //  ? Visuals
    static Icon = Icon;
    static Image = Image;
    static Line = Line;
}