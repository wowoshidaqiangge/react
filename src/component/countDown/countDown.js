/** 60秒倒计时 **/
import React from "react";
import { Button } from 'antd'
import Tools from '../../utils/tools';
import "./countDown.scss";


export default class partner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    

    componentDidMount() {

    }

    render() {
        let text = this.props.stop ? this.props.text : this.props.count + 's';
        console.log(text)
        return (
            <div className={this.props.getCode} onClick={this.props.habdelGetCode}>
                <Button disabled={this.props.disabled}>{text}</Button>
            </div>
        );
    }
}