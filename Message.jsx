// import React, { useState, useEffect, useRef } from "react";
// import {
//   Box,
//   Card,
//   Avatar,
//   Typography,
//   TextField,
//   IconButton,
// } from "@mui/material";
// import SendIcon from "@mui/icons-material/Send";
// import MicIcon from "@mui/icons-material/Mic";
// import StopIcon from "@mui/icons-material/Stop";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// // Simulated API fetch for users
// const fetchUsers = async () => [
//   { id: 1, name: "Alice", avatar: "https://i.pravatar.cc/150?img=1" },
//   { id: 2, name: "Bob", avatar: "https://i.pravatar.cc/150?img=2" },
//   { id: 3, name: "Charlie", avatar: "https://i.pravatar.cc/150?img=3" },
//   { id: 4, name: "David", avatar: "https://i.pravatar.cc/150?img=4" },
//   { id: 5, name: "Eve", avatar: "https://i.pravatar.cc/150?img=5" },
// ];

// // Mock AI response
// const fetchAIResponse = async (message) =>
//   new Promise((resolve) =>
//     setTimeout(() => resolve(`I heard "${message}"`), 1200)
//   );

// export default function MultiUserChat() {
//   const [users, setUsers] = useState([]);
//   const [activeUserId, setActiveUserId] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
//   const [isRecording, setIsRecording] = useState(false);
//   const [mediaRecorder, setMediaRecorder] = useState(null);
//   const audioChunksRef = useRef([]);
//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     fetchUsers().then((data) => {
//       setUsers(data);
//       setActiveUserId(data[0]?.id || null);
//     });
//   }, []);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const addMessage = (msg) => setMessages((prev) => [...prev, msg]);

//   const handleSendMessage = async () => {
//     if (!newMessage.trim() || !activeUserId) return;

//     // User message
//     const userMsg = {
//       id: Date.now(),
//       userId: activeUserId,
//       type: "text",
//       body: newMessage,
//     };
//     addMessage(userMsg);
//     setNewMessage("");

//     // AI response (hidden from sidebar)
//     const aiResponse = await fetchAIResponse(newMessage);
//     addMessage({
//       id: Date.now() + 1,
//       userId: null, // AI has no userId
//       type: "text",
//       body: aiResponse,
//     });
//   };

//   const startRecording = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//       const recorder = new MediaRecorder(stream);
//       setMediaRecorder(recorder);
//       audioChunksRef.current = [];

//       recorder.ondataavailable = (e) => audioChunksRef.current.push(e.data);
//       recorder.onstop = async () => {
//         const blob = new Blob(audioChunksRef.current, { type: "audio/webm" });
//         const audioURL = URL.createObjectURL(blob);

//         addMessage({ id: Date.now(), userId: activeUserId, type: "voice", body: audioURL });

//         const aiResponse = await fetchAIResponse("voice message sent");
//         addMessage({ id: Date.now() + 1, userId: null, type: "text", body: aiResponse });
//       };

//       recorder.start();
//       setIsRecording(true);
//     } catch (err) {
//       toast.error("Microphone access denied!");
//     }
//   };

//   const stopRecording = () => {
//     if (mediaRecorder) {
//       mediaRecorder.stop();
//       setIsRecording(false);
//     }
//   };

//   return (
//     <Box display="flex" gap={2} maxWidth="900px" mx="auto" mt={4}>
//       <ToastContainer position="top-right" autoClose={2000} />

//       {/* Sidebar Users */}
//       <Card sx={{ width: 200, p: 2 }}>
//         <Typography variant="subtitle1" mb={1}>Users</Typography>
//         {users.map((user) => (
//           <Box
//             key={user.id}
//             display="flex"
//             alignItems="center"
//             gap={1}
//             p={1}
//             mb={1}
//             sx={{
//               cursor: "pointer",
//               bgcolor: user.id === activeUserId ? "primary.light" : "transparent",
//               borderRadius: 1,
//             }}
//             onClick={() => setActiveUserId(user.id)}
//           >
//             <Avatar src={user.avatar} />
//             <Typography variant="body2">{user.name}</Typography>
//           </Box>
//         ))}
//       </Card>

