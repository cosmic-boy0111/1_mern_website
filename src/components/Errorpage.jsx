import React from 'react'
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const Errorpage = () => {
    const history = useHistory();
    return (
        <>
            <div className="error_main">
                <h1 className='e404'>404</h1>
                <div className='error_data'>
                    <h1>WE ARE SORRY, PAGE NOT FOUND</h1>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, dolores. Lorem ipsum dolor sit amet.</h5>
                    <Button variant="contained" color="secondary" onClick={()=>history.push('/')}>
                         back to home
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Errorpage

