import Text from '@/atoms/Title'

interface IProps {
  property: string
}

const TableHeader: React.FC<IProps> = ({ property }) => (
  <th
    scope="col"
    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
  >
    <Text
      className="text-title capitalize mr-2"
      content={`${property.replace('_', ' ')}:`}
    />
  </th>
)

export default TableHeader
