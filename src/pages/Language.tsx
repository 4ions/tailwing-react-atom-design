import { LanguageBase } from '@/models/Language'
import LanguageForm from '@/organism/Forms/Language'
import Table from '@/organism/Table'
import { getAllLanguages, postLanguage } from '@/services/Language'
import { RequestOptions } from '@/types/request'
import Button from '@/atoms/Button'
import { useQuery, useMutation } from '@tanstack/react-query'
import { useState } from 'react'

function LanguagePage() {
  const [edit, setEdit] = useState(false)
  const columns = [
    { key: 'ID', refAttr: 'id' },
    { key: 'Nombre', refAttr: 'name' },
    { key: 'Código', refAttr: 'code' },
    { key: 'Activo', refAttr: 'is_active' },
  ]

  const mutation = useMutation({
    mutationFn: (option: RequestOptions) => postLanguage(option),
  })

  const languageData = {
    name: 'Español',
    code: 'es',
  }
  //mutation.mutate({ body: languageData })

  const { data, isSuccess, isLoading, refetch } = useQuery({
    queryKey: ['getAllLanguage', {}],
    queryFn: () => getAllLanguages<LanguageBase[]>({}),
  })

  const onClose = () => {
    refetch()
    setEdit(false)
  }

  return edit ? (
    <LanguageForm onClose={onClose} mutation={mutation} />
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

export default LanguagePage
