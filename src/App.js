import React, { Component } from 'react';
import { 
    Layout, 
    Row, 
    Col, 
} from "antd";
import Total from './components/Total/';
import History from './components/History/';
import Operation from './components/Oparation/';

const { Content } = Layout;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transactions: JSON.parse(localStorage.getItem('calcMoney')) || [],
            amount:'',
            description:'',
            resultIncome: 0,
            resultExpenses: 0,
            totalBalance: 0
        }
    }

    getIncome() {
        return this.state.transactions
            .reduce((acc, cur) => cur.add ? acc + parseFloat(cur.amount) : acc, 0);
    }

    getExpenses() {
        return this.state.transactions
            .reduce((acc, cur) => !cur.add ? acc + parseFloat(cur.amount) : acc, 0);
    }

    getTotalBalance = () => {
        const resultIncome = this.getIncome();
        const resultExpenses = this.getExpenses();
        const totalBalance = resultIncome - resultExpenses;

        this.setState({
            resultIncome,
            resultExpenses,
            totalBalance
        });
        
    } 

    addTransaction = (add) => {
        const transactions = [...this.state.transactions];
        
        transactions.push({
            id: `cmr${(+new Date()).toString(16)}`,
            description: this.state.description,
            amount: this.state.amount,
            add
        });
        
        this.setState({ 
            transactions, 
            amount: '', 
            description: '',
        }, () => {
                this.getTotalBalance()
        });
    }

    addAmount = (e) => {
        this.setState({
            amount: e.target.value
        })
    }

    addDescription = (e) => {
        this.setState({
            description: e.target.value
        });
    }

    addToLocalStorage() {
        localStorage.setItem('calcMoney', JSON.stringify(this.state.transactions));
    }

    componentWillMount() {
        this.getTotalBalance();
    }

    componentDidUpdate() {
        this.addToLocalStorage()
    }

    deleteHistoryItem = (el) => {
        const filteredTransactions = this.state.transactions.filter(item => item.id !== el);

        this.setState({
            transactions: [...filteredTransactions]
        }, this.getTotalBalance);
    }
    
    render() {
        return (
            <Content className="content">       
                <Row>
                    <Col span={12} offset={6}>
                        <Total 
                            resultIncome={this.state.resultIncome} 
                            resultExpenses={this.state.resultExpenses}    
                            totalBalance={this.state.totalBalance}    
                        />
                        <History 
                            transactions={this.state.transactions} 
                            deleteHistoryItem={this.deleteHistoryItem}
                        />
                        <Operation 
                            addTransaction={this.addTransaction} 
                            addAmount={this.addAmount} 
                            addDescription={this.addDescription} 
                            amount={this.state.amount} 
                            description={this.state.description} 
                        />
                    </Col>
                </Row>
            </Content>
        );
    }
}
