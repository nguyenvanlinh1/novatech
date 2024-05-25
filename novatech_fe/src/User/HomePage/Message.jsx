import React, { useEffect, useState } from "react";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Input,
  Popover,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LinkIcon from "@mui/icons-material/Link";
import SendIcon from "@mui/icons-material/Send";
import { deepPurple } from "@mui/material/colors";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { createChat, getUsersChat } from "../../State/User/Chat/Action";
import { createMessage, getAllMessages } from "../../State/User/Message/Action";

import SockJS from "sockjs-client/dist/sockjs";
import { over } from "stompjs";

const formatTimeDifference = (pastDate) => {
  const now = new Date();
  const past = new Date(pastDate);
  const diffInMs = now - past;

  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInMinutes < 60) {
    return `${diffInMinutes} phút trước`;
  } else if (diffInHours < 24) {
    return `${diffInHours} giờ trước`;
  } else {
    return `${diffInDays} ngày trước`;
  }
};

const Message = () => {
  const { chat } = useSelector((store) => store);
  const { message } = useSelector((store) => store);
  // console.log("Mes", message);
  // console.log("Chat", chat);
  // const [currentChat, setCurrentChat] = useState(null);
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const jwt = localStorage.getItem("jwt");

  // Tạo tham chiếu để kích hoạt input file
  const fileInputRef = React.createRef();

  //   const [stompClient, setStompClient] = useState();
  //   const [isconnect, setIsConnect] = useState(false);
  //   const [messages, setMessages] = useState([]);

  //   const connect = () => {
  //     const sock = new SockJS("http://localhost:6789/ws");
  //     const temp = over(sock);

  //     const xsrfToken = getCookie("XSRF-TOKEN");
  //     console.log("D", xsrfToken);

  //     // Kiểm tra xem JWT và XSRF-TOKEN có hợp lệ không
  //     if (!jwt || !xsrfToken) {
  //       console.error("Missing JWT or XSRF-TOKEN");
  //       return;
  //     }

  //     setStompClient(temp);
  //     const headers = {
  //       Authorization: `Bearer ${jwt}`,
  //       "X-XSRF-TOKEN": xsrfToken,
  //     };

  //     temp.connect(headers, onConnect, onError);
  //   };

  //   function getCookie(name) {
  //     const value = `; ${document.cookie}`;
  //     const parts = value.split(`; ${name}=`);
  //     if (parts.length === 2) return parts.pop().split(';').shift();
  //     return null;
  // }

  //   const onError = (error) => {
  //     console.log("No error", error);
  //   };

  //   const onConnect = () => {
  //     setIsConnect(true);
  //   };
  //   useEffect(() => {
  //     if (message.newMessage && message.newMessage.result && stompClient) {
  //       setMessages([...messages, message.newMessage.result]);
  //       stompClient?.send(
  //         "/app/message",
  //         {},
  //         JSON.stringify(message.newMessage && message.newMessage.result)
  //       );
  //     }
  //   }, message.newMessage && message.newMessage.result);

  //   const onMessageReceive = (payload) => {
  //     console.log("Recive Message", JSON.parse(payload.body));

  //     const receivedMessage = JSON.parse(payload.body);
  //     setMessages([...messages, receivedMessage]);
  //   };

  //   const currentChat = chat.chats && chat.chats.result[0].chatId;
  //   // console.log(currentChat)
  //   useEffect(() => {
  //     if (isconnect && stompClient) {
  //       const subscription = stompClient.subscribe(
  //         "/goup/" + currentChat.toString(),
  //         onMessageReceive
  //       );

  //       return () => {
  //         subscription.unsubscribe();
  //       };
  //     }
  //   });

  //   useEffect(() => {
  //     connect();
  //   }, []);

  //   useEffect(() => {
  //     setMessages(message.messages);
  //   }, [message.messages]);

  const handleClickOnChatCard = (userId) => {
    dispatch(createChat({ jwt, data: { userId } }));
  };

  console.log("Chat", chat);

  useEffect(() => {
    dispatch(getUsersChat({ jwt }));
  }, [chat.createChat]);

  useEffect(() => {
    if (chat.chats === null) {
      dispatch(
        getAllMessages({
          chatId: chat.chats && chat.chats.result[0].chatId,
          jwt,
        })
      );
    }
  }, [chat.chats && chat.chats.result, message.newMessage]);

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const handleCreateNewMessage = () => {
    dispatch(
      createMessage({
        jwt,
        data: { chatId: chat.chats.result[0].chatId, content: content },
      })
    );
    setContent("");
  };

  //console.log(message)

  const handleCreateChat = (userId) => {};

  return (
    <div className="relative">
      <div onClick={() => handleClickOnChatCard(21)}>
        <Avatar
          id="demo-positioned-button"
          aria-controls={open ? "demo-positioned-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          className="relative cursor-pointer"
          sx={{ padding: 3.5, bgcolor: deepPurple[500] }}
        >
          <span className="text-xl">
            <ChatBubbleIcon />
          </span>
        </Avatar>
        <button className="absolute -top-3 -right-3">
          <CloseIcon sx={{ fontSize: 15, color: deepPurple[500] }} />
        </button>
      </div>

      <Popover
        id="demo-positioned-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Card className="w-80">
          <CardHeader
            avatar={<ArrowBackIcon />}
            title={
              <Box>
                <Typography variant="h6">NOVATECH</Typography>
                <p className="">
                  Hãy hỏi bất cứ điều gì hoặc chia sẻ phản hồi của bạn liên quan
                  đến SP
                </p>
              </Box>
            }
            action={
              <Button onClick={handleClose} sx={{ color: "#333" }}>
                <CloseIcon />
              </Button>
            }
          />

          <CardContent className="h-80" sx={{ overflowY: "scroll" }}>
            {message.messages &&
              message.messages.result &&
              message.messages.result.map((item, index) =>
                item.user.userId === 21 ? (
                  <div className="chat chat-start text-xs">
                    <div className="chat-image avatar">
                      <div className="w-10 rounded-full">
                        <img
                          alt="Tailwind CSS chat bubble component"
                          src="https://avatar.iran.liara.run/public/22"
                        />
                      </div>
                    </div>
                    <div className="chat-header">
                      {item.user.email.split("@")[0]}
                      <time className="text-xs opacity-50">
                        {formatTimeDifference(item.timestamp)}
                      </time>
                    </div>
                    <div className="chat-bubble">{item.content}</div>
                  </div>
                ) : (
                  <div className="chat chat-end text-xs">
                    <div className="chat-image avatar">
                      <div className="w-10 rounded-full">
                        <img
                          alt="Tailwind CSS chat bubble component"
                          src="https://avatar.iran.liara.run/public/23"
                        />
                      </div>
                    </div>
                    <div className="chat-header">
                      {item.user.email}
                      <time className="text-xs opacity-50">
                        {formatTimeDifference(item.timestamp)}
                      </time>
                    </div>
                    <div className="chat-bubble">{item.content}</div>
                  </div>
                )
              )}
          </CardContent>

          <CardActions>
            <Grid container alignItems={"center"}>
              <Grid item xs={8}>
                <TextField
                  variant="standard"
                  placeholder="Nhập tin nhắn..."
                  fullWidth
                  sx={{ width: "200px" }}
                  name="content"
                  value={content}
                  onChange={handleContent}

                  // value={input}
                  // onChange={(e) => setInput(e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="text"
                  component="label"
                  onClick={() => fileInputRef.current.click()}
                  sx={{ color: "#333" }}
                >
                  <LinkIcon />
                </Button>
                <Input
                  type="file"
                  inputRef={fileInputRef}
                  style={{ display: "none" }}
                />
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="text"
                  endIcon={<SendIcon />}
                  onClick={handleCreateNewMessage}
                ></Button>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </Popover>
    </div>
  );
};

export default Message;