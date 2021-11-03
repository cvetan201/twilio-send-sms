import React from 'react';
import { FlexPlugin } from 'flex-plugin';
import { View } from '@twilio/flex-ui';
import SendMessageView from './SendMessageView';
import SendMessageButton from './SendMessageButton';

const PLUGIN_NAME = 'SendMessagePlugin';

export default class SendMessagePlugin extends FlexPlugin {
    constructor() {
        super(PLUGIN_NAME);
    }

    /**
     * This code is run when your plugin is being started
     * Use this to modify any UI components or attach to the actions framework
     *
     * @param flex { typeof import('@twilio/flex-ui') }
     * @param manager { import('@twilio/flex-ui').Manager }
     */
    init(flex, manager) {
        flex.SideNav.Content.add(
            <SendMessageButton key="send-message-button"></SendMessageButton>
        );

        flex.ViewCollection.Content.add(
            <View name="send-message" key="send-message">
                <SendMessageView />
            </View>
        )
    }
}
