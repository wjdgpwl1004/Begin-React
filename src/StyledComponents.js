import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import NewButton from './components/NewButton';

const AppBlock = styled.div`
    width:512px;
    margin:0 auto;
    margin-top:4rem;
    border:1px solid #000;
    padding:1rem;
`;

const ButtonGroup = styled.div`
& + & {
    margin-top:1rem;
}
`;

const palette = {
    blue: '#228be6',
    gray: '#496057',
    pink: '#f06595'
}

function StyledComponents() {
    return (
        <ThemeProvider theme={{
            palette
        }}>
            <AppBlock>
            <ButtonGroup>
                <NewButton size="large">Button</NewButton>
                <NewButton color="gray">Button</NewButton>
                <NewButton size="small" color="pink" outline>Button</NewButton>
                <NewButton size="small" color="pink" fullWidth>Button</NewButton>
            </ButtonGroup>
            </AppBlock>
        </ThemeProvider>
    );
}

export default StyledComponents; 