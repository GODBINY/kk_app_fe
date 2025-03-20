export default function TableComponent() {
  const users = [
    { id: 1, name: 'gb', role: 'gf' },
    { id: 2, name: 'hk', role: 'bf' },
    { id: 3, name: 'sole', role: 'pet' }
  ]
  return (
    <>
      <p>1. Rendering an Array Object in React - with key props from array object</p>
      <ul>{
        users.map(function (user) {
          return (
            <li key={user.id}> {user.name}&apos;s role is {user.role} </li>
          )
        })
      }</ul>
      <p>2. Rendering an Array Object in React - with key props from index</p>
      <ul>{
        users.map(function (user, index) {
          return (
            <li key={index}> {user.name}&apos;s role is {user.role} </li>
          )
        })
      }</ul>
    </>
  )
}
