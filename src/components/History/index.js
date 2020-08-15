import React from 'react'
import {
    Typography,
    List,
} from "antd";
import HistoryItem from './HistoryItem';

const { Title } = Typography;

export default ({ transactions, deleteHistoryItem }) => {
    return (
        <section className="history">
            <Title level={3}>История расходов</Title>
            <List size="small" className="history__list">
                { transactions.map(item => {
                    return <HistoryItem 
                        key={item.id} 
                        transaction={item}
                        deleteHistoryItem={deleteHistoryItem} 
                    />
                }) }
            </List>
        </section>
    )
}
