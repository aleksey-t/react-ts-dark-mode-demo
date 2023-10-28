import SubItem from './SubItem'

export const MenuItem =  (props) => {
    return <div>
        {props.text}

        {props.subItems.map((subItem) => {
            return <SubItem
                text={subItem.text}
                key={subItem.id}
            />
        })}
    </div>
}


