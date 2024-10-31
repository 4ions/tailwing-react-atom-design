import Text from '@/atoms/Title'

type Col = {
  key: string
  refAttr: string
}
interface IProps {
  columns: Col[]
  content: {
    [key: string]: any
  }
}

const buildValue = (value: any, index: number) => {
  if (typeof value === 'boolean') {
    return (
      <td
        className="whitespace-nowrap px-3 py-5 text-sm text-gray-500"
        key={index}
      >
        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
          {value ? 'Active' : 'Inactive'}
        </span>
      </td>
    )
  } else if (typeof value === 'string') {
    return (
      <td
        className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell"
        key={index}
      >
        <Text className="text-content" content={value} />
      </td>
    )
  }
}

const TableRow: React.FC<IProps> = ({ columns, content }) => {
  return (
    <tr>
      {columns.map((column, index) =>
        buildValue(content[column.refAttr], index)
      )}
    </tr>
  )
}

// const buildValue = (value: any) => {
//   if (typeof value === 'boolean') {
//     return (
//       <span
//         className={` w-3 h-3 rounded-full ${value ? 'bg-green-500' : 'bg-gray-400'}`}
//         title={value ? 'Active' : 'Inactive'}
//       ></span>
//     )
//   } else if (typeof value === 'string') {
//     return <Text className="text-content" content={value} />
//   }
// }

// const TableRow: React.FC<IProps> = ({ content }) => (
//   <div className="flex p-4 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200">
//     {Object.entries(content).map(([key, value], index) => (
//       <div key={`item-${index}`} className="flex items-center mr-4">
// <Text
//   className="text-title capitalize mr-2"
//   content={`${key.replace('_', '')}:`}
// />

//         {buildValue(value)}
//         {/* <Text className="text-content" content={value} /> */}
//       </div>
//     ))}
//   </div>
// )

export default TableRow
