import React from 'react';
import {transactions} from "../../data";
import "./WidgetLg.css";

const WidgetLg = () => {

    const Button = ({ type }) => {

        return <button className={'widgetLgButton ' + type}>{type}</button>
    };

    return (
        <div className='widgetLg'>
            <h3 className="widgetLgTitle">Lastest Trasaction</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                {
                    transactions.map(user => {
                        const { id, customer, date, amount, status, img } = user;
                        return (
                            <tr className="widgetLgTr" key={id}>
                                <td className="widgetLgUser">
                                    <img src={img} alt="logo" className='widgetLgImg' />
                                    <span className='widgetLgName'>{ customer}</span>
                                </td>
                                <td className="widgetLgDate">
                                    {date}
                                </td>
                                <td className="widgetLgAmount">
                                    ${amount}
                                </td>
                                <td className="widgetLgStatus">
                                    <Button type={status} />
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    );
};

export default WidgetLg;