//       {/* Chat Area */}
//       <Card sx={{ flex: 1, p: 2, display: "flex", flexDirection: "column", maxHeight: 600 }}>
//         <Box sx={{ flex: 1, overflowY: "auto", mb: 1 }}>
//           {messages
//             .filter((msg) => msg.userId === activeUserId || msg.userId === null)
//             .map((msg) => {
//               const isUser = msg.userId === activeUserId;
//               const isAI = msg.userId === null;
//               const sender = users.find((u) => u.id === msg.userId);

//               return (
//                 <Box
//                   key={msg.id}
//                   display="flex"
//                   justifyContent={isUser ? "flex-end" : "flex-start"}
//                   mb={1}
//                 >
//                   <Box
//                     sx={{
//                       p: 1.5,
//                       borderRadius: 2,
//                       bgcolor: isUser ? "primary.main" : "grey.300",
//                       color: isUser ? "white" : "black",
//                       maxWidth: "70%",
//                     }}
//                   >
//                     {msg.type === "text" ? (
//                       <Typography variant="body2">{msg.body}</Typography>
//                     ) : (
//                       <audio controls src={msg.body} />
//                     )}
//                     {sender && !isAI && (
//                       <Typography variant="caption" display="block">{sender.name}</Typography>
//                     )}
//                   </Box>
//                 </Box>
//               );
//             })}
//           <div ref={messagesEndRef} />
//         </Box>

//         <Box display="flex" gap={1}>
//           <TextField
//             fullWidth
//             size="small"
//             placeholder="Type a message..."
//             value={newMessage}
//             onChange={(e) => setNewMessage(e.target.value)}
//             onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
//           />
//           <IconButton color="primary" onClick={handleSendMessage}><SendIcon /></IconButton>
//           {!isRecording ? (
//             <IconButton color="secondary" onClick={startRecording}><MicIcon /></IconButton>
//           ) : (
//             <IconButton color="error" onClick={stopRecording}><StopIcon /></IconButton>
//           )}
//         </Box>
//       </Card>
//     </Box>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Card,
  Avatar,
  Typography,
  TextField,
  IconButton,
  Button,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MicIcon from "@mui/icons-material/Mic";
import StopIcon from "@mui/icons-material/Stop";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  saveMessage,
  getMessages,
} from "./InvestorDB";

// Simulated API fetch for users
const fetchUsers = async () => [
  { id: 1, name: "Alice", avatar: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "Bob", avatar: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "Charlie", avatar: "https://i.pravatar.cc/150?img=3" },
  { id: 4, name: "David", avatar: "https://i.pravatar.cc/150?img=4" },
  { id: 5, name: "Eve", avatar: "https://i.pravatar.cc/150?img=5" },
];

// Mock AI response
const fetchAIResponse = async (message) =>
  new Promise((resolve) =>
    setTimeout(() => resolve(`I heard "${message}"`), 1200)
  );

