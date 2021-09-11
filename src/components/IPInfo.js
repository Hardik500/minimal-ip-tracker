import styled from 'styled-components'

export default function IPInfo({ heading, subheading }) {
    return (
        <Container>
            <SubHeading>
                {subheading}
            </SubHeading>
            <Heading>
                {heading}
            </Heading>
        </Container>
    )
}

const Heading = styled.h2`
    font-size: 20px;
    color: hsl(0, 0%, 17%);
`

const SubHeading = styled.h5`
    font-size: 12px;
    margin-bottom: 10px;
    color: hsl(0, 0%, 59%);
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`