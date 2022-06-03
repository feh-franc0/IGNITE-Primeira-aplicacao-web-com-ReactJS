import Modal from 'react-modal';

interface NewTranssactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionsModal({ isOpen, onRequestClose }: NewTranssactionModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >
            <h2>Cadastrar Transação</h2>
        </Modal>
    );
}