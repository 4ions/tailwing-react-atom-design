import { useMutation, useQuery } from '@tanstack/react-query'
import { CategoryBase } from '../models/Category'
import { getAllCategories, postCategory } from '@/services/Category'
import { RequestOptions } from '@/types/request'
import { useState } from 'react'
import CategoryForm from '@/organism/Forms/Category'
import Button from '@/atoms/Button'
import Table from '@/organism/Table'

function CategoryPage() {
  const [edit, setEdit] = useState(false)
  const mutation = useMutation({
    mutationFn: (option: RequestOptions) => postCategory(option),
  })

  const columns = [
    { key: 'ID', refAttr: 'id' },
    { key: 'Nombre', refAttr: 'name' },
    { key: 'ID Actividad Comercial', refAttr: 'commercial_activity_id' },
    { key: 'Activo', refAttr: 'is_active' },
  ]

  const { data, isSuccess, isLoading, refetch } = useQuery({
    queryKey: ['getAllCategories', {}],
    queryFn: () => getAllCategories<CategoryBase[]>({}),
  })

  const onClose = () => {
    refetch()
    setEdit(false)
  }

  return edit ? (
    <CategoryForm onClose={onClose} mutation={mutation} />
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

export default CategoryPage
