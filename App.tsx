
export default function User(){
    const name:string="mahi"
    const branch:string="cse"
    return(
        <>
        <h1>This is User page</h1>
        <h2>{name.length > branch.length ? (<h1>this name is big</h1>):(<h1>this branch is big</h1>)}</h2>
        </>
    )
}