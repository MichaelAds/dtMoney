import logoImg from "../../assets/logo.svg"
import { Container } from "./styles"
import { Content } from "./styles"

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={ logoImg } alt="dt money" />
                <button onClick={onOpenNewTransactionModal} type="button">
                    Nova transação
                </button>
                
            </Content>
        </Container>
    )   
}