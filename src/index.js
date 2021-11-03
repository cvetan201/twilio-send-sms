import * as FlexPlugin from 'flex-plugin';
import SendSmsPlugin from './SendSmsPlugin';
import SendMessagePlugin from './SendMessagePlugin';
import * as serviceWorker from './serviceWorker';


FlexPlugin.loadPlugin(SendMessagePlugin);
serviceWorker.unregister();