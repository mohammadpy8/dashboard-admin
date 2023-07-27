import React from 'react';
import { Link } from "react-router-dom";
import Chart from '../../components/chart/Chart';
import { productsData } from '../../data';
import Logo from "../../image/logo192.png";
import "./Product.css";

const Product = () => {

    return (
        <div className='product'>
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newProduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>

            <div className="productTop">
                <div className="productTopLeft">
                    <Chart title="Sale in this Month" data={productsData} dataKey="sales" grid/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src={Logo} alt="logo" className='productInfoImg'/>
                        <span className="productName">Dell Laptop</span>
                    </div>

                    <div className="productInfoButton">
                        <div className="productInfoItem">
                            <div className="productInfoKey">ID: </div>
                            <div className="productInfoValue">132</div>
                        </div>
                        <div className="productInfoItem">
                            <div className="productInfoKey">Name: </div>
                            <div className="productInfoValue">132</div>
                        </div>
                        <div className="productInfoItem">
                            <div className="productInfoKey">Sales: </div>
                            <div className="productInfoValue">132</div>
                        </div>
                        <div className="productInfoItem">
                            <div className="productInfoKey">Active: </div>
                            <div className="productInfoValue">132</div>
                        </div>
                        <div className="productInfoItem">
                            <div className="productInfoKey">In Stock: </div>
                            <div className="productInfoValue">132</div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Product;