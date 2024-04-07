export default function ParentComponent() {
    return (
        <>
            <ChildCmp1 />
            <ChildCmp2 />
            <ChildCmp3 />
        </>
    );
}

function ChildCmp1() {
    return <h1> child 1 </h1>
}

function ChildCmp2() {
    return <h1> child 2 </h1>
}

function ChildCmp3() {
    return <h1> child 3 </h1>
}