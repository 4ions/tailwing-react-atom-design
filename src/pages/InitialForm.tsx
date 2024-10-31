import { useMutation, useQuery } from '@tanstack/react-query'
import {
  getAllCommercialActivity,
  postCommercialActivity,
} from '@/services/CommercialActivity'
import { CommercialActivityBase } from '@/models/CommercialActivity'
import { RequestOptions } from '@/types/request'
import InitialContentForm from '@/organism/Forms/InitialContent'
import Modal from '@/organism/Modal'
import ModalBody from '@/molecules/ModalBody'
import ModalFooter from '@/molecules/ModalFooter'
import Button from '@/atoms/Button'
// import CommercialActivityForm from '@/organism/Forms/CommercialActivity'
// import Button from '@/atoms/Button'
// import { useState } from 'react'

function InitialFormPage() {
  // eslint-disable-next-line no-unused-vars
  const mutation = useMutation({
    mutationFn: (option: RequestOptions) => postCommercialActivity(option),
  })

  // eslint-disable-next-line no-unused-vars
  const getAllCommercialActivityQuery = useQuery({
    queryKey: ['getAllCommercialActivity', {}],
    queryFn: () => getAllCommercialActivity<CommercialActivityBase[]>({}),
  })

  return (
    <>
      <Modal title="Titulo ejemplo">
        <ModalBody>
          {/* step 1 */}
          <InitialContentForm />
        </ModalBody>
        <ModalFooter>
          {/* Usar este botón para la mutación */}
          <Button onClick={() => null} name="Finalizar" />
        </ModalFooter>
      </Modal>
    </>
  )
}

export default InitialFormPage
