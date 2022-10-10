interface Props {
    name: string,
    functionToExecute: () => void
    definedStyles: string
}

const Button = ({ name, functionToExecute, definedStyles }: Props) => {

    return (
        <div onClick={functionToExecute} className={"btn " + definedStyles}>
            {name}
        </div>
    )
}

export default Button