import React, {Fragment} from 'react'

// function Header(props){
    
//     console.log(props)
//     return (
//         <Fragment>
//             <h1>{props.titulo}</h1>
//         </Fragment>
//     )
// }

const Header = ({titulo}) =>(
    <Fragment>
        <h1>{titulo}</h1>
    </Fragment>
)


export default Header