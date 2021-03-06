import moment from "moment";
import { useAuthState } from 'react-firebase-hooks/auth';
import styled from 'styled-components';
import { auth } from '../firebase';


function Message({ user, message }) {


    const [currentUser] = useAuthState(auth);
    const MessageType = user === currentUser.email ? Sender : Reciever;

    return (
        <MessageType ontainer>
            {message.message}
            <Timestamp>
                {message.timestamp ? moment(message.timestamp).format('LT') : '...'}
            </Timestamp>
        </MessageType >
    )
}

export default Message;

const Container = styled.div`
/* background-color: yellow; */
`;

const MessageElement = styled.p`
width: fit-content;
padding: 15px;
border-radius: 8px;
margin: 10px;
min-width: 60px;
padding-bottom: 26px;
position: relative;
text-align: right;
`;

const Sender = styled(MessageElement)`
margin-left: auto;
background-color: #dcf8c6;
`;

const Reciever = styled(MessageElement)`
text-align: left;
background-color: whitesmoke;
`;

const Timestamp = styled.span`
color: grey;
padding: 10px;
font-size: 9px;
position: absolute;
bottom: 0;
text-align: right;
right: 0;
`;