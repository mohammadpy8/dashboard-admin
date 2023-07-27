import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { newMembers } from '../../data';
import "./WidgetSm.css";

const WidgetSm = () => {

    return (

        <div className='widgetSm'>
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                {
                    newMembers.map(user => {
                        const { id, username, title, img } = user;
                        return (
                            <li className="widgetListItem" key={id}>
                                <img src={img} alt="" className='widgetSmImg' />
                                <div className="widgetSmUser">
                                    <span className="userName">{ username}</span>
                                    <span className="userTitle">{title}</span>
                                </div>
                                <button className="widgetSmButton">
                                    <VisibilityIcon className='widgetSmIcon' />
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default WidgetSm;