import React, { useState } from 'react';

const WithShow = OrginalComponent => {

    const NewComponent = (props) => {

        const [showInfo, setShowInfo] = useState(false);

        const clickHandler = () => setShowInfo(!showInfo);

        return (
            <OrginalComponent showInfo={showInfo} clickHandler={clickHandler} {...props} />
        )
    };

    return NewComponent;
};

export default WithShow;