export default function MultiUserChat() {
  const [users, setUsers] = useState([]);
  const [activeUserId, setActiveUserId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const audioChunksRef = useRef([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data);
      setActiveUserId(data[0]?.id || null);
    });
  }, []);

  useEffect(() => {
  if (!activeUserId) return;
  (async () => {
    const stored = await getMessages(activeUserId);
    setMessages(stored);
  })();
}, [activeUserId]);



  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const addMessage = async (msg) => {
    setMessages((prev) => [...prev, msg]);
    await saveMessage(activeUserId, msg.id, msg);
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !activeUserId) return;

    const userMsg = {
      id: Date.now(),
      userId: activeUserId,
      type: "text",
      body: newMessage,
    };
    addMessage(userMsg);
    setNewMessage("");

    const aiResponse = await fetchAIResponse(newMessage);
    await addMessage({
      id: Date.now() + 1,
      userId: null,
      type: "text",
      body: aiResponse,
    });
  };

  // Handle File Upload
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file || !activeUserId) return;

    const fileURL = URL.createObjectURL(file);
    const messageType = file.type.startsWith("image/")
      ? "image"
      : "file";

    addMessage({
      id: Date.now(),
      userId: activeUserId,
      type: messageType,
      body: fileURL,
      fileName: file.name,
    });

    // AI mock response
    const aiResponse = await fetchAIResponse(`shared a ${file.type}`);
    await addMessage({
      id: Date.now() + 1,
      userId: null,
      type: "text",
      body: aiResponse,
    });
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      setMediaRecorder(recorder);
      audioChunksRef.current = [];

      recorder.ondataavailable = (e) => audioChunksRef.current.push(e.data);
      recorder.onstop = async () => {
        const blob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        const audioURL = URL.createObjectURL(blob);

        await addMessage({
          id: Date.now(),
          userId: activeUserId,
          type: "voice",
          body: audioURL,
        });

        const aiResponse = await fetchAIResponse("voice message sent");
        await addMessage({
          id: Date.now() + 1,
          userId: null,
          type: "text",
          body: aiResponse,
        });
      };

      recorder.start();
      setIsRecording(true);
    } catch (err) {
      toast.error("Microphone access denied!");
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  return (
    <Box display="flex" gap={2} maxWidth="900px" mx="auto" mt={4}>
      <ToastContainer position="top-right" autoClose={2000} />

      {/* Sidebar Users */}
      <Card sx={{ width: 200, p: 2 }}>
        <Typography variant="subtitle1" mb={1}>Users</Typography>
        {users.map((user) => (
          <Box
            key={user.id}
            display="flex"
            alignItems="center"
            gap={1}
            p={1}
            mb={1}
            sx={{
              cursor: "pointer",
              bgcolor: user.id === activeUserId ? "primary.light" : "transparent",
              borderRadius: 1,
            }}
            onClick={() => setActiveUserId(user.id)}
          >
            <Avatar src={user.avatar} />
            <Typography variant="body2">{user.name}</Typography>
          </Box>
        ))}
      </Card>

      {/* Chat Area */}
      <Card sx={{ flex: 1, p: 2, display: "flex", flexDirection: "column", maxHeight: 600 }}>
        <Box sx={{ flex: 1, overflowY: "auto", mb: 1 }}>
          {messages
            .filter((msg) => msg.userId === activeUserId || msg.userId === null)
            .map((msg) => {
              const isUser = msg.userId === activeUserId;
              return (
                <Box
                  key={msg.id}
                  display="flex"
                  justifyContent={isUser ? "flex-end" : "flex-start"}
                  mb={1}
                >
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: 2,
                      bgcolor: isUser ? "primary.main" : "grey.300",
                      color: isUser ? "white" : "black",
                      maxWidth: "70%",
                    }}
                  >
                    {msg.type === "text" && <Typography variant="body2">{msg.body}</Typography>}
                    {msg.type === "voice" && <audio controls src={msg.body} />}
                    {msg.type === "image" && (
                      <img src={msg.body} alt="shared" style={{ maxWidth: "100%", borderRadius: 8 }} />
                    )}
                    {msg.type === "file" && (
                      <a href={msg.body} target="_blank" rel="noopener noreferrer" style={{ color: isUser ? "yellow" : "blue" }}>
                        📄 {msg.fileName}
                      </a>
                    )}
                  </Box>
                </Box>
              );
            })}
          <div ref={messagesEndRef} />
        </Box>

        {/* Input Section */}
        <Box display="flex" gap={1}>
          <TextField
            fullWidth
            size="small"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <IconButton color="primary" onClick={handleSendMessage}><SendIcon /></IconButton>

          {/* File Upload */}
          <input type="file" id="file-input" style={{ display: "none" }} onChange={handleFileUpload} />
          <label htmlFor="file-input">
            <IconButton color="default" component="span">
              <AttachFileIcon />
            </IconButton>
          </label>

          {!isRecording ? (
            <IconButton color="secondary" onClick={startRecording}><MicIcon /></IconButton>
          ) : (
            <IconButton color="error" onClick={stopRecording}><StopIcon /></IconButton>
          )}
        </Box>
      </Card>
    </Box>
  );
}
