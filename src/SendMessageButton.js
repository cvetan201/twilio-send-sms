import React from "react";
import { SideLink, Actions, DefaultTaskChannels } from "@twilio/flex-ui";

const SendMessageButton = ({ activeView }) => {
    function navigate() {
        Actions.invokeAction('NavigateToView', { viewName: 'send-message' });
    }

    return (
        <SideLink
        showLabel={true}
        icon = "Data"
        iconActive={activeView === 'send-message'}
        onClick={navigate}>
            Send Message
        </SideLink>
    );
};

export default SendMessageButton;