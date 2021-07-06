import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";
import { Dashboard } from "./components/Dashboard";
import Modal from "react-modal"
import { useState } from "react"

Modal.setAppElement('#root');

export function  App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  // handle um pattern que indica que o usuario vai executar a ação
  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false);
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
      
      <GlobalStyle />
    </TransactionsProvider>
  );
}


