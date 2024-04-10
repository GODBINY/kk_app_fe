import {useState} from "react";

export default function ParentComponent() {
    return (
        <>
            <ChildCmp1
                name="GB"
                age={100}
                nickname={["GB","GOD"]}
                child2={ChildCmp2} /* you can even pass a function into props !!! */
            />
            <ChildCmp2 />
            <ChildCmp3 />
            <ChildCmp4 />
        </>
    );
}

function ChildCmp1(props) {
    const [bfName, setBfName] = useState('HK')
    return <h1> my name is { props.name } and I am { props.age } years old. {props.child2()} my boyfriend&apos;s nickname is {bfName} </h1>
}

function ChildCmp2() {
    return <h1> child 2 </h1>
}

function ChildCmp3() {
    return <h1> child 3 </h1>
}

function ChildCmp4() {
    const classNm = 'lower-class';
    const textContent = 'Hello';
    return <h1 className={classNm}>{textContent}</h1>
}