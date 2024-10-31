import Table from '@/organism/Table'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getAllCurrency, postCurrency } from '@/services/Currency'
import { CurrencyBase } from '@/models/Currency'
import CurrencyForm from '@/organism/Forms/Currency'
import Button from '@/atoms/Button'
import { useState } from 'react'
import { RequestOptions } from '@/types/request'

function CurrencyPage() {
  const [edit, setEdit] = useState(false)
  const mutation = useMutation({
    mutationFn: (option: RequestOptions) => postCurrency(option),
  })

  const { data, isSuccess, isLoading, refetch } = useQuery({
    queryKey: ['getAllCurrency', {}],
    queryFn: () => getAllCurrency<CurrencyBase[]>({}),
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
    <CurrencyForm onClose={onClose} mutation={mutation} />
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

export default CurrencyPage
