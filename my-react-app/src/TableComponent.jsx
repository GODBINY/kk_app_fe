export default function TableComponent () {
    const users = [
        { id: 1, name: 'gb', role: 'gf' },
        { id: 2, name: 'hk', role: 'bf' },
        { id: 3, name: 'sole', role: 'pet' }
    ]
    return (
        <>
        <p>Rendering an Array Object in React</p>
        <ul>{
           users.map(function(user){
               return (
                   <li key={user.id}> {user.name}&apos;s role is {user.role} </li>
               )
           })
        }</ul>
        </>
    )
}