import React from 'react';
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core";
import { IconButton } from '@material-ui/core';

import './ButtonLink.css';

// function ButtonLink({ children, style, onClick, disabled }) {
//     return (
//         <button 
//             onClick={onClick}
//             style={style}
//             disabled={disabled}
//             className='buttonLink'
//             >
//             {children}
//         </button>
//     )
// }

const useStyles = makeStyles({
    root: {
        fontSize: "14px",
        padding: "0",
     
        "&:hover":{
            background: "none",
        },

        "&.Mui-disabled": {
        pointerEvents: "auto",
        cursor: "not-allowed",
        }
    }
})

const ButtonLink = ({ children, style, disabled, onClick }) => {
    const classes=useStyles();

    return (
        <>
        {
            disabled 
            ?
       
            <Tooltip title='Must be Signed In'>
                <div>
                    <IconButton 
                        className={classes.root}
                        onClick={onClick}
                        style={style}
                        disabled={disabled}
                        >
                            {children}
                    </IconButton>
                </div>
            </Tooltip>
            :
            <div>
                <IconButton 
                    className={classes.root}
                    onClick={onClick}
                    style={style}
                    disabled={disabled}
                      >
                       {children}
                </IconButton>
            </div>
        }
        </>
        
    );
  };

  export default ButtonLink;