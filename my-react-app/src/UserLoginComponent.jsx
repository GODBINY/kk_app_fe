export default function UserLoginComponent () {
    const userId = ''
    const password = ''
    return (
        <>
            <div>
                ID : <input id={userId}></input>
                PW : <input id={password}></input>
                <button onClick={showMessage}>Login</button>
            </div>
        </>
    )
}

const showMessage = () => {
    alert('로그인 했단다.')
}