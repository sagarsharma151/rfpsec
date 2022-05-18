import React from "react";


const LinkHeading = (props) =>{

    return(
        <React.Fragment>
            <div className="far-link">
                            <h3 className="far-part">{ props.title }</h3>
                        </div>
        </React.Fragment>
    )
}

export default LinkHeading;