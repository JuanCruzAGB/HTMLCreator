// ? JuanCruzAGB repository
import Class from "../../JuanCruzAGB/js/Class.js";

// ? HTMLCreatorJS repository
import Div from "./Boxes/Div.js";
import Figure from "./Boxes/Figure.js";
import Header from "./Boxes/Header.js";
import Button from "./Buttons/Button.js";
import Link from "./Buttons/Link.js";
import Form from "./Forms/Form.js";
import Input from "./Forms/Input.js";
import Label from "./Forms/Label.js";
import Item from "./List/Item.js";
import List from "./List/List.js";
import Table from "./Table/Table.js";
import Row from "./Table/Row.js";
import Cell from "./Table/Cell.js";
import Span from "./Texts/Span.js";
import Title from "./Texts/Title.js";
import Icon from "./Visuals/Icon.js";
import Image from "./Visuals/Image.js";

/**
 * * HTMLCreator creates multiple HTMLElement.
 * @export
 * @class HTMLCreator
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Class
 */
export class HTMLCreator extends Class {
    /**
     * * Creates an instance of HTMLCreator.
     * @param {otring} [tag] HTML Element node name.
     * @param {sbject} [data] HTML Elemenet data.
     * @memberof HTMLCreator
     */
    constructor(tag = 'DIV', data = {}){
        super();
        switch (tag.toUpperCase()) {
            case 'DIV':
                return new Div((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('innerHTML') ? data.innerHTML : false));
            case 'FIGURE':
                return new Figure((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('image') ? data.image : {}));
            case 'HEADER':
                return new Header((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('title') ? data.title : {}));
            case 'BUTTON':
                return new Button((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('state') ? data.state : {}), (data.hasOwnProperty('callback') ? data.callback : {}), (data.hasOwnProperty('innerHTML') ? data.innerHTML : false));
            case 'A':
                return new Link((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('state') ? data.state : {}), (data.hasOwnProperty('callback') ? data.callback : {}), (data.hasOwnProperty('innerHTML') ? data.innerHTML : false));
            case 'FORM':
                return new Form((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('state') ? data.state : {}), (data.hasOwnProperty('callback') ? data.callback : {}), (data.hasOwnProperty('inputs') ? data.inputs : []));
            case 'INPUT':
                return new Input((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('state') ? data.state : {}), (data.hasOwnProperty('callbacks') ? data.callbacks : {}));
            case 'LABEL':
                return new Label((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('input') ? data.input : false));
            case 'LI':
                return new Item((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('innerHTML') ? data.innerHTML : false));
            case 'OL':
                if (data.hasOwnProperty('props')) {
                    data.props.type = 'ordered';
                }
                return new List((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('items') ? data.items : []));
            case 'UL':
                if (data.hasOwnProperty('props')) {
                    data.props.type = 'unordered';
                }
                return new List((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('items') ? data.items : []));
            case 'TABLE':
                return new Table((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('cells') ? data.cells : []), (data.hasOwnProperty('data') ? data.data : []));
            case 'TR':
                return new Row((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('cells') ? data.cells : []));
            case 'TD':
                if (data.hasOwnProperty('props')) {
                    data.props.type = 'normal';
                }
                return new Cell((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('innerHTML') ? data.innerHTML : false));
            case 'TH':
                if (data.hasOwnProperty('props')) {
                    data.props.type = 'header';
                }
                return new Cell((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('innerHTML') ? data.innerHTML : false));
            case 'SPAN':
                return new Span((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('innerHTML') ? data.innerHTML : false));
            case 'H1':
            case 'H2':
            case 'H3':
            case 'H4':
            case 'H5':
            case 'H6':
                return new Title((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('innerHTML') ? data.innerHTML : false));
            case 'ICON':
                return new Icon((data.hasOwnProperty('props') ? data.props : {}));
            case 'IMG':
                return new Image((data.hasOwnProperty('props') ? data.props : {}));
            default:
                console.warn(`HTMLCreatorJS does not support ${ tag } yet`);
                break;
        }
    }
}

// ? HTMLCreatorJS childs
HTMLCreatorJS.Div = Div;
HTMLCreatorJS.Figure = Figure;
HTMLCreatorJS.Header = Header;
HTMLCreatorJS.Button = Button;
HTMLCreatorJS.Link = Link;
HTMLCreatorJS.Form = Form;
HTMLCreatorJS.Input = Input;
HTMLCreatorJS.Label = Label;
HTMLCreatorJS.Item = Item;
HTMLCreatorJS.List = List;
HTMLCreatorJS.Table = Table;
HTMLCreatorJS.Span = Span;
HTMLCreatorJS.Title = Title;
HTMLCreatorJS.Icon = Icon;
HTMLCreatorJS.Image = Image;

// ? Default export
export default HTMLCreatorJS;