type Props = {
    title:string
}

const SmallHeading = ({title}:Props) => {

    return (
        <div className="text-sm text-black">
            {title}
        </div>
    );
}

export default SmallHeading