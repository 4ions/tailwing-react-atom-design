import { ToneBase } from '@/models/Tone'
import Table from '@/organism/Table'
import { getAllTone, postTone } from '@/services/Tone'
import { RequestOptions } from '@/types/request'
import { useQuery } from '@tanstack/react-query'

function TonePage() {
  const tableColumns = [
    { key: 'ID', refAttr: 'id' },
    { key: 'Nombre', refAttr: 'name' },
    { key: 'Activo', refAttr: 'is_active' },
  ]

  const mutation = useMutation({
    mutationFn: (option: RequestOptions) => postTone(option),
  })

  const toneData = {
    name: 'B2C',
  }
  //mutation.mutate({ body: toneData })

  const { data = [] } = useQuery({
    queryKey: ['getAllTone', {}],
    queryFn: () => getAllTone<ToneBase[]>({}),
  })

  return (
    <div>
      <Table columns={tableColumns} data={data} />
    </div>
  )
}

export default TonePage
