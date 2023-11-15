import { useState } from 'react';
import PropTypes from 'prop-types';
import ChatbotContainer from './ChatbotContainer';
import ChatbotContents from './ChatbotContents';

const virtualAssistantConfigurations = {
  'AMY Communications': {
    name: 'Amy',
    avatar: 'https://i.imgur.com/7YTMFQp.png',
    context: [
      { role: 'system', content: 'You are a helpful assistant named AMY.' },
      { role: 'system', content: 'Do not guess an answer to a question' },
      {
        role: 'system',
        content:
          'If the person is trying to get in touch with a representative say " Let me forward you to a representative"',
      },
    ],
    intro:
      "Hi, I'm Amy. I'm here to help you with any questions you have about our products. You can ask me anything you want. I'll try my best to answer your questions. If I don't know the answer, I'll forward you to a representative who can help you.",
  },
};

const Chatbot = ({ botName, showChatbot, hideChatbot }) => {
  const [virtualAssistantConfiguration, setVirtualAssistantConfiguration] = useState(
    virtualAssistantConfigurations['AMY Communications']
  );

  return (
    <ChatbotContainer showChatbot={showChatbot} hideChatbot={hideChatbot}>
      <ChatbotContents
        botName={botName}
        virtualAssistantConfiguration={virtualAssistantConfiguration}
      />
    </ChatbotContainer>
  );
};

Chatbot.propTypes = {
  botName: PropTypes.string.isRequired,
  showChatbot: PropTypes.bool.isRequired,
  hideChatbot: PropTypes.func.isRequired,
};

export default Chatbot;
