import React, { useState, useCallback, useEffect } from 'react';
import { Container, Header, Icons, RowView, Text } from '../../components';
import { View } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import {
  Bubble,
  GiftedChat,
  InputToolbar,
  Send,
} from 'react-native-gifted-chat';
import { styles } from './index.styles';
import { TextWeights } from '../../config';
import { attachment_icon, microphone_icon } from '../../assets/icons';
import { styles } from './index.styles';
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
          <RowView justifyContent={'space-between'}>
            <Text
              ml={5}
              size={SIZES.h14}
              weight={TextWeights.medium}
              text={currentMessage.user.name}
              color={position === 'left' ? COLORS.white : COLORS.primary}
            />
            <Text
              size={SIZES.h11}
              color={
                position === 'left'
                  ? 'rgba(255, 255, 255, 0.8)'
                  : 'rgba(119, 119, 119, 0.8)'
              }
              text={new Date(currentMessage.createdAt).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            />
          </RowView>
        )}
        wrapperStyle={{
          right: styles.rightBubbleStyle,
          left: styles.leftBubbleStyle,
        }}
        textStyle={{
          right: styles.rightText,
          left: styles.leftText,
        }}
        timeTextStyle={{
          right: {
            color: COLORS.gray,
          },
          left: { color: COLORS.white },
        }}
      />
    );
  };
  console.log('hey');
  const renderInputToolbar = props => (
    <InputToolbar
      {...props}
      containerStyle={{
        borderRadius: 12,
      }}
    />
  );

  const renderSend = props => (
    <Send
      {...props}
      containerStyle={{
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: SIZES.padding2 + 4,
      }}
    >
      <RowView gap={20}>
        <Icons name={microphone_icon} color={COLORS.primary} />
        <Icons name={attachment_icon} color={COLORS.primary} />
      </RowView>
    </Send>

    // <RowView style={{ alignItems: 'center', marginRight: SIZES.padding2 }}>
    //   <Icons name={microphone_icon} color={COLORS.primary} />
    //   <Icons name={attachment_icon} color={COLORS.primary} />

    //   <Send {...props}>
    //     <View style={{ marginBottom: 5 }}>
    //       <Icons name="send" color={COLORS.primary} />
    //     </View>
    //   </Send>
    // </RowView>
  );

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
          showUserAvatar={false}
          renderAvatar={null}
          renderTime={() => null}
          renderSend={renderSend}
          alwaysShowSend
        />
      </View>
    </Container>
  );
};

export default Chat;
