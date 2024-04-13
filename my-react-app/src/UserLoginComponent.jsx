// import * as React from 'react';
import Button from '@mui/material/Button';

export default function UserLoginComponent () {
    const userId = ''
    const password = ''
    return (
        <>
            <div>
                ID : <input id={userId}></input>
                PW : <input id={password}></input>
                <ButtonContent contentYn="Y"/>
                <Button variant="contained" onClick={showMessage}>Login</Button>
            </div>
        </>
    )
}

function ButtonContent(props) {
    let button = <button>콘텐츠 없음</button>

    if(props.contentYn) {
        button = <button>콘텐츠 있음</button>
    }

    return(
        <>
            <h1>콘텐츠 유무 분기</h1>
            {button}
        </>
    )
}

const showMessage = () => {
    alert('로그인 했단다.')
}