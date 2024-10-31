import { useMutation, useQuery } from '@tanstack/react-query'

import Table from '@/organism/Table'
import { PaymentMethodBase } from '@/models/PaymentMethod'
import {
  getAllPaymentMethod,
  postPaymentMethod,
} from '@/services/PaymentMethod'
import { RequestOptions } from '@/types/request'
import PaymentMethodForm from '@/organism/Forms/PaymentMethod'
import { useState } from 'react'
import Button from '@/atoms/Button'

function PaymentMethodPage() {
  const [edit, setEdit] = useState(false)
  const mutation = useMutation({
    mutationFn: (option: RequestOptions) => postPaymentMethod(option),
  })

  const columns = [
    { key: 'ID', refAttr: 'id' },
    { key: 'Nombre', refAttr: 'name' },
    { key: 'Activo', refAttr: 'is_active' },
  ]

  const { data, isSuccess, isLoading, refetch } = useQuery({
    queryKey: ['getAllPaymentMethod', {}],
    queryFn: () => getAllPaymentMethod<PaymentMethodBase[]>({}),
  })

  const onClose = () => {
    refetch()
    setEdit(false)
  }

  return edit ? (
    <PaymentMethodForm onClose={onClose} mutation={mutation} />
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

export default PaymentMethodPage
