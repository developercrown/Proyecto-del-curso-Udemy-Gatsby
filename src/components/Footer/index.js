import React from "react";
import stylesFooter from './style.module.css';

export default () => {
    return <footer className={stylesFooter.footer}>
        <div className="container">
            <span className="text-muted">This is our footer contaner</span>
        </div>
    </footer>
};