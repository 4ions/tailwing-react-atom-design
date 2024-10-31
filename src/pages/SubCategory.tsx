import { SubcategoryBase } from '@/models/SubCategory'
import Table from '@/organism/Table'
import { getAllSubCategories, postSubCategory } from '@/services/SubCategory'
import { useQuery } from '@tanstack/react-query'

function SubcategoryPage() {
  const tableColumns = [
    { key: 'ID', refAttr: 'id' },
    { key: 'Nombre', refAttr: 'name' },
    { key: 'Description', refAttr: 'description' },
    { key: 'Actividad Comercial', refAttr: 'commercial_activity_id' },
    { key: 'Categoria', refAttr: 'category_id' },
    { key: 'Activo', refAttr: 'is_active' },
  ]

  const mutation = useMutation({
    mutationFn: (option: RequestOptions) => postSubCategory(option),
  })

  const subCategoryData = {
    name: 'Subcategory 1',
    description: 'description',
    commercial_activity_id: '1',
    category_id: '1',
  }
  //mutation.mutate({ body: subCategoryData })

  const { data = [] } = useQuery({
    queryKey: ['getAllSubCategories', {}],
    queryFn: () => getAllSubCategories<SubcategoryBase[]>({}),
  })

  return (
    <div>
      <Table columns={tableColumns} data={data} />
    </div>
  )
}

export default SubcategoryPage
