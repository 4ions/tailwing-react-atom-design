type CurrencyProps = { id: string; name: string; is_active: boolean }

function Currency({ id, name, is_active }: CurrencyProps) {
  return (
    <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 my-2">
      <span className="text-gray-500 font-semibold">ID:</span>
      <span className="ml-2 text-blue-600">{id}</span>

      <span className="ml-4 text-gray-500 font-semibold">Name:</span>
      <span className="ml-2 text-blue-600">{name}</span>

      <span className="ml-4 text-gray-500 font-semibold">Status:</span>
      <span
        className={`ml-2 w-3 h-3 rounded-full ${is_active ? 'bg-green-500' : 'bg-gray-400'}`}
        title={is_active ? 'Active' : 'Inactive'}
      ></span>
    </div>
  )
}

export default Currency
