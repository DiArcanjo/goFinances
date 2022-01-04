import React from 'react'

import {
    Container,
    Title,
    Amount,
    Footer,
    Category,
    Icon,
    CategoryName,
    Date,
} from './styles'

interface Category {
    name: String;
    icon: String;
}

interface Data {
    title: String;
    amount: String;
    category: Category;
    date: String;

}

interface Props {
    data: Data;
}


export function TransactionCard({ data }: Props) {
    return (
        <Container>
            <Title>{data.title}</Title>

            <Amount>{data.amount}</Amount>

            <Footer>
                <Category>
                    <Icon name="dollar-sign"></Icon>
                    <CategoryName>{data.category.name}</CategoryName>
                </Category>
                <Date>{data.date}</Date>
            </Footer>

        </Container>
    )
}