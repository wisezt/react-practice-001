import React from 'react';


const LayerA = (props) => {

    const loopState = () => {

        for (let key in props.state) {
            let  test4 = 4;

        }

    }


    return (

        <div>


            {loopState()}
            {console.log(props.food)}
            {console.log(props.person)}


        </div>


    )


}

export default LayerA;