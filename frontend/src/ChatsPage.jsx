/* eslint-disable react/prop-types */
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('4aaad1f9-87d8-451c-b6f0-f3db0fb2d3e5', props.user.username, props.user.secret);
    return (
        <div style={{ height: '100vh' }}>
            <MultiChatSocket {...chatProps} style={{ height: '100%'}} />
            <MultiChatWindow {...chatProps} />
        </div>
    )
};
export default ChatsPage;