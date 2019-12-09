import React from 'react';
import styled from 'styled-components';
import NewButton from './components/NewButton';

const AppBlock = styled.div`
    width:512px;
    margin:0 auto;
    margin-top:4rem;
    border:1px solid #000;
    padding:1rem;
`;

function StyledComponents() {
    return (
        <AppBlock>
            <NewButton>Button</NewButton>
        </AppBlock>
    );
}

export default StyledComponents; 