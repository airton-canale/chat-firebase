import React, { useEffect, useRef } from "react";
import { auth, db } from "../../services/firebase";
import * as C from "./styles";
import { useCollection } from "react-firebase-hooks/firestore";
import Message from "../Message";
import { useAuthState } from "react-firebase-hooks/auth";
import { getMessaging, onMessage } from "firebase/messaging";

const ChatBody = ({ chatId }) => {
  const [userLoggedIn] = useAuthState(auth);

  const [messagesRes] = useCollection(
    db
      .collection("chats")
      .doc(chatId)
      .collection("messages")
      .orderBy("timestamp", "asc")
  );

  const refBody = useRef("");

  useEffect(() => {
    const messaging = getMessaging();
    onMessage(messaging, (payload) => console.log("chegou", payload));
  }, [onMessage, getMessaging]);

  useEffect(() => {
    if (refBody.current.scrollHeight > refBody.current.offsetHeight) {
      refBody.current.scrollTo({
        top: refBody.current.scrollHeight - refBody.current.offsetHeight,
        behavior: "smooth",
      });
    }
  }, [messagesRes]);

  return (
    <C.Container ref={refBody}>
      {messagesRes?.docs.map((message) => (
        <Message
          key={message.id}
          user={message.data().user}
          message={{
            message: message.data().message,
            timestamp: message.data().timestamp?.toDate().getTime(),
          }}
        />
      ))}
    </C.Container>
  );
};

export default ChatBody;
