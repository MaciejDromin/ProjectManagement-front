interface ChildWithStyles {
    child: React.ReactNode,
    cellStyle: string
}

interface Props {
    childs: ChildWithStyles[]
}

const Table = ({ childs }: Props) => {

    return (
        <div className="overflow-x-auto">
            <table className="table w-full table-fixed">
                <tbody>
                    <tr className="hover">
                        {childs.map((child) => {
                            return (
                                <td className={child.cellStyle}>{child.child}</td>
                            )
                        })}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table