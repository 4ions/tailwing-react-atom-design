import Table from '@/organism/Table'
import { useMutation, useQuery } from '@tanstack/react-query'
import {
  getAllCommercialActivity,
  postCommercialActivity,
} from '@/services/CommercialActivity'
import { CommercialActivityBase } from '@/models/CommercialActivity'
import { RequestOptions } from '@/types/request'
import CommercialActivityForm from '@/organism/Forms/CommercialActivity'
import Button from '@/atoms/Button'
import { useState } from 'react'

function CommercialActivityPage() {
  const [edit, setEdit] = useState(false)
  const mutation = useMutation({
    mutationFn: (option: RequestOptions) => postCommercialActivity(option),
  })

  const { data, isSuccess, isLoading, refetch } = useQuery({
    queryKey: ['getAllCommercialActivity', {}],
    queryFn: () => getAllCommercialActivity<CommercialActivityBase[]>({}),
  })

  const columns = [
    { key: 'ID', refAttr: 'id' },
    { key: 'Nombre', refAttr: 'name' },
    { key: 'Activo', refAttr: 'is_active' },
  ]

  const onClose = () => {
    refetch()
    setEdit(false)
  }

  return edit ? (
    <CommercialActivityForm onClose={onClose} mutation={mutation} />
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

export default CommercialActivityPage
