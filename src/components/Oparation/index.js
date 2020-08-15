import React from 'react'
import {
    Typography,
    Button,
    Form,
    Input,
} from "antd";

const { Title } = Typography;

export default ({ addTransaction, addDescription, addAmount, amount, description }) => {
    return (
        <section className="operation">
            <Title level={3}>Новая операция</Title>
            <Form id="form" name="basic">
                <Form.Item>
                    <Input 
                        onChange={addDescription} 
                        className="operation__fields operation__name" 
                        placeholder="Наименование операции"
                        value={description} 
                    />
                </Form.Item>
                <Form.Item>
                    <Input 
                        onChange={addAmount} 
                        className="operation__fields operation__amount" 
                        placeholder="Введите сумму" 
                        value={amount}
                    />
                </Form.Item>
                <div className="operation__btns">
                    <Button onClick={() => addTransaction(false)} className="operation__btn operation__btn-subtract">РАСХОД</Button>
                    <Button onClick={() => addTransaction(true)} className="operation__btn operation__btn-add">ДОХОД</Button>
                </div>
            </Form>
        </section>
    )
}
