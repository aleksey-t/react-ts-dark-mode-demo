import {MenuItem} from "./MenuItem";

export default function Menu(props){
    return props.list.map(item => {
       return <MenuItem
            text={item.text}
            id={item.id}
            subItems={item.subItems}
            key={item.id}
        />;
    });
}