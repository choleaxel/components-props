import React from "react";


function Greet(props) {
    const {firstName} = props
    return <h2>Hello {firstName}!</h2>
}
//another way to write
// function Greet({firstName}) {
//     return <h2>Hello {firstName}!</h2>
// }







export default Greet;