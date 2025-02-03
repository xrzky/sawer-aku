'use client'

import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useActionState } from 'react'
import { deleteTransactionAction } from '../_actions/action-delete'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
} from '@heroui/react'

export const TransactionDelete = ({ id }) => {
  const [state, formAction, pending] = useActionState(
    deleteTransactionAction,
    null
  )

  const { isOpen, onOpen, onClose, onPress } = useDisclosure()

  const handleOpen = (e) => {
    e.preventDefault()
    onOpen()
  }
  return (
    <div className="inline">
      <button onClick={handleOpen} type="button" className="inline ">
        <FontAwesomeIcon
          icon={faTrash}
          className="hover:text-red-500 cursor-pointer"
        />
      </button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <form action={formAction}>
              <ModalHeader>Confirm Delete</ModalHeader>
              <ModalBody>
                Are you sure you want to delete this transaction?
                <input name="transaction_id" defaultValue={id} hidden />
              </ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={onClose} type="button">
                  Cancel
                </Button>
                <Button color="danger" type="submit" isLoading={pending}>
                  Delete
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}
