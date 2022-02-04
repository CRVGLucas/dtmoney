import Modal from 'react-modal'
import { Container } from './styles'
import closeIMG from '../../assets/close.svg'
Modal.setAppElement('#root')

interface NewTransactionModal {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose}: NewTransactionModal) {
    return (
            <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName='react-modal-overlay' className='react-modal-content'>
                <Container >
                    <button type="button" className="react-modal-close" onClick={onRequestClose}><img src={closeIMG} /></button>
                    <h2>Cadastrar transação</h2>
                    <input placeholder="Titulo"/>
                    <input placeholder="Valor" type="number"/>
                    <input placeholder="Categoria"/>
                    <button type="submit">Cadastrar</button>
                </Container>
            </Modal> 
    )
}