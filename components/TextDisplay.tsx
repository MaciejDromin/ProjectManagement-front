type Props = {
    text:string
}

const TextDisplay = ({text}:Props) => {

    return (
        <div className="text-black text-justify py-4">
            {text}
        </div>
    );
}

export default TextDisplay