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
import Nav from './Boxes/Nav.js';
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
 * @author Juan Cruz Armentia <juan.cruz.armentia@gmail.com>
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
        if (/#/.exec(query) || / /.exec(query)) {
            console.log(this.query(query));
        }
        switch (query.toUpperCase()) {
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
            case 'NAV':
                return new Nav(data);
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
        // ? CustomInput
            case 'CUSTOMINPUT':
            case 'GALLERY':
                return this.import(query, data);
            default:
                console.warn(`HTMLCreatorJS does not support ${ query } yet`);
                break;
        }
    }

    /**
     * * Import the HTMLCreator extensions.
     * @async
     * @param {string} [query='DIV']
     * @param {object} [data={}]
     * @returns {class}
     * @memberof HTMLCreator
     */
    async import (query = 'DIV', data = {}) {
        let file = false;

        switch (query.toUpperCase()) {
        // ? CustomInput
            case 'CUSTOMINPUT':
                file = './CustomInput/js/CustomInput.js';
                break;
            case 'GALLERY':
                file = './Gallery/js/Gallery.js';
                break;
            default:
                console.warn(`HTMLCreatorJS extension ${ query } does not exist yet`);
                break;
        }

        if (file) {
            const Module = await import(file);
            
            return new Module.default(data);
        }
    }

    /**
     * * Returns all node element that match selectors.
     * @param {string} [query='DIV']
     * @returns {NodeList}
     * @memberof HTMLCreator
     */
    query (query = 'DIV') {
        let nodeList = [];

        for (const nodeElement of document.querySelectorAll(query)) {
            nodeList.push(nodeElement);
        }

        return nodeList;
    }

    /**
     * @static
     * @var {Aside} Aside Aside class child.
     * @memberof HTMLCreator
     */
    static Aside = Aside;
    /**
     * @static
     * @var {Div} Div Div class child.
     * @memberof HTMLCreator
     */
    static Div = Div;

    /**
     * @static
     * @var {Figure} Figure Figure class child.
     * @memberof HTMLCreator
     */
    static Figure = Figure;

    /**
     * @static
     * @var {Footer} Footer Footer class child.
     * @memberof HTMLCreator
     */
    static Footer = Footer;

    /**
     * @static
     * @var {Form} Form Form class child.
     * @memberof HTMLCreator
     */
    static Form = Form;

    /**
     * @static
     * @var {Header} Header Header class child.
     * @memberof HTMLCreator
     */
    static Header = Header;

    /**
     * @static
     * @var {Item} Item Item class child.
     * @memberof HTMLCreator
     */
    static Item = Item;

    /**
     * @static
     * @var {Label} Label Label class child.
     * @memberof HTMLCreator
     */
    static Label = Label;

    /**
     * @static
     * @var {List} List List class child.
     * @memberof HTMLCreator
     */
    static List = List;

    /**
     * @static
     * @var {Main} Main Main class child.
     * @memberof HTMLCreator
     */
    static Main = Main;

    /**
     * @static
     * @var {Nav} Nav Nav class child.
     * @memberof HTMLCreator
     */
    static Nav = Nav;

    /**
     * @static
     * @var {Section} Section Section class child.
     * @memberof HTMLCreator
     */
    static Section = Section;
    
    /**
     * @static
     * @var {Button} Button Button class child.
     * @memberof HTMLCreator
     */
    static Button = Button;

    /**
     * @static
     * @var {Input} Input Input class child.
     * @memberof HTMLCreator
     */
    static Input = Input;

    /**
     * @static
     * @var {Link} Link Link class child.
     * @memberof HTMLCreator
     */
    static Link = Link;
    
    /**
     * @static
     * @var {Table} Table Table class child.
     * @memberof HTMLCreator
     */
    static Table = Table;

    /**
     * @static
     * @var {TPart} TPart TPart class child.
     * @memberof HTMLCreator
     */
    static TPart = TPart;

    /**
     * @static
     * @var {Row} Row Row class child.
     * @memberof HTMLCreator
     */
    static Row = Row;

    /**
     * @static
     * @var {Cell} Cell Cell class child.
     * @memberof HTMLCreator
     */
    static Cell = Cell;
    
    /**
     * @static
     * @var {Paragraph} Paragraph Paragraph class child.
     * @memberof HTMLCreator
     */
    static Paragraph = Paragraph;

    /**
     * @static
     * @var {Span} Span Span class child.
     * @memberof HTMLCreator
     */
    static Span = Span;

    /**
     * @static
     * @var {Title} Title Title class child.
     * @memberof HTMLCreator
     */
    static Title = Title;

    /**
     * @static
     * @var {LineBreak} LineBreak LineBreak class child.
     * @memberof HTMLCreator
     */
    static LineBreak = LineBreak;
    
    /**
     * @static
     * @var {Icon} Icon Icon class child.
     * @memberof HTMLCreator
     */
    static Icon = Icon;

    /**
     * @static
     * @var {Image} Image Image class child.
     * @memberof HTMLCreator
     */
    static Image = Image;

    /**
     * @static
     * @var {Line} Line Line class child.
     * @memberof HTMLCreator
     */
    static Line = Line;
}