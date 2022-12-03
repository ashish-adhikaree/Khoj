const QuickButton = ({value, onClick}:{value:string, onClick: any}) => {
    return <button onClick = {onClick} className="bg-gray-100 rounded-md px-5 py-2 hover:shadow-md focus-within:border-blue-300 text-gray-500">
        {value}
    </button>
}

export default QuickButton