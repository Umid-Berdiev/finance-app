import React from 'react'
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

export default ({ resultIncome, resultExpenses, totalBalance}) => {
    return (
        <section className="total">
            <header className="total__header">
                <Title level={3}>Баланс</Title>
                <Paragraph className="total__balance">{totalBalance} ₽</Paragraph>
            </header>
            <div className="total__main">
                <div className="total__main-item total__income">
                    <Title level={4}>Доходы</Title>
                    <Paragraph className="total__money total__money-income">
                        {resultIncome} ₽
                    </Paragraph>
                </div>
                <div className="total__main-item total__expenses">
                    <Title level={4}>Расходы</Title>
                    <Paragraph className="total__money total__money-expenses">
                        {resultExpenses} ₽
                    </Paragraph>
                </div>
            </div>
        </section>
    )
}
