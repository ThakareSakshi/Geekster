import React from 'react'
// import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";
import { useEffect } from 'react'



const Chat = () => {
  useEffect(()=>{
    (function(d, m){
        var kommunicateSettings = {"appId":"3927d176a493fe6a85e4b213df4e4ac7e","popupWidget":true,"automaticChatOpenOnNavigation":true
      };
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
      })(document, window.kommunicate || {});
},[])
  return (
    <div>
      
    
    </div>
  )
}

export default Chat
