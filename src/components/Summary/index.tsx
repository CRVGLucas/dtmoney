import {Container} from './styles'
import incomeIMG from '../../assets/income.svg'
import outcomeIMG from '../../assets/outcome.svg'
import totalIMG from '../../assets/total.svg'
export function Summary() {
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeIMG} alt="Entradas" />
                </header>
                <strong>R$1000.00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeIMG} alt="Saída" />
                </header>
                <strong>R$1000.00</strong>
            </div>
            <div className="highLight-background">
                <header>
                    <p>Total</p>
                    <img src={totalIMG} alt="Total" />
                </header>
                <strong>R$1000.00</strong>
            </div>
        </Container>
    )
}