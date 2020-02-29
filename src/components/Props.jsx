import React, {Fragment} from 'react'

const Props = (props) => {
    console.log(props)
    return(
        <Fragment>
            <h2>¡Hola {props.persona}!</h2>
        </Fragment>
    )
}

export default Props