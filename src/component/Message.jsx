import { Component } from "react";
import LangContext from '../contexts/LangContext';

class Message extends Component{
    static contextType = LangContext;
    render(){
        const lang = this.context;
            if(lang === 'en'){
                return <div><p>{lang}:Context provides a way to ...</p></div>
            }else {
                return <div><p>{lang}:컨텍스트는 ... 제공합니다.</p></div>
        }
    }
}
export default Message;