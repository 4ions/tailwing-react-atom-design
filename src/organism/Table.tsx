import TableHeader from '@/molecules/TableHeader'
import TableRow from '@/molecules/TableRow'
import PulseLoader from 'react-spinners/PulseLoader'

type Col = {
  key: string
  refAttr: string
}

interface IProps {
  columns: Col[]
  data: object[]
  isLoading: boolean
}

const Table: React.FC<IProps> = ({ columns, data, isLoading }) => (
  <div className="px-4 sm:px-6 lg:px-8">
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="flex justify-center items-center h-60">
              <PulseLoader speedMultiplier={0.5} color="#c0c0c0" />
            </div>
          ) : (
            data &&
            data.length === 0 && (
              <div className="flex justify-center items-center h-96">
                <h4>No se encontraron registros</h4>
              </div>
            )
          )}
          {data && data.length > 0 && (
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  {columns.map(({ key }: Col, index) => (
                    <TableHeader key={`th-${index}`} property={key} />
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {data.map((item, index) => (
                  <TableRow
                    key={`item-${index}`}
                    content={item}
                    columns={columns}
                  />
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  </div>
)

export default Table
