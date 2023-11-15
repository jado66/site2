import { useState, useRef, useEffect } from 'react';
// Import styles from chat-ui-kit-styles
import _styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';

// Import components from chat-ui-kit-react
import {
  MainContainer,
  Button,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
  SendButton,
} from '@chatscope/chat-ui-kit-react';
import Stack from '@mui/material/Stack';

const ChatbotContents = ({ botName, virtualAssistantConfiguration }) => {
  const [isAmyTyping, setIsAmyTyping] = useState(false);
  const inputRef = useRef();

  const [threadId, setThreadId] = useState(null);

  const [msgInputValue, setMsgInputValue] = useState('');

  const [messages, setMessages] = useState([]);

  const [isStoredMessages, setIsStoredMessages] = useState(false);

  const sendInitialMessage = () => {
    console.log('sending initial message');

    // if (messages.length !== 0){
    //     return
    // }

    setIsAmyTyping(true);

    // wait 1 second before sending message
    setTimeout(() => {
      setIsAmyTyping(false);
      setMessages((prevstate) => [
        ...prevstate,
        {
          message: virtualAssistantConfiguration.intro,
          direction: 'incoming',
        },
      ]);
    }, 1000);
  };

  const grabStoredMessages = () => {
    const storedMessages = JSON.parse(localStorage.getItem(botName + '_messages'));
    const storedThreadId = localStorage.getItem(botName + '_threadId');
    setMessages(storedMessages);
    setThreadId(storedThreadId);
    setIsStoredMessages(false);
  };

  const handleSend = async (message) => {
    setIsAmyTyping(true);
    setMessages((prevstate) => [
      ...prevstate,
      {
        message,
        direction: 'outgoing',
      },
    ]);
    setMsgInputValue('');
    inputRef.current.focus();

    let responseObject = await fetch('/api/chat-bot/amy-response', {
      method: 'POST',
      body: JSON.stringify({ threadId, message }),
    });
    responseObject = await responseObject.json();

    if (!threadId) {
      setThreadId(responseObject.threadId);
      localStorage.setItem(botName + '_threadId', responseObject.threadId);
    }

    setIsAmyTyping(false);
    setMessages((prevstate) => [
      ...prevstate,
      {
        message: responseObject.message,
        direction: 'incoming',
      },
    ]);
  };

  const dontLoadStoredMessages = () => {
    setIsStoredMessages(false);
    clearMessages();
    sendInitialMessage();
  };

  const clearMessages = (dontRemoveMessages = false, isSendInitialMessage = false) => {
    // if (messages.length === 0){
    //     return
    // }

    setMessages([]);

    if (!dontRemoveMessages) {
      localStorage.removeItem(botName + '_messages');
      localStorage.removeItem(botName + '_threadId');
      setIsStoredMessages(false);
    }

    if (isSendInitialMessage) {
      sendInitialMessage();
    }
  };

  // When botName changes, check if there are stored messages, if so, grab them
  useEffect(() => {
    // If there are no stored messages, check if there are stored messages
    const storedMessages = JSON.parse(localStorage.getItem(botName + '_messages'));

    if (storedMessages) {
      if (storedMessages.length !== 0) {
        setIsStoredMessages(true);
      }
      return;
    }

    console.log(botName);
    sendInitialMessage();
  }, [botName, sendInitialMessage]);

  useEffect(() => {
    if (messages.length <= 1) {
      return;
    }

    localStorage.setItem(botName + '_messages', JSON.stringify(messages));
  }, [messages, botName]);

  return (
    <Stack
      direction="column"
      justifyContent="flex-end"
      alignItems="stretch"
      spacing={2}
      sx={{
        position: 'relative',
        flexGrow: 1,
        overflow: 'auto',
      }}
    >
      <MainContainer>
        <ChatContainer>
          <MessageList autoScrollToBottom autoScrollToBottomOnMount>
            {messages.length === 0 && isStoredMessages && (
              <Message.CustomContent>
                <div className="btn-group my-2 w-100" role="group" aria-label="Basic example">
                  <Button
                    type="button"
                    className="btn btn-outline-info text-dark"
                    onClick={grabStoredMessages}
                  >
                    Load previous conversation
                  </Button>
                  <Button
                    type="button"
                    className="btn btn-outline-info border-start-0 d-flex align-items-center justify-content-center text-dark"
                    onClick={dontLoadStoredMessages}
                  >
                    X
                  </Button>
                </div>
              </Message.CustomContent>
            )}

            {messages.map((m) => (
              <Message key={m.id} model={m} />
            ))}
            {isAmyTyping && (
              <TypingIndicator
                content={`${virtualAssistantConfiguration.name} is typing`}
                className="position-inherit"
              />
            )}
          </MessageList>

          {/* <MessageInput placeholder="Type message here" onSend={m => handleSend(m)} onChange={setMsgInputValue} value={msgInputValue} ref={inputRef} /> */}
          <div
            as={MessageInput}
            style={{
              display: 'flex',
              flexDirection: 'row',
              borderTop: '1px dashed #d1dbe4',
            }}
          >
            <MessageInput
              ref={inputRef}
              onChange={(msg) => setMsgInputValue(msg)}
              value={msgInputValue}
              sendButton={false}
              attachButton={false}
              onSend={handleSend}
              style={{
                flexGrow: 1,
                borderTop: 0,
                flexShrink: 'initial',
              }}
            />

            <SendButton
              onClick={() => handleSend(msgInputValue)}
              disabled={msgInputValue.length === 0}
              style={{
                fontSize: '1.2em',
                marginLeft: 0,
                paddingLeft: '0.2em',
                paddingRight: '0.2em',
              }}
            />
            {/* <AttachmentButton style={{
                                fontSize: "1.2em",
                                paddingLeft: "0.2em",
                                paddingRight: "0.2em"
                                }} /> */}

            <Button
              icon={<Icon icon="carbon:close-outline" />}
              className="d-flex align-items-center me-2"
              style={{
                fontSize: '1.2em',
                paddingLeft: '0.2em',
                paddingRight: '0.2em',
              }}
              onClick={() => clearMessages(false, true)}
            />
          </div>
        </ChatContainer>
      </MainContainer>
    </Stack>
  );
};

ChatbotContents.propTypes = {
  botName: PropTypes.string.isRequired,
  virtualAssistantConfiguration: PropTypes.object.isRequired,
};

export default ChatbotContents;
