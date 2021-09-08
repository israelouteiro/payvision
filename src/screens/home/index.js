import React, { useState, useEffect } from 'react'
import { Alert } from 'react-native' 

import {
    Safe,
    Scroll,
    Container,
    Input,
    InputLabel,
    Button,
    ButtonText,
    ImageLogo,
    Title,
    Subtitle
} from './styled'
import { parseCurrencyMoney } from '@utils'; 

export default function Home(){

    const workHourPerDay = 8 
    const [ today, setToday ] = useState(new Date())
    const [ hourValue, setHourValue ] = useState('')
    const [ hourWorked, setHourWorked ] = useState('')
    const [ hourMonth, setHourMonth ] = useState('')

    const MONTHS = [
        'Janeiro', 'Fevereiro', 'Março',
        'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro',
        'Outubro', 'Novembro', 'Dezembro'
    ]

    const calculate = () => {
        const extraHour = ( parseInt(hourMonth) < parseInt(hourWorked) ? (((hourWorked - hourMonth)*(hourValue))/2) : 0 )
        const result = (hourValue * hourWorked) + extraHour 
        Alert.alert(`R$ ${ parseCurrencyMoney(result) },00`)
    }

    const getBusinessDatesCount = (startDate, endDate) => {
        let count = 0;
        const curDate = new Date(startDate.getTime());
        while (curDate <= endDate) {
            const dayOfWeek = curDate.getDay();
            if(!(dayOfWeek in [0, 6])) count++;
            curDate.setDate(curDate.getDate() + 1);
        }
        setHourMonth(`${count * workHourPerDay}`);
    }

    const init = () => {
        var startMonth = new Date(today.getFullYear(), today.getMonth() - 1 , 1);
        var endMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        getBusinessDatesCount(startMonth, endMonth)
    }

    useEffect(() => {
        init()
    }, [])

    return (
        <>
            <Safe>
                <Scroll>
                    <Container>
                        <Subtitle>{ MONTHS[today.getMonth()-1] }</Subtitle>
                        <Title>{ hourMonth } horas</Title>
                        <ImageLogo />
                        <InputLabel>Valor Hora</InputLabel>
                        <Input placeholder={'Valor Hora'} value={hourValue} onChangeText={setHourValue}/>
                        <InputLabel>Horas Trabalhadas</InputLabel>
                        <Input placeholder={'Horas Trabalhadas'} value={hourWorked} onChangeText={setHourWorked} />
                        {/* <InputLabel>Horas Mês</InputLabel> */}
                        {/* <Input placeholder={'Horas Mês'} value={hourMonth} onChangeText={setHourMonth} /> */}
                        <Button onPress={calculate}>
                            <ButtonText>
                                Calcular!
                            </ButtonText>
                        </Button>
                    </Container>
                </Scroll>
            </Safe>
        </>
    )
}