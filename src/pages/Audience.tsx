import Button from '@/atoms/Button'
import { AudienceBase } from '@/models/Audience'
import AudienceForm from '@/organism/Forms/Audience'
import Table from '@/organism/Table'
import { getAllAudience, postAudience } from '@/services/Audience'
import { RequestOptions } from '@/types/request'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useState } from 'react'

function Audience() {
  const [edit, setEdit] = useState(false)
  const mutation = useMutation({
    mutationFn: (option: RequestOptions) => postAudience(option),
  })

  const columns = [
    { key: 'ID', refAttr: 'id' },
    { key: 'Nombre', refAttr: 'name' },
    { key: 'Activo', refAttr: 'is_active' },
  ]

  const { data, isSuccess, isLoading, refetch } = useQuery({
    queryKey: ['getAllAudience', {}],
    queryFn: () => getAllAudience<AudienceBase[]>({}),
  })

  const onClose = () => {
    refetch()
    setEdit(false)
  }

  return edit ? (
    <AudienceForm onClose={onClose} mutation={mutation} />
  ) : (
    <>
      <div className="flex justify-end">
        <Button
          name="Nuevo"
          onClick={() => setEdit(true)}
          disabled={!isSuccess}
        />
      </div>
      <Table
        isLoading={isLoading}
        columns={columns}
        data={isSuccess ? data : []}
      />
    </>
  )
}

export default Audience
