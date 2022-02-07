import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox } from './styles'
import closeIMG from '../../assets/close.svg'
import incomeICON from '../../assets/income.svg'
import outcomeICON from '../../assets/outcome.svg'
import { useState } from 'react'
Modal.setAppElement('#root')

interface NewTransactionModal {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose}: NewTransactionModal) {
    const [type, setType] = useState('deposit')
    return (
            <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName='react-modal-overlay' className='react-modal-content'>
                <Container >
                    <button type="button" className="react-modal-close" onClick={onRequestClose}><img src={closeIMG} /></button>
                    <h2>Cadastrar transação</h2>
                    <input placeholder="Titulo"/>
                    <input placeholder="Valor" type="number"/>
                    <TransactionTypeContainer>
                        <RadioBox  type="button"   onClick={() => setType('deposit')} isActive={type == 'deposit'} activeColor="green">
                            <img src={incomeICON} />
                            <span>Entrada</span>
                        </RadioBox>
                        <RadioBox  type="button" onClick={() => setType('widthdraw')}  isActive={type == 'withdraw'} activeColor="red">
                            <img src={outcomeICON} />
                            <span>Saída</span>
                        </RadioBox>
                    </TransactionTypeContainer>
                    <input placeholder="Categoria"/>
                    <button type="submit">Cadastrar</button>
                </Container>
            </Modal> 
    )
}