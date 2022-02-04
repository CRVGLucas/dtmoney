import { Dashboard } from './components/Dashboard';
import {Header} from './components/Header'
import { GlobalStyles } from './styles/global'
import { createServer } from 'miragejs'
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';
export function App() {
  
  createServer({
    routes() {
      this.namespace = 'api';
      this.get('/transactions', () => {
        return [
          {
            id: 1,
            title: 'Transaction 1',
            amount: 400,
            type: 'deposit'
          },
          {
            id: 1,
            title: 'Transaction 2',
            amount: 500,
            type: 'withdraw'
          },
          {
            id: 1,
            title: 'Transaction 3',
            amount: 300,
            type: 'withdraw'
          },
          {
            id: 1,
            title: 'Transaction 4',
            amount: 600,
            type: 'deposit'
          },
        ]
      })
    }
  })

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
      <GlobalStyles/>
    </>
  );
}
