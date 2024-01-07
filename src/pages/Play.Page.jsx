import React from 'react'

//HOCs
import DefaultlayoutHOC from '../layout/Default.layout';

const PlayPage =() =>{
    return (
        <div>PlayPage</div>
    )
}
export default DefaultlayoutHOC(PlayPage)