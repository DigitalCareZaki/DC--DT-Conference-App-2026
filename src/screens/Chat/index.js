import React, { useState, useCallback, useEffect } from 'react';
import { Container, Header, Icons, Text } from '../../components';
import { View } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import {
  Bubble,
  GiftedChat,
  InputToolbar,
  Send,
} from 'react-native-gifted-chat';
import { styles } from './index.styles';
import { call_icon } from '../../assets/icons';
import { TextWeights } from '../../config';
const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'Sidra Azher',
        },
      },
      {
        _id: 2,
        text: 'Hi Sidra!',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Muhammad Ali',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const renderBubble = props => {
    const { currentMessage, position } = props;

    return (
      <Bubble
        {...props}
        renderCustomView={() => (
          <>
            <Text
              ml={5}
              size={SIZES.h14}
              weight={TextWeights.medium}
              text={currentMessage.user.name}
              color={position === 'left' ? COLORS.white : COLORS.primary}
            />
          </>
        )}
        wrapperStyle={{
          right: {
            backgroundColor: COLORS.white,
            borderBottomRightRadius: 0,
            padding: 5,
            marginBottom: 5,
          },
          left: {
            backgroundColor: COLORS.primary,
            borderBottomLeftRadius: 0,
            padding: 5,
            marginBottom: 5,
          },
        }}
        textStyle={{
          right: {
            color: COLORS.placeholder_text_color,
          },
          left: {
            color: 'rgba(255, 255, 255, 0.8)',
          },
        }}
        timeTextStyle={{
          right: { color: COLORS.gray },
          left: { color: COLORS.white },
        }}
      />
    );
  };

  const renderInputToolbar = props => (
    <InputToolbar
      {...props}
      containerStyle={{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        margin: 10,
        padding: 5,
      }}
    />
  );

  //   const renderSend = props => (
  //     <Send {...props}>
  //       <View style={{ marginRight: 10, marginBottom: 5 }}>
  //         <Icons name={call_icon} />
  //       </View>
  //     </Send>
  //   );

  return (
    <Container>
      <Header title={'Muhammad Ali'} color={COLORS.white} />

      <View style={styles.main_view}>
        <GiftedChat
          messages={messages}
          onSend={messages => onSend(messages)}
          user={{ _id: 1, name: 'Sidra Azher' }}
          renderBubble={renderBubble}
          renderInputToolbar={renderInputToolbar}
          renderUsernameOnMessage={true}
          showUserAvatar={false}
          renderAvatar={null}
          //   renderSend={renderSend}
          alwaysShowSend
        />
      </View>
    </Container>
  );
};

export default Chat;
