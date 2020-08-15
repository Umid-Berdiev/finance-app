import React from 'react'
import {
    List,
    Button
} from "antd";

export default ({ transaction, deleteHistoryItem }) => {
    return (
        <List.Item className={`history__item history__item-${transaction.add ? 'plus' : 'minus'}`}>
            {transaction.description}
            <span className="history__money">{transaction.amount} ₽</span>
            <Button className="history__delete" onClick={() => deleteHistoryItem(transaction.id)}>x</Button>
        </List.Item>
    )
}
