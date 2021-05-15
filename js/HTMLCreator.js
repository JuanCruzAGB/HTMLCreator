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
            case 'FIGURE':
                return new Figure((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('image') ? data.image : {}));
            case 'HEADER':
                return new Header((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('title') ? data.title : {}));
            case 'BUTTON':
                return new Button((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('states') ? data.states : {}), (data.hasOwnProperty('callback') ? data.callback : {}), (data.hasOwnProperty('innerHTML') ? data.innerHTML : false));
            case 'A':
                return new Link((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('states') ? data.states : {}), (data.hasOwnProperty('callback') ? data.callback : {}), (data.hasOwnProperty('innerHTML') ? data.innerHTML : false));
            case 'FORM':
                return new Form((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('inputs') ? data.inputs : []));
            case 'UL':
                if (data.hasOwnProperty('props')) {
                    data.props.type = 'ul';
                }
                return new List((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('items') ? data.items : []));
            case 'OL':
                if (data.hasOwnProperty('props')) {
                    data.props.type = 'ol';
                }
                return new List((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('items') ? data.items : []));
            case 'INPUT':
                return new Input((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('states') ? data.states : {}));
            case 'LABEL':
                return new Label((data.hasOwnProperty('props') ? data.props : {}), data.input);
            case 'TABLE':
                return new Table((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('cells') ? data.cells : []), (data.hasOwnProperty('data') ? data.data : []));
            case 'SPAN':
                return new Span((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('innerHTML') ? data.innerHTML : false));
            case 'H1':
                if (data.hasOwnProperty('props')) {
                    data.props.type = 'h1';
                }
                return new Title((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('innerHTML') ? data.innerHTML : false));
            case 'H2':
                if (data.hasOwnProperty('props')) {
                    data.props.type = 'h2';
                }
                return new Title((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('innerHTML') ? data.innerHTML : false));
            case 'H3':
                if (data.hasOwnProperty('props')) {
                    data.props.type = 'h3';
                }
                return new Title((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('innerHTML') ? data.innerHTML : false));
            case 'H4':
                if (data.hasOwnProperty('props')) {
                    data.props.type = 'h4';
                }
                return new Title((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('innerHTML') ? data.innerHTML : false));
            case 'H5':
                if (data.hasOwnProperty('props')) {
                    data.props.type = 'h5';
                }
                return new Title((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('innerHTML') ? data.innerHTML : false));
            case 'H6':
                if (data.hasOwnProperty('props')) {
                    data.props.type = 'h6';
                }
                return new Title((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('innerHTML') ? data.innerHTML : false));
            case 'ICON':
                return new Icon((data.hasOwnProperty('props') ? data.props : {}));
            case 'IMG':
                return new Image((data.hasOwnProperty('props') ? data.props : {}));
            default:
                return new Div((data.hasOwnProperty('props') ? data.props : {}), (data.hasOwnProperty('innerHTML') ? data.innerHTML : false));
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