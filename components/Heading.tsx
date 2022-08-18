type Props = {
    title:string
}

const Heading = ({title}:Props) => {

    return (
        <div className="text-2xl text-black">
            {title}
        </div>
    );
}

export default Heading