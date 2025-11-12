import React, { useEffect } from 'react';
import { Container, Header, InputField, RowView, Text } from '../../components';
import { TouchableOpacity, View } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import { Bubble, GiftedChat } from 'react-native-gifted-chat';
import { styles } from './index.styles';
import { TextWeights } from '../../config';
import io from 'socket.io-client';
import ChatFunctional from './index.function';
import { getToken } from '../../utils/functions';

const Chat = ({ route }) => {
  const { name, participants, id } = route?.params?.user;
  const {
    messages,
    setMessages,
    isFirstTime,
    setIsFirstTime,
    user,
    setChatId,
    chatId,
    setMsg,
    msg,
    setSocket,
    mySocket,
    receiverID,
  } = ChatFunctional({ participants });

  let socket;

  const connectSocket = async () => {
    const token = await getToken();
    socket = io(`http://51.83.237.63:5051?token=${token}`);
    setSocket(socket);

    socket.on('connect', () => {
      socket.emit('create-chat', { receiverId: receiverID }, msgs => {});

      socket.emit('read-messages', { chatId: id });
    });

    socket.on('chat-created', msgs => {
      setChatId(msgs?.chat?._id);

      if (isFirstTime) {
        const array = msgs?.messageHistory?.map(item => {
          return {
            _id: item?._id,
            text: item?.message,
            createdAt: new Date(item?.createdAt),
            user: {
              _id: item?.sender,
            },
            type: item?.type,
          };
        });
        setMessages(array?.sort((a, b) => b?.createdAt - a?.createdAt));
        setIsFirstTime(false);
      }
    });

    socket.on('new-message', msg => {
      const obj = {
        _id: msg?.message?._id,
        text: msg?.message?.message ?? '',
        createdAt: new Date(msg?.message?.createdAt),
        user: { _id: msg?.message?.sender },
        type: msg?.message?.type,
      };

      setMessages(prev => GiftedChat.append(prev, [obj]));
    });
  };

  const onSend = () => {
    if (!msg || !msg.length) return;

    const message = {
      chatId: chatId,
      message: msg?.trim() || '',
      type: 'text',
    };
    mySocket?.emit('send-message', message);
    setMsg('');
  };

  useEffect(() => {
    connectSocket();
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

  const renderTextInput = props => {
    return (
      <RowView style={styles.inputContainer}>
        <View style={styles.input_view}>
          <InputField
            mainStyle={{ marginTop: 0 }}
            style={styles.input}
            placeholder={'Type a message'}
            onChangeText={setMsg}
            value={msg || ''}
          />
        </View>
        <TouchableOpacity onPress={onSend}>
          <Text color={COLORS.primary} text={'Send'} />
        </TouchableOpacity>
      </RowView>
    );
  };

  return (
    <Container>
      <Header title={name} rightIcon={null} />

      <View style={styles.main_view}>
        <GiftedChat
          messages={messages}
          user={{ _id: user?._id }}
          renderBubble={renderBubble}
          showUserAvatar={false}
          renderTime={() => null}
          renderAvatar={null}
          renderComposer={renderTextInput}
          listViewProps={{ showsVerticalScrollIndicator: false }}
          // renderInputToolbar={renderInputToolbar}
        />
      </View>
    </Container>
  );
};

export default Chat;
