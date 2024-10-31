import Table from '@/organism/Table'
import { useQuery } from '@tanstack/react-query'
import { getAllWebSite } from '@/services/WebSite'
import { WebSiteBase } from '@/models/WebSite'
import Modal from '@/organism/Modal'
import Button from '@/atoms/Button'
import ModalBody from '@/molecules/ModalBody'
import ModalFooter from '@/molecules/ModalFooter'

function WebSitePage() {
  const { data, isSuccess } = useQuery({
    queryKey: ['getAllWebSite', {}],
    queryFn: () => getAllWebSite<WebSiteBase[]>({}),
  })

  const columns = [
    { key: 'ID', refAttr: 'id' },
    { key: 'Nombre', refAttr: 'name' },
    { key: 'Activo', refAttr: 'is_active' },
  ]

  const handleAccept = () => {
    console.log('Accepted')
  }

  const handleClose = () => {
    console.log('Close')
  }

  return (
    <div>
      {isSuccess ? (
        <Table isLoading={false} columns={columns} data={data} />
      ) : null}

      <Modal title="Titulo ejemplo" onClose={handleClose}>
        <ModalBody>
          <>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Texto ejemplo
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Parrafo 2
            </p>
          </>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleAccept} name="Aceptar" />
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default WebSitePage
