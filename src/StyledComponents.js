import React, {useState} from 'react';
import styled, {ThemeProvider} from 'styled-components';
import NewButton from './components/NewButton';
import Dialog from './components/Dialog';

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
    const [dialog, setDialog] = useState(false);
    const onClick = () => {
        setDialog(true);
    }
    const onConfirm = () => {
        setDialog(false);
    }

    const onCancel = () => {
        setDialog(false);
    }

    return (
        <ThemeProvider theme={{
            palette
        }}>
            <>
            <AppBlock>
            <ButtonGroup>
                <NewButton size="large">Button</NewButton>
                <NewButton color="gray">Button</NewButton>
                <NewButton size="small" color="pink" outline>Button</NewButton>
                <NewButton size="small" color="pink" fullWidth onClick={onClick}>삭제</NewButton>
            </ButtonGroup>
            </AppBlock>
            <Dialog title="정말로 삭제하시겠습니까?" confirmText="삭제" cancelText="취소" onConfirm={onConfirm} onCancel={onCancel}  visible ={dialog}>
                데이터를 정말로 삭제하시겠습니까?
            </Dialog>
            </>
        </ThemeProvider>
    );
}

export default StyledComponents; 