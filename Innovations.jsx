// // // src/Component/Investors webapp/Innovations.jsx
// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import {
// //   Box,
// //   Card,
// //   CardContent,
// //   CardHeader,
// //   Avatar,
// //   Typography,
// //   IconButton,
// //   TextField,
// //   Button,
// //   Divider,
// //   List,
// //   ListItem,
// //   ListItemText,
// // } from "@mui/material";
// // import { Favorite, Chat } from "@mui/icons-material";
// // import { motion } from "framer-motion";

// // export default function Innovations() {
// //   const [ideas, setIdeas] = useState([]);
// //   const [newIdea, setNewIdea] = useState("");
// //   const [search, setSearch] = useState("");
// //   const [users, setUsers] = useState([]);

// //   // Fetch dummy ideas (proof of working API)
// //   useEffect(() => {
// //     axios
// //       .get("https://jsonplaceholder.typicode.com/posts?_limit=5")
// //       .then((res) => setIdeas(res.data))
// //       .catch((err) => console.error("Error fetching ideas:", err));
// //   }, []);

// //   // Fetch dummy users for search
// //   useEffect(() => {
// //     axios
// //       .get("https://jsonplaceholder.typicode.com/users")
// //       .then((res) => setUsers(res.data))
// //       .catch((err) => console.error("Error fetching users:", err));
// //   }, []);

// //   // Add new idea
// //   const handlePostIdea = () => {
// //     if (!newIdea.trim()) return;
// //     const newPost = {
// //       id: Date.now(),
// //       title: "New Entrepreneur Idea 🚀",
// //       body: newIdea,
// //     };
// //     setIdeas([newPost, ...ideas]);
// //     setNewIdea("");
// //   };

// //   return (
// //     <Box p={3} maxWidth="800px" mx="auto">
// //       {/* Post Box */}
// //       <Card sx={{ p: 2, mb: 3 }}>
// //         <Typography variant="h6" gutterBottom>
// //           Share your innovation
// //         </Typography>
// //         <TextField
// //           fullWidth
// //           multiline
// //           minRows={2}
// //           value={newIdea}
// //           onChange={(e) => setNewIdea(e.target.value)}
// //           placeholder="Write your idea..."
// //         />
// //         <Button
// //           sx={{ mt: 2 }}
// //           variant="contained"
// //           color="primary"
// //           onClick={handlePostIdea}
// //         >
// //           To be an Entrepreneur
// //         </Button>
// //       </Card>

// //       {/* Feed (Ideas) */}
// //       {ideas.map((idea) => (
// //         <motion.div key={idea.id} whileHover={{ scale: 1.01 }}>
// //           <Card sx={{ mb: 3 }}>
// //             <CardHeader
// //               avatar={<Avatar>{idea.title.charAt(0)}</Avatar>}
// //               title={idea.title}
// //               subheader={`Idea #${idea.id}`}
// //             />
// //             <CardContent>
// //               <Typography>{idea.body}</Typography>
// //             </CardContent>
// //             <Divider />
// //             <Box display="flex" justifyContent="space-around" p={1}>
// //               <IconButton>
// //                 <Favorite color="error" />
// //               </IconButton>
// //               <IconButton>
// //                 <Chat color="primary" />
// //               </IconButton>
// //             </Box>
// //           </Card>
// //         </motion.div>
// //       ))}

// //       {/* User Search */}
// //       <Card sx={{ p: 2, mt: 3 }}>
// //         <Typography variant="h6">Search Users</Typography>
// //         <TextField
// //           fullWidth
// //           placeholder="Search by name or email..."
// //           value={search}
// //           onChange={(e) => setSearch(e.target.value)}
// //           sx={{ mb: 2 }}
// //         />
// //         <List>
// //           {users
// //             .filter(
// //               (u) =>
// //                 u.name.toLowerCase().includes(search.toLowerCase()) ||
// //                 u.email.toLowerCase().includes(search.toLowerCase())
// //             )
// //             .map((u) => (
// //               <ListItem key={u.id}>
// //                 <Avatar sx={{ mr: 2 }}>{u.name.charAt(0)}</Avatar>
// //                 <ListItemText primary={u.name} secondary={u.email} />
// //               </ListItem>
// //             ))}
// //         </List>
// //       </Card>
// //     </Box>
// //   );
// // }

// // src/Component/Investors webapp/Innovations.jsx

// // 

// import React, { useState, useRef, useEffect } from "react";
// import {
//   Box,
//   Card,
//   Avatar,
//   Typography,
//   TextField,
//   Button,
//   Modal,
//   IconButton,
// } from "@mui/material";
// import {
//   Image,
//   EmojiEmotions,
//   CalendarToday,
//   Settings,
//   Add,
//   Description,
//   Poll,
//   Close,
// } from "@mui/icons-material";
// import EmojiPicker from "emoji-picker-react";
// import dayjs from "dayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DatePicker, TimePicker } from "@mui/x-date-pickers";

// export default function Innovations() {
//   const [open, setOpen] = useState(false);
//   const [idea, setIdea] = useState("");
//   const [showEmoji, setShowEmoji] = useState(false);
//   const [media, setMedia] = useState(null);
//   const [scheduleDate, setScheduleDate] = useState(null);
//   const [scheduleTime, setScheduleTime] = useState(null);
//   const [showExtras, setShowExtras] = useState(false);
//   const [posts, setPosts] = useState([]);

//   const emojiPickerRef = useRef(null);

//   // Load posts from localStorage
//   useEffect(() => {
//     const savedPosts = JSON.parse(localStorage.getItem("innovPosts")) || [];
//     setPosts(savedPosts);
//   }, []);

//   // Save posts to localStorage
//   useEffect(() => {
//     localStorage.setItem("innovPosts", JSON.stringify(posts));
//   }, [posts]);

//   const handlePost = () => {
//     if (!idea.trim() && !media) return;

//     const newPost = {
//       id: Date.now(),
//       user: "Renuga K",
//       avatar: "https://i.pravatar.cc/150?img=5",
//       content: idea,
//       media,
//       schedule:
//         scheduleDate && scheduleTime
//           ? `${scheduleDate.format("YYYY-MM-DD")} ${scheduleTime.format("HH:mm")}`
//           : null,
//       createdAt: new Date().toLocaleString(),
//     };

//     setPosts([newPost, ...posts]); // New post on top
//     setIdea("");
//     setMedia(null);
//     setScheduleDate(null);
//     setScheduleTime(null);
//     setOpen(false);
//     setShowEmoji(false);
//     setShowExtras(false);
//   };

//   const handleEmojiClick = (emojiData) => {
//     setIdea((prev) => prev + emojiData.emoji);
//   };

//   const handleMediaUpload = (e) => {
//     const file = e.target.files[0];
//     if (file && file.size < 500 * 1024 * 1024) {
//       setMedia(URL.createObjectURL(file));
//     } else {
//       alert("File too large! Must be under 500MB.");
//     }
//   };

//   // Close emoji picker when clicked outside
//   const handleClickOutside = (e) => {
//     if (emojiPickerRef.current && !emojiPickerRef.current.contains(e.target)) {
//       setShowEmoji(false);
//     }
//   };

//   useEffect(() => {
//     if (showEmoji) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [showEmoji]);

//   // 🎉 Investor Celebration
//   const handleInvestorCelebration = () => {
//     setIdea(
//       (prev) =>
//         prev +
//         "\n🎉 Congratulations Renuga! You just got an Investor! 🚀\n"
//     );

//     // Attach confetti/investor image to post
//     setMedia(
//       "https://thumbs.dreamstime.com/b/businesspeople-hot-air-balloon-investing-money-future-profit-businessman-businesswoman-spend-much-to-wealth-assets-218099758.jpg"
//     );
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <Box p={3} maxWidth="800px" mx="auto">
//         {/* Mini share box */}
//         <Card sx={{ p: 2, mb: 3, cursor: "pointer" }} onClick={() => setOpen(true)}>
//           <Box display="flex" alignItems="center">
//             <Avatar src="https://i.pravatar.cc/150?img=5" />
//             <TextField
//               fullWidth
//               placeholder="Challenge Your Creativity"
//               sx={{ ml: 2 }}
//               InputProps={{ readOnly: true }}
//             />
//           </Box>
//         </Card>

//         {/* Post Idea Modal */}
//         <Modal
//           open={open}
//           onClose={() => {
//             setOpen(false); // Close modal but do not clear data
//           }}
//         >
//           <Box
//             sx={{
//               position: "absolute",
//               top: "50%",
//               left: "50%",
//               transform: "translate(-50%, -50%)",
//               width: 600,
//               bgcolor: "background.paper",
//               boxShadow: 24,
//               borderRadius: 3,
//               p: 3,
//             }}
//           >
//             {/* Close Button */}
//             <IconButton
//               onClick={() => setOpen(false)}
//               sx={{ position: "absolute", top: 8, right: 8 }}
//             >
//               <Close />
//             </IconButton>

//             {/* Header */}
//             <Box display="flex" alignItems="center" mb={2}>
//               <Avatar src="https://i.pravatar.cc/150?img=5" />
//               <Box ml={2}>
//                 <Typography variant="subtitle1" fontWeight="bold">
//                   Renuga K
//                 </Typography>
//                 <Typography variant="caption">Post to Anyone</Typography>
//               </Box>
//             </Box>

//             {/* Input Area */}
//             <TextField
//               fullWidth
//               multiline
//               minRows={5}
//               placeholder="Innovation meets Intellectual Thinking"
//               value={idea}
//               onChange={(e) => setIdea(e.target.value)}
//             />

//             {/* Media Preview */}
//             {media && (
//               <Box mt={2}>
//                 <Typography variant="caption">Attached Media:</Typography>
//                 <img
//                   src={media}
//                   alt="upload"
//                   style={{
//                     width: "300px",
//                     height: "200px",
//                     borderRadius: 8,
//                     display: "block",
//                     margin: "auto",
//                   }}
//                 />
//               </Box>
//             )}

//             {/* Emoji Picker */}
//             {showEmoji && (
//               <Box ref={emojiPickerRef} sx={{ mt: 2, maxHeight: 300, overflowY: "auto" }}>
//                 <EmojiPicker onEmojiClick={handleEmojiClick} width="100%" />
//               </Box>
//             )}

//             {/* Toolbar */}
//             <Box display="flex" justifyContent="space-between" mt={2}>
//               <Box>
//                 {/* Emoji */}
//                 <IconButton onClick={() => setShowEmoji((prev) => !prev)}>
//                   <EmojiEmotions />
//                 </IconButton>

//                 {/* Upload Media */}
//                 <IconButton component="label">
//                   <Image />
//                   <input type="file" hidden onChange={handleMediaUpload} />
//                 </IconButton>

//                 {/* Calendar (Date + Time Picker) */}
//                 <IconButton onClick={() => setScheduleDate(dayjs())}>
//                   <CalendarToday />
//                 </IconButton>
//                 {scheduleDate && (
//                   <Box mt={1}>
//                     <DatePicker
//                       label="Select Date"
//                       value={scheduleDate}
//                       onChange={(newDate) => setScheduleDate(newDate)}
//                     />
//                     <TimePicker
//                       label="Select Time"
//                       value={scheduleTime}
//                       onChange={(newTime) => setScheduleTime(newTime)}
//                     />
//                   </Box>
//                 )}

//                 {/* Investor Celebration */}
//                 <IconButton onClick={handleInvestorCelebration}>
//                   <Settings />
//                 </IconButton>

//                 {/* Add button */}
//                 {!showExtras && (
//                   <IconButton onClick={() => setShowExtras(true)}>
//                     <Add />
//                   </IconButton>
//                 )}

//                 {/* Extra Poll & Document options */}
//                 {showExtras && (
//                   <>
//                     <IconButton onClick={() => alert("Create a Poll feature coming soon!")}>
//                       <Poll />
//                     </IconButton>
//                     <IconButton onClick={() => alert("Attach Document feature coming soon!")}>
//                       <Description />
//                     </IconButton>
//                   </>
//                 )}
//               </Box>

//               <Button
//                 variant="contained"
//                 disabled={!idea.trim() && !media}
//                 onClick={handlePost}
//               >
//                 Post
//               </Button>
//             </Box>
//           </Box>
//         </Modal>

//         {/* Show Posts */}
//         {posts.map((post) => (
//           <Card key={post.id} sx={{ p: 2, mb: 2 }}>
//             <Box display="flex" alignItems="center" mb={1}>
//               <Avatar src={post.avatar} />
//               <Box ml={2}>
//                 <Typography variant="subtitle1" fontWeight="bold">
//                   {post.user}
//                 </Typography>
//                 <Typography variant="caption">{post.createdAt}</Typography>
//               </Box>
//             </Box>
//             <Typography variant="body1" sx={{ whiteSpace: "pre-line" }} style={{marginLeft:"9%"}}>
//               {post.content}
//             </Typography>
//             {post.media && (
//               <img
//                 src={post.media}
//                 alt="post-media"
//                 style={{
//                   width: "600px",
//                   height: "400px",
//                   marginTop: 12,
//                   borderRadius: 8,
//                   marginLeft: "9%",
//                 }}
//               />
//             )}
//           </Card>
//         ))}
//       </Box>
//     </LocalizationProvider>
//   );
// }




// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Card,
//   CardContent,
//   CardHeader,
//   Avatar,
//   Typography,
//   IconButton,
//   TextField,
//   Button,
//   Divider,
// } from "@mui/material";
// import { Favorite, Chat, Share } from "@mui/icons-material";
// import { motion } from "framer-motion";

// // Dummy user + post data generator
// const users = Array.from({ length: 100 }, (_, i) => ({
//   id: i + 1,
//   name: `User ${i + 1}`,
//   avatar: `https://i.pravatar.cc/150?img=${i + 10}`,
// }));

// const samplePosts = [
//   {
//     id: 1,
//     userId: 1,
//     daysAgo: 1,
//     description:
//       "✨ Successfully completed a 6-day training on Data Visualization 📊",
//     image: "https://picsum.photos/800/400?random=1",
//     likes: 27,
//     comments: [{ user: "Ashok", text: "Well done! Never stop learning 😊" }],
//   },
//   {
//     id: 2,
//     userId: 2,
//     daysAgo: 2,
//     description:
//       "📜 Earned a certificate in Advanced Python Programming 🚀",
//     image: "https://picsum.photos/800/400?random=2",
//     likes: 14,
//     comments: [],
//   },
// ];

// export default function Innovations() {
//   const [posts, setPosts] = useState(samplePosts);
//   const [newIdea, setNewIdea] = useState("");
//   const [likedPosts, setLikedPosts] = useState({}); // Track likes per post
//   const [showComments, setShowComments] = useState({}); // Track comment section toggle
//   const [showTranslate, setShowTranslate] = useState({}); // Track translate toggle

//   // Handle new post
//   const handlePostIdea = () => {
//     if (!newIdea.trim()) return;
//     const newPost = {
//       id: Date.now(),
//       userId: Math.floor(Math.random() * 100) + 1,
//       daysAgo: Math.floor(Math.random() * 7) + 1,
//       description: newIdea,
//       image: `https://picsum.photos/800/400?random=${Math.floor(
//         Math.random() * 100
//       )}`,
//       likes: 0,
//       comments: [],
//     };
//     setPosts([newPost, ...posts]);
//     setNewIdea("");
//   };

//   // Handle like toggle
//   const handleLike = (postId) => {
//     setLikedPosts((prev) => ({
//       ...prev,
//       [postId]: !prev[postId],
//     }));
//     setPosts((prev) =>
//       prev.map((post) =>
//         post.id === postId
//           ? {
//               ...post,
//               likes: likedPosts[postId] ? post.likes - 1 : post.likes + 1,
//             }
//           : post
//       )
//     );
//   };

//   // Handle comment toggle
//   const handleCommentToggle = (postId) => {
//     setShowComments((prev) => ({ ...prev, [postId]: !prev[postId] }));
//   };

//   // Handle translation
//   const handleTranslate = (postId) => {
//     setShowTranslate((prev) => ({ ...prev, [postId]: !prev[postId] }));
//   };

//   return (
//     <Box p={3} maxWidth="800px" mx="auto">
//       {/* Share Your Idea */}
//       <Card sx={{ p: 2, mb: 3 }}>
//         <Typography variant="h6" gutterBottom>
//           Share your idea
//         </Typography>
//         <TextField
//           fullWidth
//           multiline
//           minRows={2}
//           value={newIdea}
//           onChange={(e) => setNewIdea(e.target.value)}
//           placeholder="Write your idea..."
//         />
        
//       </Card>

//       {/* Posts Feed */}
//       {posts.map((post) => {
//         const user = users.find((u) => u.id === post.userId) || users[0];
//         return (
//           <motion.div key={post.id} whileHover={{ scale: 1.01 }}>
//             <Card sx={{ mb: 3 }}>
//               <CardHeader
//                 avatar={<Avatar src={user.avatar} />}
//                 title={user.name}
//                 subheader={`${post.daysAgo}d • 🌐`}
//               />
//               <CardContent>
//                 <Typography>
//                   {showTranslate[post.id]
//                     ? `${post.description} (translated to English)`
//                     : post.description}
//                 </Typography>
//                 <Button
//                   size="small"
//                   sx={{ textTransform: "none", mt: 1 }}
//                   onClick={() => handleTranslate(post.id)}
//                 >
//                   {showTranslate[post.id]
//                     ? "Hide translation"
//                     : "See translation"}
//                 </Button>
//                 <Box
//                   component="img"
//                   src={post.image}
//                   alt="post"
//                   sx={{ width: "100%", borderRadius: 2, mt: 2 }}
//                 />
//               </CardContent>
//               <Divider />
//               <Box display="flex" justifyContent="space-around" p={1}>
//                 <IconButton onClick={() => handleLike(post.id)}>
//                   <Favorite
//                     color={likedPosts[post.id] ? "error" : "action"}
//                   />
//                 </IconButton>
//                 <Typography>{post.likes}</Typography>
//                 <IconButton onClick={() => handleCommentToggle(post.id)}>
//                   <Chat color="primary" />
//                 </IconButton>
//                 <IconButton>
//                   <Share color="success" />
//                 </IconButton>
//               </Box>

//               {/* Comment Section */}
//               {showComments[post.id] && (
//                 <Box sx={{ p: 2 }}>
//                   {post.comments.map((c, i) => (
//                     <Typography key={i} variant="body2" sx={{ mb: 1 }}>
//                       <b>{c.user}:</b> {c.text}
//                     </Typography>
//                   ))}
//                   <TextField
//                     fullWidth
//                     placeholder="Add a comment..."
//                     size="small"
//                     sx={{ mt: 1 }}
//                   />
//                 </Box>
//               )}
//             </Card>
//           </motion.div>
//         );
//       })}
//     </Box>
//   );
// }


// // src/Component/Investors webapp/Innovations.jsx
// import React, { useState } from "react";
// import {
//   Box,
//   Card,
//   CardContent,
//   CardHeader,
//   Avatar,
//   Typography,
//   IconButton,
//   TextField,
//   Button,
//   Divider,
//   Modal,
// } from "@mui/material";
// import { Favorite, Chat, Share, Poll, Description } from "@mui/icons-material";
// import { motion } from "framer-motion";

// // Dummy user profiles (100)
// const users = Array.from({ length: 100 }, (_, i) => ({
//   id: i + 1,
//   name: `User ${i + 1}`,
//   avatar: `https://i.pravatar.cc/150?img=${i + 10}`,
// }));

// // Dummy posts to start
// const samplePosts = [
//   {
//     id: 1,
//     userId: 1,
//     daysAgo: 1,
//     description: "✨ Successfully completed a training on Data Visualization 📊",
//     image: "https://picsum.photos/800/400?random=1",
//     likes: 10,
//     comments: [{ user: "Ashok", text: "Well done! 🚀" }],
//     poll: null,
//     document: null,
//   },
// ];

// export default function Innovations() {
//   const [posts, setPosts] = useState(samplePosts);
//   const [newIdea, setNewIdea] = useState("");
//   const [likedPosts, setLikedPosts] = useState({});
//   const [showComments, setShowComments] = useState({});
//   const [showPollModal, setShowPollModal] = useState(false);
//   const [showDocModal, setShowDocModal] = useState(false);

//   // Poll state
//   const [pollQuestion, setPollQuestion] = useState("");
//   const [pollOptions, setPollOptions] = useState(["", ""]);

//   // Document state
//   const [docTitle, setDocTitle] = useState("");
//   const [docLink, setDocLink] = useState("");

//   // Handle new post
//   const handlePostIdea = () => {
//     if (!newIdea.trim() && !pollQuestion.trim() && !docTitle.trim()) return;

//     const newPost = {
//       id: Date.now(),
//       userId: Math.floor(Math.random() * 100) + 1,
//       daysAgo: 0,
//       description: newIdea,
//       image: `https://picsum.photos/800/400?random=${Math.floor(
//         Math.random() * 100
//       )}`,
//       likes: 0,
//       comments: [],
//       poll: pollQuestion
//         ? { question: pollQuestion, options: [...pollOptions] }
//         : null,
//       document: docTitle ? { title: docTitle, link: docLink } : null,
//     };
//     setPosts([newPost, ...posts]);
//     setNewIdea("");
//     setPollQuestion("");
//     setPollOptions(["", ""]);
//     setDocTitle("");
//     setDocLink("");
//   };

//   // Like toggle
//   const handleLike = (postId) => {
//     setLikedPosts((prev) => ({ ...prev, [postId]: !prev[postId] }));
//     setPosts((prev) =>
//       prev.map((post) =>
//         post.id === postId
//           ? {
//               ...post,
//               likes: likedPosts[postId] ? post.likes - 1 : post.likes + 1,
//             }
//           : post
//       )
//     );
//   };

//   // Comment toggle
//   const handleCommentToggle = (postId) => {
//     setShowComments((prev) => ({ ...prev, [postId]: !prev[postId] }));
//   };

//   return (
//     <Box p={3} maxWidth="800px" mx="auto">
//       {/* Post Input Box */}
//       <Card sx={{ p: 2, mb: 3 }}>
//         <Typography variant="h6" gutterBottom>
//           Share your idea
//         </Typography>
//         <TextField
//           fullWidth
//           multiline
//           minRows={2}
//           value={newIdea}
//           onChange={(e) => setNewIdea(e.target.value)}
//           placeholder="Write your idea..."
//         />
//         <Box display="flex" gap={1} mt={2}>
//           <Button
//             variant="outlined"
//             startIcon={<Poll />}
//             onClick={() => setShowPollModal(true)}
//           >
//             Add Poll
//           </Button>
//           <Button
//             variant="outlined"
//             startIcon={<Description />}
//             onClick={() => setShowDocModal(true)}
//           >
//             Add Document
//           </Button>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handlePostIdea}
//             sx={{ marginLeft: "auto" }}
//           >
//             Post
//           </Button>
//         </Box>
//       </Card>

//       {/* Feed */}
//       {posts.map((post) => {
//         const user = users.find((u) => u.id === post.userId) || users[0];
//         return (
//           <motion.div key={post.id} whileHover={{ scale: 1.01 }}>
//             <Card sx={{ mb: 3 }}>
//               <CardHeader
//                 avatar={<Avatar src={user.avatar} />}
//                 title={user.name}
//                 subheader={`${post.daysAgo}d • 🌐`}
//               />
//               <CardContent>
//                 <Typography sx={{ whiteSpace: "pre-line" }}>
//                   {post.description}
//                 </Typography>

//                 {/* Poll Section */}
//                 {post.poll && (
//                   <Box mt={2} p={2} sx={{ border: "1px solid #ccc", borderRadius: 2 }}>
//                     <Typography fontWeight="bold">{post.poll.question}</Typography>
//                     {post.poll.options
//                       .filter((opt) => opt.trim())
//                       .map((opt, i) => (
//                         <Button
//                           key={i}
//                           fullWidth
//                           variant="outlined"
//                           sx={{ my: 0.5, justifyContent: "flex-start" }}
//                         >
//                           {opt}
//                         </Button>
//                       ))}
//                   </Box>
//                 )}

//                 {/* Document Section */}
//                 {post.document && (
//                   <Box mt={2} p={2} sx={{ border: "1px solid #1976d2", borderRadius: 2 }}>
//                     <Typography fontWeight="bold">
//                       📄 {post.document.title}
//                     </Typography>
//                     <a href={post.document.link} target="_blank" rel="noreferrer">
//                       {post.document.link}
//                     </a>
//                   </Box>
//                 )}

//                 {/* Image */}
//                 {post.image && (
//                   <Box
//                     component="img"
//                     src={post.image}
//                     alt="post"
//                     sx={{ width: "100%", borderRadius: 2, mt: 2 }}
//                   />
//                 )}
//               </CardContent>

//               {/* Actions */}
//               <Divider />
//               <Box display="flex" justifyContent="space-around" p={1}>
//                 <IconButton onClick={() => handleLike(post.id)}>
//                   <Favorite color={likedPosts[post.id] ? "error" : "action"} />
//                 </IconButton>
//                 <Typography>{post.likes}</Typography>
//                 <IconButton onClick={() => handleCommentToggle(post.id)}>
//                   <Chat color="primary" />
//                 </IconButton>
//                 <IconButton>
//                   <Share color="success" />
//                 </IconButton>
//               </Box>

//               {/* Comment Section */}
//               {showComments[post.id] && (
//                 <Box sx={{ p: 2 }}>
//                   {post.comments.map((c, i) => (
//                     <Typography key={i} variant="body2" sx={{ mb: 1 }}>
//                       <b>{c.user}:</b> {c.text}
//                     </Typography>
//                   ))}
//                   <TextField
//                     fullWidth
//                     placeholder="Add a comment..."
//                     size="small"
//                     sx={{ mt: 1 }}
//                   />
//                 </Box>
//               )}
//             </Card>
//           </motion.div>
//         );
//       })}

//       {/* Poll Modal */}
//       <Modal open={showPollModal} onClose={() => setShowPollModal(false)}>
//         <Box
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             bgcolor: "background.paper",
//             p: 3,
//             borderRadius: 2,
//             width: 400,
//           }}
//         >
//           <Typography variant="h6" gutterBottom>
//             Create Poll
//           </Typography>
//           <TextField
//             fullWidth
//             label="Poll Question"
//             value={pollQuestion}
//             onChange={(e) => setPollQuestion(e.target.value)}
//             sx={{ mb: 2 }}
//           />
//           {pollOptions.map((opt, i) => (
//             <TextField
//               key={i}
//               fullWidth
//               label={`Option ${i + 1}`}
//               value={opt}
//               onChange={(e) =>
//                 setPollOptions((prev) =>
//                   prev.map((o, idx) => (idx === i ? e.target.value : o))
//                 )
//               }
//               sx={{ mb: 1 }}
//             />
//           ))}
//           <Button
//             onClick={() => setPollOptions((prev) => [...prev, ""])}
//             sx={{ mb: 2 }}
//           >
//             + Add Option
//           </Button>
//           <Button variant="contained" onClick={() => setShowPollModal(false)}>
//             Save Poll
//           </Button>
//         </Box>
//       </Modal>

//       {/* Document Modal */}
//       <Modal open={showDocModal} onClose={() => setShowDocModal(false)}>
//         <Box
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             bgcolor: "background.paper",
//             p: 3,
//             borderRadius: 2,
//             width: 400,
//           }}
//         >
//           <Typography variant="h6" gutterBottom>
//             Attach Document
//           </Typography>
//           <TextField
//             fullWidth
//             label="Document Title"
//             value={docTitle}
//             onChange={(e) => setDocTitle(e.target.value)}
//             sx={{ mb: 2 }}
//           />
//           <TextField
//             fullWidth
//             label="Document Link"
//             value={docLink}
//             onChange={(e) => setDocLink(e.target.value)}
//             sx={{ mb: 2 }}
//           />
//           <Button variant="contained" onClick={() => setShowDocModal(false)}>
//             Save Document
//           </Button>
//         </Box>
//       </Modal>
//     </Box>
//   );
// }
// import React, { useState } from "react";
// import {
//   Card,
//   Typography,
//   TextField,
//   Button,
//   IconButton,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Box,
// } from "@mui/material";
// import { EmojiEmotions, InsertPhoto, Event, Close } from "@mui/icons-material";
// import Picker from "emoji-picker-react";
// import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import dayjs from "dayjs";
// import Confetti from "react-confetti";

// export default function Innovations() {
//   const [posts, setPosts] = useState([]);
//   const [newIdea, setNewIdea] = useState("");
//   const [open, setOpen] = useState(false);
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);
//   const [media, setMedia] = useState(null);
//   const [scheduleDate, setScheduleDate] = useState(null);
//   const [showConfetti, setShowConfetti] = useState(false);

//   const handleEmojiClick = (emojiData) => {
//     setNewIdea((prev) => prev + emojiData.emoji);
//   };

//   const handleMediaUpload = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       setMedia(URL.createObjectURL(e.target.files[0]));
//     }
//   };

//   const handlePostIdea = () => {
//     if (!newIdea.trim() && !media) return;

//     const newPost = {
//       id: Date.now(),
//       text: newIdea,
//       media,
//       date: scheduleDate ? scheduleDate.format("DD/MM/YYYY HH:mm") : "Now",
//       likes: 0,
//     };

//     // ✅ FIXED: Correctly updating state
//     setPosts((prev) => [newPost, ...prev]);

//     setNewIdea("");
//     setMedia(null);
//     setScheduleDate(null);
//   };

//   const handleLike = (id) => {
//     setPosts((prev) =>
//       prev.map((p) =>
//         p.id === id ? { ...p, likes: p.likes + 1 } : p
//       )
//     );
//   };

//   const handleInvestorClick = () => {
//     setShowConfetti(true);
//     setTimeout(() => setShowConfetti(false), 4000);
//   };

//   return (
//     <Box p={3}>
//       {showConfetti && <Confetti />}

//       <Card sx={{ p: 2, mb: 3 }}>
//         <Typography variant="h6" gutterBottom>
//           Share your innovation
//         </Typography>
//         <TextField
//           fullWidth
//           multiline
//           minRows={2}
//           value={newIdea}
//           onClick={() => setOpen(true)}
//           placeholder="Write your idea..."
//         />
//       </Card>

//       {/* Dialog stays open until Close button */}
//       <Dialog open={open} onClose={() => {}} fullWidth maxWidth="sm">
//         <DialogTitle>
//           New Post
//           <IconButton
//             onClick={() => setOpen(false)}
//             sx={{ position: "absolute", right: 8, top: 8 }}
//           >
//             <Close />
//           </IconButton>
//         </DialogTitle>
//         <DialogContent>
//           <TextField
//             fullWidth
//             multiline
//             minRows={3}
//             value={newIdea}
//             onChange={(e) => setNewIdea(e.target.value)}
//             placeholder="Share your idea..."
//           />

//           {/* Preview uploaded media always AFTER description */}
//           {media && (
//             <Box mt={2}>
//               <img
//                 src={media}
//                 alt="upload"
//                 style={{ width: "100%", borderRadius: 8 }}
//               />
//             </Box>
//           )}

//           {/* Icons row */}
//           <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
//             <IconButton onClick={() => setShowEmojiPicker((p) => !p)}>
//               <EmojiEmotions />
//             </IconButton>
//             <IconButton component="label">
//               <InsertPhoto />
//               <input hidden type="file" accept="image/*" onChange={handleMediaUpload} />
//             </IconButton>
//             <IconButton onClick={() => setScheduleDate(dayjs())}>
//               <Event />
//             </IconButton>
//           </Box>

//           {/* Show emoji picker */}
//           {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}

//           {/* Show calendar below icon */}
//           {scheduleDate && (
//             <Box mt={2}>
//               <LocalizationProvider dateAdapter={AdapterDayjs}>
//                 <DateTimePicker
//                   label="Schedule Post"
//                   value={scheduleDate}
//                   onChange={(newVal) => setScheduleDate(newVal)}
//                   renderInput={(params) => <TextField {...params} fullWidth />}
//                 />
//               </LocalizationProvider>
//             </Box>
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handlePostIdea} variant="contained">
//             To be an Entrepreneur
//           </Button>
//           <Button onClick={handleInvestorClick} color="secondary" variant="outlined">
//             I got an Investor
//           </Button>
//         </DialogActions>
//       </Dialog>

//       {/* Show posts */}
//       {posts.map((post) => (
//         <Card key={post.id} sx={{ p: 2, mb: 2 }}>
//           <Typography>{post.text}</Typography>
//           {post.media && (
//             <Box mt={1}>
//               <img src={post.media} alt="media" style={{ width: "100%", borderRadius: 8 }} />
//             </Box>
//           )}
//           <Typography variant="caption" color="text.secondary">
//             {post.date}
//           </Typography>
//           <Box mt={1}>
//             <Button onClick={() => handleLike(post.id)}>❤️ {post.likes}</Button>
//           </Box>
//         </Card>
//       ))}
//     </Box>
//   );
// }

// import React, { useState, useRef, useEffect } from "react";
// import {
//   Box,
//   Card,
//   Avatar,
//   Typography,
//   TextField,
//   Button,
//   Modal,
//   IconButton,
//   Input,
// } from "@mui/material";
// import {
//   Image,
//   EmojiEmotions,
//   CalendarToday,
//   Settings,
//   Add,
//   Description,
//   Poll,
//   Close,
//   ThumbUp,
//   Comment,
//   Share,
// } from "@mui/icons-material";
// import EmojiPicker from "emoji-picker-react";
// import dayjs from "dayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DatePicker, TimePicker } from "@mui/x-date-pickers";

// export default function Innovations() {
//   const [open, setOpen] = useState(false);
//   const [idea, setIdea] = useState("");
//   const [showEmoji, setShowEmoji] = useState(false);
//   const [media, setMedia] = useState(null);
//   const [scheduleDate, setScheduleDate] = useState(null);
//   const [scheduleTime, setScheduleTime] = useState(null);
//   const [showExtras, setShowExtras] = useState(false);
//   const [showPollInput, setShowPollInput] = useState(false);
//   const [pollOption, setPollOption] = useState("");
//   const [pollOptions, setPollOptions] = useState([]);
//   const [showDocInput, setShowDocInput] = useState(false);
//   const [docFile, setDocFile] = useState(null);
//   const [posts, setPosts] = useState([]);

//   const emojiPickerRef = useRef(null);

//   // Load posts from localStorage
//   useEffect(() => {
//     const savedPosts = JSON.parse(localStorage.getItem("innovPosts")) || [];
//     setPosts(savedPosts);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("innovPosts", JSON.stringify(posts));
//   }, [posts]);

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (emojiPickerRef.current && !emojiPickerRef.current.contains(e.target)) {
//         setShowEmoji(false);
//       }
//     };
//     if (showEmoji) document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [showEmoji]);

//     const handleInvestorCelebration = () => {
//     setIdea(
//       (prev) =>
//         prev +
//         "\n🎉 Congratulations Renuga! You just got an Investor! 🚀\n"
//     );

//     // Attach confetti/investor image to post
//     setMedia(
//       "https://thumbs.dreamstime.com/b/businesspeople-hot-air-balloon-investing-money-future-profit-businessman-businesswoman-spend-much-to-wealth-assets-218099758.jpg"
//     );
//   };



//   const handlePost = () => {
//     if (!idea.trim() && !media && pollOptions.length === 0 && !docFile) return;

//     const now = dayjs();
//     const scheduledTime =
//       scheduleDate && scheduleTime
//         ? dayjs(`${scheduleDate.format("YYYY-MM-DD")} ${scheduleTime.format("HH:mm")}`)
//         : null;

//     const newPost = {
//   id: Date.now(),
//   user: user.username,
//   avatar: "https://i.pravatar.cc/150?img=5",
//   content: idea,
//   media,
//   poll: pollOptions.length > 0 ? pollOptions : null,
//   pollVotes: {}, // Track votes per option
//   voted: false, // Has current user voted?
//   document: docFile || null,
//   schedule: scheduledTime,
//   createdAt: now.format("YYYY-MM-DD HH:mm:ss"),
//   likes: Math.floor(Math.random() * 50) + 1,
//   liked: false,
//   comments: [{
//     id: Date.now(), // unique comment ID
//     user: user.username, 
//     content: "Comment text",
//     createdAt: dayjs().format("YYYY-MM-DD HH:mm"),
//   }],
// };

//     setPosts([newPost, ...posts]);
//     setIdea("");
//     setMedia(null);
//     setScheduleDate(null);
//     setScheduleTime(null);
//     setShowEmoji(false);
//     setShowExtras(false);
//     setShowPollInput(false);
//     setPollOption("");
//     setPollOptions([]);
//     setShowDocInput(false);
//     setDocFile(null);
//     setOpen(false);
//   };

//   const handleEmojiClick = (emojiData) => setIdea((prev) => prev + emojiData.emoji);
//   const handleMediaUpload = (e) => {
//     const file = e.target.files[0];
//     if (file && file.size < 500 * 1024 * 1024) setMedia(URL.createObjectURL(file));
//     else alert("File too large! Must be under 500MB.");
//   };
//   const handleDocUpload = (e) => setDocFile(e.target.files[0]);

//   const addPollOption = () => {
//     if (pollOption.trim() !== "") {
//       setPollOptions([...pollOptions, pollOption]);
//       setPollOption("");
//     }
//   };

//   const handleLike = (id) => {
//     setPosts((prevPosts) =>
//       prevPosts.map((post) =>
//         post.id === id
//           ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
//           : post
//       )
//     );
//   };

// const [activeCommentPost, setActiveCommentPost] = useState(null); // track which post has open comment box
// const [newComment, setNewComment] = useState(""); // comment input

//   const addComment = (postId) => {
//   if (!newComment.trim()) return;
//   setPosts((prevPosts) =>
//     prevPosts.map((post) =>
//       post.id === postId
//         ? {
//             ...post,
//             comments: [
//               ...post.comments,
//               {
//                 id: Date.now(),
//                 user: currentUser,
//                 content: newComment,
//                 createdAt: dayjs().format("YYYY-MM-DD HH:mm"),
//               },
//             ],
//           }
//         : post
//     )
//   );
//   setNewComment("");
// };

// const deleteComment = (postId, commentId) => {
//   setPosts((prevPosts) =>
//     prevPosts.map((post) =>
//       post.id === postId
//         ? { ...post, comments: post.comments.filter(c => c.id !== commentId) }
//         : post
//     )
//   );
// };

// const editComment = (postId, commentId, updatedText) => {
//   setPosts((prevPosts) =>
//     prevPosts.map((post) =>
//       post.id === postId
//         ? {
//             ...post,
//             comments: post.comments.map(c =>
//               c.id === commentId ? { ...c, content: updatedText } : c
//             ),
//           }
//         : post
//     )
//   );
// };


//   const handleShare = (id) => alert("Share feature coming soon!");
//   const displayPost = (post) => (!post.schedule ? true : dayjs().isAfter(post.schedule));

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <Box p={3} maxWidth="800px" mx="auto">
//         {/* Mini share box */}
//         <Card sx={{ p: 2, mb: 3, cursor: "pointer" }} onClick={() => setOpen(true)}>
//           <Box display="flex" alignItems="center">
//             <Avatar src="https://i.pravatar.cc/150?img=5" />
//             <TextField fullWidth placeholder="Challenge Your Creativity" sx={{ ml: 2 }} InputProps={{ readOnly: true }} />
//           </Box>
//         </Card>

//         {/* Post Modal */}
//         <Modal open={open} onClose={() => setOpen(false)}>
//           <Box
//             sx={{
//               position: "absolute",
//               top: "50%",
//               left: "50%",
//               transform: "translate(-50%, -50%)",
//               width: 600,
//               bgcolor: "background.paper",
//               boxShadow: 24,
//               borderRadius: 3,
//               p: 3,
//             }}
//           >
//             <IconButton onClick={() => setOpen(false)} sx={{ position: "absolute", top: 8, right: 8 }}>
//               <Close />
//             </IconButton>

//             <Box display="flex" alignItems="center" mb={2}>
//               <Avatar src="https://i.pravatar.cc/150?img=5" />
//               <Box ml={2}>
//                 <Typography variant="subtitle1" fontWeight="bold">Renuga K</Typography>
//                 <Typography variant="caption">Post to Anyone</Typography>
//               </Box>
//             </Box>

//             <TextField
//               fullWidth
//               multiline
//               minRows={5}
//               placeholder="Innovation meets Intellectual Thinking"
//               value={idea}
//               onChange={(e) => setIdea(e.target.value)}
//             />

//             {media && (
//               <Box mt={2}>
//                 <Typography variant="caption">Attached Media:</Typography>
//                 <img src={media} alt="upload" style={{ width: "300px", height: "200px", borderRadius: 8, display: "block", margin: "auto" }} />
//               </Box>
//             )}

//             {showEmoji && <Box ref={emojiPickerRef} sx={{ mt: 2, maxHeight: 300, overflowY: "auto" }}>
//               <EmojiPicker onEmojiClick={handleEmojiClick} width="100%" />
//             </Box>}

//             {/* Toolbar */}
//             <Box display="flex" justifyContent="space-between" mt={2} flexWrap="wrap">
//               <Box display="flex" alignItems="center">
//                 <IconButton onClick={() => setShowEmoji((prev) => !prev)}><EmojiEmotions /></IconButton>
//                 <IconButton component="label">
//                   <Image /><input type="file" hidden onChange={handleMediaUpload} />
//                 </IconButton>
//                 {/* <IconButton onClick={() => setScheduleDate(dayjs())}><CalendarToday /></IconButton> */}
//                 {/* Calendar + Cancel Scheduling */}
// <Box>
//   <IconButton
//     onClick={() => {
//       if (scheduleDate) {
//         // Cancel scheduling
//         setScheduleDate(null);
//         setScheduleTime(null);
//       } else {
//         // Set schedule now to current date
//         setScheduleDate(dayjs());
//       }
//     }}
//   >
//     <CalendarToday color={scheduleDate ? "primary" : "default"} />
//   </IconButton>

// </Box>
//                 {/* <IconButton onClick={() => alert("Investor feature coming soon!")}><Settings /></IconButton> */}
//                 <IconButton onClick={handleInvestorCelebration}>
//                  <Settings />
//                  </IconButton>
                
//                 {!showExtras && <IconButton onClick={() => setShowExtras(true)}><Add /></IconButton>}

//                 {showExtras && (
//                   <>
//                     <IconButton onClick={() => setShowPollInput((prev) => !prev)}><Poll /></IconButton>
//                     <IconButton onClick={() => setShowDocInput((prev) => !prev)}><Description /></IconButton>
//                   </>
//                 )}
//               </Box>

//               <Button variant="contained" disabled={!idea.trim() && !media && pollOptions.length===0 && !docFile} onClick={handlePost}>Post</Button>
//             </Box>

//                 {scheduleDate && (
//     <Button mt={1}
//       variant="outlined"
//       size="small"
//       onClick={() => {
//         // Cancel scheduling
//         setScheduleDate(null);
//         setScheduleTime(null);
//       }}
//     >
//       Cancel
//     </Button>
//   )}

//             {scheduleDate && (
//   <Box mt={2} gap={1} ml={1} display="flex" flexDirection="column" width="150px">
//     <DatePicker
//       label="Select Date"
//       value={scheduleDate}
//       onChange={(newDate) => setScheduleDate(newDate)}
//     />
//     <TimePicker
//       label="Select Time"
//       value={scheduleTime}
//       onChange={(newTime) => setScheduleTime(newTime)}
//     />
//   </Box>
// )}

//             {/* Poll Input */}
//             {showPollInput && (
//               <Box mt={2}>
//                 <Typography variant="subtitle2">Add Poll Options:</Typography>
//                 <Box display="flex" gap={1} mt={1}>
//                   <TextField size="small" placeholder="Option" value={pollOption} onChange={(e) => setPollOption(e.target.value)} />
//                   <Button variant="outlined" size="small" onClick={addPollOption}>Add</Button>
//                 </Box>
//                 <Box mt={1}>
//                   {pollOptions.map((opt, idx) => (<Typography key={idx}>• {opt}</Typography>))}
//                 </Box>
//               </Box>
//             )}

//             {/* Document Input */}
//             {showDocInput && (
//               <Box mt={2}>
//                 <Typography variant="subtitle2">Attach Document:</Typography>
//                 <Input type="file" onChange={handleDocUpload} />
//                 {docFile && <Typography mt={1}>{docFile.name}</Typography>}
//               </Box>
//             )}
//           </Box>
//         </Modal>

//         {/* Show Posts */}
//         {posts.filter(displayPost).map((post) => (
//           <Card key={post.id} sx={{ p: 2, mb: 2 }}>
//             <Box display="flex" alignItems="center" mb={1}>
//               <Avatar src={post.avatar} />
//               <Box ml={2}>
//   <Typography variant="subtitle1" fontWeight="bold">{post.username}</Typography>
//   <Typography variant="caption">
//     {post.schedule
//       ? `Scheduled for: ${dayjs(post.schedule).format("YYYY-MM-DD HH:mm")}`
//       : `Posted at: ${dayjs(post.createdAt).format("YYYY-MM-DD HH:mm")}`}
//   </Typography>
// </Box>

//             </Box>

//             <Typography variant="body1" sx={{ whiteSpace: "pre-line" }} style={{ marginLeft: "9%" }}>{post.content}</Typography>

//             {post.media && <img src={post.media} alt="post-media" style={{ width: "600px", height: "400px", marginTop: 12, borderRadius: 8, marginLeft: "9%" }} />}
//             {post.poll && (
//   <Box ml="9%" mt={1}>
//     <Typography variant="subtitle2">Poll:</Typography>
//     {post.poll.map((opt, idx) => (
//       <Box key={idx} display="flex" alignItems="center" gap={1} mt={0.5}>
//         <Button
//           variant="outlined"
//           size="small"
//           onClick={() => {
//             // Increment vote count for this option
//             setPosts((prevPosts) =>
//               prevPosts.map((p) =>
//                 p.id === post.id
//                   ? {
//                       ...p,
//                       pollVotes: {
//                         ...p.pollVotes,
//                         [idx]: (p.pollVotes?.[idx] || 0) + 1
//                       },
//                       voted: true
//                     }
//                   : p
//               )
//             );
//           }}
//           disabled={post.voted} // Disable after voting
//         >
//           {opt}
//         </Button>
//         <Typography>{post.pollVotes?.[idx] || 0} votes</Typography>
//       </Box>
//     ))}
//   </Box>
// )}

//             {post.document && (
//   <Box ml="9%" mt={1}>
//     <Typography variant="subtitle2">Document:</Typography>
//     {post.document.type === "application/pdf" ? (
//       <iframe
//         src={URL.createObjectURL(post.document)}
//         width="100%"
//         height="400px"
//         title="PDF Document"
//         style={{ border: "1px solid #ccc", borderRadius: 8, marginTop: 4 }}
//       />
//     ) : (
//       <Typography>{post.document.name}</Typography>
//     )}
//   </Box>
// )}


//             <Box display="flex" alignItems="center" mt={1} ml="9%">
//               <IconButton color={post.liked ? "primary" : "default"} onClick={() => handleLike(post.id)}>
//                 <ThumbUp /> <Typography ml={0.5}>{post.likes}</Typography>
//               </IconButton>
//               <IconButton onClick={() => setActiveCommentPost(activeCommentPost === post.id ? null : post.id)}><Comment /></IconButton>
//               <IconButton onClick={() => handleShare(post.id)}><Share /></IconButton>
//             </Box>

//             {/* Comments */}
// <Box ml="9%" mt={1}>
//   {post.comments.map((c) => (
//     <Box key={c.id} display="flex" alignItems="center" justifyContent="space-between" mb={0.5}>
//       <Box>
//         <Typography variant="subtitle2">{c.user}</Typography>
//         <Typography variant="body2">{c.content}</Typography>
//         <Typography variant="caption">{c.createdAt}</Typography>
//       </Box>
//       {c.user === currentUser && (
//         <Box>
//           <Button size="small" onClick={() => {
//             const updatedText = prompt("Edit your comment:", c.content);
//             if (updatedText !== null) editComment(post.id, c.id, updatedText);
//           }}>Edit</Button>
//           <Button size="small" onClick={() => deleteComment(post.id, c.id)}>Delete</Button>
//         </Box>
//       )}
//     </Box>
//   ))}

//   {activeCommentPost === post.id && (
//     <Box display="flex" gap={1} mt={1}>
//       <TextField
//         size="small"
//         fullWidth
//         placeholder="Write a comment..."
//         value={newComment}
//         onChange={(e) => setNewComment(e.target.value)}
//       />
//       <Button size="small" variant="contained" onClick={() => addComment(post.id)}>Post</Button>
//     </Box>
//   )}
// </Box>

            
//             {post.document && (
//   <Box ml="9%" mt={1}>
//     <Typography variant="subtitle2">Document:</Typography>
//     {post.document.type === "application/pdf" ? (
//       <iframe
//         src={URL.createObjectURL(post.document)}
//         width="100%"
//         height="400px"
//         title="PDF Document"
//         style={{ border: "1px solid #ccc", borderRadius: 8, marginTop: 4 }}
//       />
//     ) : (
//       <Typography>{post.document.name}</Typography>
//     )}
//   </Box>
// )}


//           </Card>
//         ))}
//       </Box>
//     </LocalizationProvider>
//   );
// }


// import React, { useState, useRef, useEffect } from "react";
// import {
//   Box,
//   Card,
//   Avatar,
//   Typography,
//   TextField,
//   Button,
//   Modal,
//   IconButton,
//   Input,
//   Menu,
//   MenuItem,
// } from "@mui/material";
// import {
//   Image,
//   EmojiEmotions,
//   CalendarToday,
//   Settings,
//   Add,
//   Description,
//   Poll,
//   Close,
//   ThumbUp,
//   Comment,
//   Share,
//   MoreVert,
// } from "@mui/icons-material";
// import EmojiPicker from "emoji-picker-react";
// import dayjs from "dayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DatePicker, TimePicker } from "@mui/x-date-pickers";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function Innovations() {
//   const savedUser = JSON.parse(localStorage.getItem("user"));
//   const currentUser = savedUser?.username || "Anonymous";

//   const [open, setOpen] = useState(false);
//   const [idea, setIdea] = useState("");
//   const [showEmoji, setShowEmoji] = useState(false);
//   const [media, setMedia] = useState(null);
//   const [mediaModal, setMediaModal] = useState({ open: false, src: "" });
//   const [scheduleDate, setScheduleDate] = useState(null);
//   const [scheduleTime, setScheduleTime] = useState(null);
//   const [showExtras, setShowExtras] = useState(false);
//   const [showPollInput, setShowPollInput] = useState(false);
//   const [pollOption, setPollOption] = useState("");
//   const [pollOptions, setPollOptions] = useState([]);
//   const [showDocInput, setShowDocInput] = useState(false);
//   const [docFile, setDocFile] = useState(null);
//   const [posts, setPosts] = useState([]);

//   const [activeCommentPost, setActiveCommentPost] = useState(null);
//   const [newComment, setNewComment] = useState("");
//   const [commentModal, setCommentModal] = useState({ open: false, postId: null, commentId: null, content: "" });
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [selectedPostId, setSelectedPostId] = useState(null);

//   const emojiPickerRef = useRef(null);

//   useEffect(() => {
//     const savedPosts = JSON.parse(localStorage.getItem("innovPosts")) || [];
//     setPosts(savedPosts);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("innovPosts", JSON.stringify(posts));
//   }, [posts]);

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (emojiPickerRef.current && !emojiPickerRef.current.contains(e.target)) {
//         setShowEmoji(false);
//       }
//     };
//     if (showEmoji) document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [showEmoji]);

//   const handlePost = () => {
//     if (!idea.trim() && !media && pollOptions.length === 0 && !docFile) return;

//     const now = dayjs();
//     const scheduledTime =
//       scheduleDate && scheduleTime
//         ? dayjs(`${scheduleDate.format("YYYY-MM-DD")} ${scheduleTime.format("HH:mm")}`)
//         : null;

//     const newPost = {
//       id: Date.now(),
//       user: currentUser,
//       avatar: "https://i.pravatar.cc/150?img=5",
//       content: idea,
//       media,
//       poll: pollOptions.length > 0 ? pollOptions : null,
//       pollVotes: {},
//       voted: false,
//       document: docFile || null,
//       schedule: scheduledTime,
//       createdAt: now.format("YYYY-MM-DD HH:mm:ss"),
//       likes: Math.floor(Math.random() * 50) + 1,
//       liked: false,
//       comments: [],
//     };

//     setPosts([newPost, ...posts]);
//     resetPostState();
//     setOpen(false);
//   };

//   const resetPostState = () => {
//     setIdea("");
//     setMedia(null);
//     setScheduleDate(null);
//     setScheduleTime(null);
//     setShowEmoji(false);
//     setShowExtras(false);
//     setShowPollInput(false);
//     setPollOption("");
//     setPollOptions([]);
//     setShowDocInput(false);
//     setDocFile(null);
//   };

//   const addComment = (postId, content = null) => {
//     const text = content || newComment;
//     if (!text.trim()) return;

//     setPosts((prev) =>
//       prev.map((post) =>
//         post.id === postId
//           ? {
//               ...post,
//               comments: [
//                 ...post.comments,
//                 { id: Date.now(), user: currentUser, content: text, createdAt: dayjs().format("YYYY-MM-DD HH:mm") },
//               ],
//             }
//           : post
//       )
//     );
//     setNewComment("");
//     setActiveCommentPost(null);
//     if (content) setCommentModal({ open: false, postId: null, commentId: null, content: "" });
//   };

//   const editComment = (postId, commentId, updatedText) => {
//     setPosts((prev) =>
//       prev.map((post) =>
//         post.id === postId
//           ? {
//               ...post,
//               comments: post.comments.map((c) => (c.id === commentId ? { ...c, content: updatedText } : c)),
//             }
//           : post
//       )
//     );
//     toast.success("Comment updated!");
//   };

//   const deleteComment = (postId, commentId) => {
//     setPosts((prev) =>
//       prev.map((post) =>
//         post.id === postId ? { ...post, comments: post.comments.filter((c) => c.id !== commentId) } : post
//       )
//     );
//     toast.info("Comment deleted!");
//   };

//   const handleLike = (id) => {
//     setPosts((prev) =>
//       prev.map((post) =>
//         post.id === id ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 } : post
//       )
//     );
//   };

//   const handleMediaClick = (src) => {
//     setMediaModal({ open: true, src });
//   };

//   const handleVote = (post, optionIndex) => {
//     if (post.voted) {
//       if (window.confirm("Change your vote?")) {
//         toast.info("Vote changed!");
//       } else return;
//     }
//     setPosts((prev) =>
//       prev.map((p) =>
//         p.id === post.id
//           ? {
//               ...p,
//               pollVotes: { ...p.pollVotes, [optionIndex]: (p.pollVotes?.[optionIndex] || 0) + 1 },
//               voted: true,
//             }
//           : p
//       )
//     );
//   };

//   const handleThreeDots = (event, postId) => {
//     setAnchorEl(event.currentTarget);
//     setSelectedPostId(postId);
//   };

//   const handlePostMenu = (action) => {
//     if (!selectedPostId) return;
//     if (action === "edit") {
//       const post = posts.find((p) => p.id === selectedPostId);
//       setIdea(post.content);
//       setMedia(post.media);
//       setOpen(true);
//     } else if (action === "delete") {
//       setPosts((prev) => prev.filter((p) => p.id !== selectedPostId));
//       toast.info("Post deleted!");
//     }
//     setAnchorEl(null);
//     setSelectedPostId(null);
//   };

//   const displayPost = (post) => (!post.schedule ? true : dayjs().isAfter(post.schedule));
//   const handleEmojiClick = (emojiData) => setIdea((prev) => prev + emojiData.emoji);
//   const handleMediaUpload = (e) => setMedia(URL.createObjectURL(e.target.files[0]));
//   const handleDocUpload = (e) => setDocFile(e.target.files[0]);
//   const addPollOption = () => {
//     if (pollOption.trim() !== "") {
//       setPollOptions([...pollOptions, pollOption]);
//       setPollOption("");
//     }
//   };

//   const handleInvestorCelebration = () => 
//     { setIdea( (prev) => prev + "\n🎉 Congratulations Renuga! You just got an Investor! 🚀\n" ); 
//   // Attach confetti/investor image to post 
//   setMedia( "https://thumbs.dreamstime.com/b/businesspeople-hot-air-balloon-investing-money-future-profit-businessman-businesswoman-spend-much-to-wealth-assets-218099758.jpg" ); 
// };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <ToastContainer position="top-right" autoClose={2000} />
//       <Box p={3} maxWidth="800px" mx="auto">
//         {/* Mini share box */}
//         <Card sx={{ p: 2, mb: 3, cursor: "pointer" }} onClick={() => setOpen(true)}>
//           <Box display="flex" alignItems="center">
//             <Avatar src="https://i.pravatar.cc/150?img=5" />
//             <TextField fullWidth placeholder="Challenge Your Creativity" sx={{ ml: 2 }} InputProps={{ readOnly: true }} />
//           </Box>
//         </Card>

//         {/* Post Modal */}
//         <Modal open={open} onClose={() => setOpen(false)}>
//           <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, bgcolor: "background.paper", boxShadow: 24, borderRadius: 3, p: 3 }}>
//             <IconButton onClick={() => setOpen(false)} sx={{ position: "absolute", top: 8, right: 8 }}>
//               <Close />
//             </IconButton>

//             <Box display="flex" alignItems="center" mb={2}>
//               <Avatar src="https://i.pravatar.cc/150?img=5" />
//               <Box ml={2}>
//                 <Typography variant="subtitle1" fontWeight="bold">{currentUser}</Typography>
//                 <Typography variant="caption">Post to Anyone</Typography>
//               </Box>
//             </Box>

//             <TextField fullWidth multiline minRows={5} placeholder="Innovation meets Intellectual Thinking" value={idea} onChange={(e) => setIdea(e.target.value)} />

//             {media && (
//               <Box mt={2}>
//                 <Typography variant="caption">Attached Media:</Typography>
//                 <img src={media} alt="upload" style={{ width: "300px", height: "200px", borderRadius: 8, display: "block", margin: "auto", cursor: "pointer" }} onClick={() => handleMediaClick(media)} />
//               </Box>
//             )}

//             {showEmoji && (
//               <Box ref={emojiPickerRef} sx={{ mt: 2, maxHeight: 300, overflowY: "auto" }}>
//                 <EmojiPicker onEmojiClick={handleEmojiClick} width="100%" />
//               </Box>
//             )}

//             <Box display="flex" justifyContent="space-between" mt={2} flexWrap="wrap">
//               <Box display="flex" alignItems="center">
//                 <IconButton onClick={() => setShowEmoji((prev) => !prev)}><EmojiEmotions /></IconButton>
//                 <IconButton component="label"><Image /><input type="file" hidden onChange={handleMediaUpload} /></IconButton>
//                 <IconButton onClick={() => setScheduleDate(scheduleDate ? null : dayjs())}><CalendarToday color={scheduleDate ? "primary" : "default"} /></IconButton>
//                 <IconButton onClick={handleInvestorCelebration}> <Settings/> </IconButton>
//                 {!showExtras && <IconButton onClick={() => setShowExtras(true)}><Add /></IconButton>}
//                 {showExtras && <>
//                   <IconButton onClick={() => setShowPollInput((prev) => !prev)}><Poll /></IconButton>
//                   <IconButton onClick={() => setShowDocInput((prev) => !prev)}><Description /></IconButton>
//                 </>}
//               </Box>
//               <Button variant="contained" disabled={!idea.trim() && !media && pollOptions.length === 0 && !docFile} onClick={handlePost}>Post</Button>
//             </Box>

//             {scheduleDate && (
//               <Box mt={2} gap={1} ml={1} display="flex" flexDirection="column" width="150px">
//                 <DatePicker label="Select Date" value={scheduleDate} onChange={(d) => setScheduleDate(d)} />
//                 <TimePicker label="Select Time" value={scheduleTime} onChange={(t) => setScheduleTime(t)} />
//               </Box>
//             )}

//             {showPollInput && (
//               <Box mt={2}>
//                 <Typography variant="subtitle2">Add Poll Options:</Typography>
//                 <Box display="flex" gap={1} mt={1}>
//                   <TextField size="small" placeholder="Option" value={pollOption} onChange={(e) => setPollOption(e.target.value)} />
//                   <Button size="small" variant="outlined" onClick={addPollOption}>Add</Button>
//                 </Box>
//                 <Box mt={1}>{pollOptions.map((opt, idx) => (<Typography key={idx}>• {opt}</Typography>))}</Box>
//               </Box>
//             )}

//             {showDocInput && (
//               <Box mt={2}>
//                 <Typography variant="subtitle2">Attach Document:</Typography>
//                 <Input type="file" onChange={handleDocUpload} />
//                 {docFile && <Typography mt={1}>{docFile.name}</Typography>}
//               </Box>
//             )}
//           </Box>
//         </Modal>

//         {/* Media Modal */}
//         <Modal open={mediaModal.open} onClose={() => setMediaModal({ open: false, src: "" })}>
//           <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", bgcolor: "background.paper", boxShadow: 24, borderRadius: 2, p: 2 }}>
//             <img src={mediaModal.src} alt="media" style={{ maxWidth: "600px", maxHeight: "600px" }} />
//           </Box>
//         </Modal>

//         {/* Comment Edit Modal */}
//         <Modal open={commentModal.open} onClose={() => setCommentModal({ open: false, postId: null, commentId: null, content: "" })}>
//           <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", bgcolor: "background.paper", boxShadow: 24, borderRadius: 2, p: 2 }}>
//             <TextField fullWidth multiline value={commentModal.content} onChange={(e) => setCommentModal((prev) => ({ ...prev, content: e.target.value }))} />
//             <Button variant="contained" sx={{ mt: 1 }} onClick={() => editComment(commentModal.postId, commentModal.commentId, commentModal.content)}>Update</Button>
//           </Box>
//         </Modal>

//         {/* Posts */}
//         {posts.filter(displayPost).map((post) => (
//           <Card key={post.id} sx={{ p: 2, mb: 2 }}>
//             <Box display="flex" alignItems="center" mb={1} justifyContent="space-between">
//               <Box display="flex" alignItems="center">
//                 <Avatar src={post.avatar} />
//                 <Box ml={2}>
//                   <Typography variant="subtitle1" fontWeight="bold">{post.user}</Typography>
//                   <Typography variant="caption">{post.schedule ? `Scheduled for: ${dayjs(post.schedule).format("YYYY-MM-DD HH:mm")}` : `Posted at: ${dayjs(post.createdAt).format("YYYY-MM-DD HH:mm")}`}</Typography>
//                 </Box>
//               </Box>
//               <IconButton onClick={(e) => handleThreeDots(e, post.id)}><MoreVert /></IconButton>
//               <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
//                 <MenuItem onClick={() => handlePostMenu("edit")}>Edit</MenuItem>
//                 <MenuItem onClick={() => handlePostMenu("delete")}>Delete</MenuItem>
//               </Menu>
//             </Box>

//             <Typography variant="body1" sx={{ whiteSpace: "pre-line", marginLeft: "9%" }}>{post.content}</Typography>

//             {post.media && <img src={post.media} alt="post-media" style={{ width: "600px", height: "400px", marginTop: 12, borderRadius: 8, marginLeft: "9%", cursor: "pointer" }} onClick={() => handleMediaClick(post.media)} />}

//             {post.poll && (
//               <Box ml="9%" mt={1}>
//                 <Typography variant="subtitle2">Poll:</Typography>
//                 {post.poll.map((opt, idx) => (
//                   <Box key={idx} display="flex" alignItems="center" gap={1} mt={0.5}>
//                     <Button variant="outlined" size="small" onClick={() => handleVote(post, idx)} disabled={post.voted}>{opt}</Button>
//                     <Typography>{post.pollVotes?.[idx] || 0} votes</Typography>
//                   </Box>
//                 ))}
//               </Box>
//             )}

//             {post.document && (
//               <Box ml="9%" mt={1}>
//                 <Typography variant="subtitle2">Document:</Typography>
//                 {post.document.type.startsWith("image/") ? (
//                   <Typography sx={{ color: "blue", cursor: "pointer" }} onClick={() => handleMediaClick(URL.createObjectURL(post.document))}>{post.document.name}</Typography>
//                 ) : (
//                   <iframe src={URL.createObjectURL(post.document)} width="100%" height="400px" title="Document" style={{ border: "1px solid #ccc", borderRadius: 8, marginTop: 4 }} />
//                 )}
//               </Box>
//             )}

//             <Box display="flex" alignItems="center" mt={1} ml="9%">
//               <IconButton color={post.liked ? "primary" : "default"} onClick={() => handleLike(post.id)}><ThumbUp /> <Typography ml={0.5}>{post.likes}</Typography></IconButton>
//               <IconButton onClick={() => setActiveCommentPost(activeCommentPost === post.id ? null : post.id)}><Comment /></IconButton>
//               <IconButton onClick={() => alert("Share coming soon!")}><Share /></IconButton>
//             </Box>

//             <Box ml="9%" mt={1}>
//               {post.comments.map((c) => (
//                 <Box key={c.id} display="flex" alignItems="center" justifyContent="space-between" mb={0.5}>
//                   <Box>
//                     <Typography variant="subtitle2">{c.user}</Typography>
//                     <Typography variant="body2">{c.content}</Typography>
//                     <Typography variant="caption">{c.createdAt}</Typography>
//                   </Box>
//                   {c.user === currentUser && (
//                     <Box>
//                       <Button size="small" onClick={() => setCommentModal({ open: true, postId: post.id, commentId: c.id, content: c.content })}>Edit</Button>
//                       <Button size="small" onClick={() => deleteComment(post.id, c.id)}>Delete</Button>
//                     </Box>
//                   )}
//                 </Box>
//               ))}

//               {activeCommentPost === post.id && (
//                 <Box display="flex" gap={1} mt={1}>
//                   <TextField size="small" fullWidth placeholder="Write a comment..." value={newComment} onChange={(e) => setNewComment(e.target.value)} />
//                   <Button size="small" variant="contained" onClick={() => addComment(post.id)}>Post</Button>
//                 </Box>
//               )}
//             </Box>
//           </Card>
//         ))}
//       </Box>
//     </LocalizationProvider>
//   );
// }

import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Card,
  Avatar,
  Typography,
  TextField,
  Button,
  Modal,
  IconButton,
  Input,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Image,
  EmojiEmotions,
  CalendarToday,
  Settings,
  Add,
  Description,
  Poll,
  Close,
  ThumbUp,
  Comment,
  Share,
  MoreVert,
} from "@mui/icons-material";
import EmojiPicker from "emoji-picker-react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PollComponent from "react-polls";
import { gsap } from "gsap";

export default function Innovations() {
  const savedUser = JSON.parse(localStorage.getItem("user"));
  const currentUser = savedUser?.username || "Anonymous";

  const [open, setOpen] = useState(false);
  const [idea, setIdea] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const [media, setMedia] = useState(null);
  const [mediaModal, setMediaModal] = useState({ open: false, src: "" });
  const [scheduleDate, setScheduleDate] = useState(null);
  const [scheduleTime, setScheduleTime] = useState(null);
  const [showExtras, setShowExtras] = useState(false);
  const [showPollInput, setShowPollInput] = useState(false);
  const [pollOption, setPollOption] = useState("");
  const [pollOptions, setPollOptions] = useState([]);
  const [showDocInput, setShowDocInput] = useState(false);
  const [docFile, setDocFile] = useState(null);
  const [posts, setPosts] = useState([]);

  const [activeCommentPost, setActiveCommentPost] = useState(null);
  const [newComment, setNewComment] = useState("");
  const [commentModal, setCommentModal] = useState({ open: false, postId: null, commentId: null, content: "" });
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedPostId, setSelectedPostId] = useState(null);

  const emojiPickerRef = useRef(null);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("innovPosts")) || [];
    setPosts(savedPosts);
  }, []);

  useEffect(() => {
    localStorage.setItem("innovPosts", JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (emojiPickerRef.current && !emojiPickerRef.current.contains(e.target)) {
        setShowEmoji(false);
      }
    };
    if (showEmoji) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showEmoji]);

  const resetPostState = () => {
    setIdea("");
    setMedia(null);
    setScheduleDate(null);
    setScheduleTime(null);
    setShowEmoji(false);
    setShowExtras(false);
    setShowPollInput(false);
    setPollOption("");
    setPollOptions([]);
    setShowDocInput(false);
    setDocFile(null);
  };

  const handlePost = () => {
    if (!idea.trim() && !media && pollOptions.length === 0 && !docFile) return;

    const now = dayjs();
    const scheduledTime =
      scheduleDate && scheduleTime
        ? dayjs(`${scheduleDate.format("YYYY-MM-DD")} ${scheduleTime.format("HH:mm")}`)
        : null;

    const newPost = {
      id: Date.now(),
      user: currentUser,
      avatar: "https://i.pravatar.cc/150?img=5",
      content: idea,
      media,
      poll: pollOptions.length > 0 ? pollOptions.map(opt => ({ option: opt, votes: 0 })) : null,
      voted: false,
      document: docFile || null,
      schedule: scheduledTime,
      createdAt: now.format("YYYY-MM-DD HH:mm:ss"),
      likes: Math.floor(Math.random() * 50) + 1,
      liked: false,
      comments: [],
    };

    setPosts([newPost, ...posts]);
    resetPostState();
    setOpen(false);
  };

  const addComment = (postId, content = null) => {
    const text = content || newComment;
    if (!text.trim()) return;

    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [
                ...post.comments,
                { id: Date.now(), user: currentUser, content: text, createdAt: dayjs().format("YYYY-MM-DD HH:mm") },
              ],
            }
          : post
      )
    );
    setNewComment("");
    setActiveCommentPost(null);
    if (content) setCommentModal({ open: false, postId: null, commentId: null, content: "" });
  };

  const editComment = (postId, commentId, updatedText) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments.map((c) => (c.id === commentId ? { ...c, content: updatedText } : c)),
            }
          : post
      )
    );
    toast.success("Comment updated!");
  };

  const deleteComment = (postId, commentId) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId ? { ...post, comments: post.comments.filter((c) => c.id !== commentId) } : post
      )
    );
    toast.info("Comment deleted!");
  };

  const handleLike = (id) => {
    setPosts((prev) =>
      prev.map((post) => {
        if (post.id === id) {
          gsap.fromTo(`#like-${id}`, { scale: 0.8 }, { scale: 1, duration: 0.3, ease: "elastic.out(1, 0.5)" });
          return { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 };
        }
        return post;
      })
    );
  };

  const handleMediaClick = (src) => {
    setMediaModal({ open: true, src });
  };

  const handleVote = (post, option) => {
    setPosts(prev =>
      prev.map(p => {
        if (p.id === post.id) {
          const updatedPoll = p.poll.map(ans =>
            ans.option === option
              ? { ...ans, votes: (ans.votes || 0) + 1 }
              : ans
          );
          gsap.fromTo(`#poll-${p.id}`, { scale: 0.95 }, { scale: 1, duration: 0.3, ease: "elastic.out(1, 0.5)" });
          toast.info("Vote updated!");
          return { ...p, poll: updatedPoll, voted: true };
        }
        return p;
      })
    );
  };

  const handleThreeDots = (event, postId) => {
    setAnchorEl(event.currentTarget);
    setSelectedPostId(postId);
  };

  const handlePostMenu = (action) => {
    if (!selectedPostId) return;
    if (action === "edit") {
      const post = posts.find((p) => p.id === selectedPostId);
      setIdea(post.content);
      setMedia(post.media);
      setOpen(true);
    } else if (action === "delete") {
      setPosts((prev) => prev.filter((p) => p.id !== selectedPostId));
      toast.info("Post deleted!");
    }
    setAnchorEl(null);
    setSelectedPostId(null);
  };

  const displayPost = (post) => (!post.schedule ? true : dayjs().isAfter(post.schedule));
  const handleEmojiClick = (emojiData) => setIdea((prev) => prev + emojiData.emoji);
  const handleMediaUpload = (e) => setMedia(URL.createObjectURL(e.target.files[0]));
  const handleDocUpload = (e) => setDocFile(e.target.files[0]);
  const addPollOption = () => {
    if (pollOption.trim() !== "") {
      setPollOptions([...pollOptions, pollOption]);
      setPollOption("");
    }
  };

  const handleInvestorCelebration = () =>
    {
      setIdea(prev => prev + "\n🎉 Congratulations Renuga! You just got an Investor! 🚀\n");
      setMedia("https://thumbs.dreamstime.com/b/businesspeople-hot-air-balloon-investing-money-future-profit-businessman-businesswoman-spend-much-to-wealth-assets-218099758.jpg");
    };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ToastContainer position="top-right" autoClose={2000} />
      <Box p={3} maxWidth="800px" mx="auto">
        {/* Mini share box */}
        <Card sx={{ p: 2, mb: 3, cursor: "pointer" }} onClick={() => setOpen(true)}>
          <Box display="flex" alignItems="center">
            <Avatar src="https://i.pravatar.cc/150?img=5" />
            <TextField fullWidth placeholder="Challenge Your Creativity" sx={{ ml: 2 }} InputProps={{ readOnly: true }} />
          </Box>
        </Card>

        {/* Post Modal */}
        <Modal open={open} onClose={() => setOpen(false)}>
          <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, bgcolor: "background.paper", boxShadow: 24, borderRadius: 3, p: 3 }}>
            <IconButton onClick={() => setOpen(false)} sx={{ position: "absolute", top: 8, right: 8 }}>
              <Close />
            </IconButton>

            <Box display="flex" alignItems="center" mb={2}>
              <Avatar src="https://i.pravatar.cc/150?img=5" />
              <Box ml={2}>
                <Typography variant="subtitle1" fontWeight="bold">{currentUser}</Typography>
                <Typography variant="caption">Post to Anyone</Typography>
              </Box>
            </Box>

            <TextField fullWidth multiline minRows={5} placeholder="Innovation meets Intellectual Thinking" value={idea} onChange={(e) => setIdea(e.target.value)} />

            {media && (
              <Box mt={2}>
                <Typography variant="caption">Attached Media:</Typography>
                <img src={media} alt="upload" style={{ width: "300px", height: "200px", borderRadius: 8, display: "block", margin: "auto", cursor: "pointer" }} onClick={() => handleMediaClick(media)} />
              </Box>
            )}

            {showEmoji && (
              <Box ref={emojiPickerRef} sx={{ mt: 2, maxHeight: 300, overflowY: "auto" }}>
                <EmojiPicker onEmojiClick={handleEmojiClick} width="100%" />
              </Box>
            )}

            <Box display="flex" justifyContent="space-between" mt={2} flexWrap="wrap">
              <Box display="flex" alignItems="center">
                <IconButton onClick={() => setShowEmoji((prev) => !prev)}><EmojiEmotions /></IconButton>
                <IconButton component="label"><Image /><input type="file" hidden onChange={handleMediaUpload} /></IconButton>
                <IconButton onClick={() => setScheduleDate(scheduleDate ? null : dayjs())}><CalendarToday color={scheduleDate ? "primary" : "default"} /></IconButton>
                <IconButton onClick={handleInvestorCelebration}> <Settings/> </IconButton>
                {!showExtras && <IconButton onClick={() => setShowExtras(true)}><Add /></IconButton>}
                {showExtras && <>
                  <IconButton onClick={() => setShowPollInput((prev) => !prev)}><Poll /></IconButton>
                  <IconButton onClick={() => setShowDocInput((prev) => !prev)}><Description /></IconButton>
                </>}
              </Box>
              <Button variant="contained" disabled={!idea.trim() && !media && pollOptions.length === 0 && !docFile} onClick={handlePost}>Post</Button>
            </Box>

            {scheduleDate && (
              <Box mt={2} gap={1} ml={1} display="flex" flexDirection="column" width="150px">
                <DatePicker label="Select Date" value={scheduleDate} onChange={(d) => setScheduleDate(d)} />
                <TimePicker label="Select Time" value={scheduleTime} onChange={(t) => setScheduleTime(t)} />
              </Box>
            )}

            {showPollInput && (
              <Box mt={2}>
                <Typography variant="subtitle2">Add Poll Options:</Typography>
                <Box display="flex" gap={1} mt={1}>
                  <TextField size="small" placeholder="Option" value={pollOption} onChange={(e) => setPollOption(e.target.value)} />
                  <Button size="small" variant="outlined" onClick={addPollOption}>Add</Button>
                </Box>
                <Box mt={1}>{pollOptions.map((opt, idx) => (<Typography key={idx}>• {opt}</Typography>))}</Box>
              </Box>
            )}

            {showDocInput && (
              <Box mt={2}>
                <Typography variant="subtitle2">Attach Document:</Typography>
                <Input type="file" onChange={handleDocUpload} />
                {docFile && <Typography mt={1}>{docFile.name}</Typography>}
              </Box>
            )}
          </Box>
        </Modal>

        {/* Media Modal */}
        <Modal open={mediaModal.open} onClose={() => setMediaModal({ open: false, src: "" })}>
          <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", bgcolor: "background.paper", boxShadow: 24, borderRadius: 2, p: 2 }}>
            <img src={mediaModal.src} alt="media" style={{ maxWidth: "600px", maxHeight: "600px" }} />
          </Box>
        </Modal>

        {/* Comment Edit Modal */}
        <Modal open={commentModal.open} onClose={() => setCommentModal({ open: false, postId: null, commentId: null, content: "" })}>
          <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", bgcolor: "background.paper", boxShadow: 24, borderRadius: 2, p: 2 }}>
            <TextField fullWidth multiline value={commentModal.content} onChange={(e) => setCommentModal((prev) => ({ ...prev, content: e.target.value }))} />
            <Button variant="contained" sx={{ mt: 1 }} onClick={() => editComment(commentModal.postId, commentModal.commentId, commentModal.content)}>Update</Button>
          </Box>
        </Modal>

        {/* Posts */}
        {posts.filter(displayPost).map((post) => (
          <Card key={post.id} sx={{ p: 2, mb: 2 }}>
            <Box display="flex" alignItems="center" mb={1} justifyContent="space-between">
              <Box display="flex" alignItems="center">
                <Avatar src={post.avatar} />
                <Box ml={2}>
                  <Typography variant="subtitle1" fontWeight="bold">{post.user}</Typography>
                  <Typography variant="caption">{post.schedule ? `Scheduled for: ${dayjs(post.schedule).format("YYYY-MM-DD HH:mm")}` : `Posted at: ${dayjs(post.createdAt).format("YYYY-MM-DD HH:mm")}`}</Typography>
                </Box>
              </Box>
              <IconButton onClick={(e) => handleThreeDots(e, post.id)}><MoreVert /></IconButton>
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
                <MenuItem onClick={() => handlePostMenu("edit")}>Edit</MenuItem>
                <MenuItem onClick={() => handlePostMenu("delete")}>Delete</MenuItem>
              </Menu>
            </Box>

            <Typography variant="body1" sx={{ whiteSpace: "pre-line", marginLeft: "9%" }}>{post.content}</Typography>

            {post.media && <img src={post.media} alt="post-media" style={{ width: "600px", height: "400px", marginTop: 12, borderRadius: 8, marginLeft: "9%", cursor: "pointer" }} onClick={() => handleMediaClick(post.media)} />}

            {post.poll && (
              <Box ml="9%" mt={1} id={`poll-${post.id}`}>
                <Typography variant="subtitle2">Poll:</Typography>
                <PollComponent
                  question="Choose your option"
                  answers={post.poll}
                  onVote={(answer) => handleVote(post, answer)}
                  customStyles={{
                    question: { fontSize: "16px", fontWeight: "bold" },
                    answer: { fontSize: "15px", color: "#333" },
                    button: { backgroundColor: "#1976d2", color: "#fff" }
                  }}
                  allowChangingVote={true}
                />
              </Box>
            )}

            {post.document && (
              <Box ml="9%" mt={1}>
                <Typography variant="subtitle2">Document:</Typography>
                {post.document.type.startsWith("image/") ? (
                  <Typography sx={{ color: "blue", cursor: "pointer" }} onClick={() => handleMediaClick(URL.createObjectURL(post.document))}>{post.document.name}</Typography>
                ) : (
                  <iframe src={URL.createObjectURL(post.document)} width="100%" height="400px" title="Document" style={{ border: "1px solid #ccc", borderRadius: 8, marginTop: 4 }} />
                )}
              </Box>
            )}

            <Box display="flex" alignItems="center" mt={1} ml="9%">
              <IconButton color={post.liked ? "primary" : "default"} onClick={() => handleLike(post.id)} id={`like-${post.id}`}><ThumbUp /> <Typography ml={0.5}>{post.likes}</Typography></IconButton>
              <IconButton onClick={() => setActiveCommentPost(activeCommentPost === post.id ? null : post.id)}><Comment /></IconButton>
              <IconButton onClick={() => alert("Share coming soon!")}><Share /></IconButton>
            </Box>

            <Box ml="9%" mt={1}>
              {post.comments.map((c) => (
                <Box key={c.id} display="flex" alignItems="center" justifyContent="space-between" mb={0.5}>
                  <Box>
                    <Typography variant="subtitle2">{c.user}</Typography>
                    <Typography variant="body2">{c.content}</Typography>
                    <Typography variant="caption">{c.createdAt}</Typography>
                  </Box>
                  {c.user === currentUser && (
                    <Box>
                      <Button size="small" onClick={() => setCommentModal({ open: true, postId: post.id, commentId: c.id, content: c.content })}>Edit</Button>
                      <Button size="small" onClick={() => deleteComment(post.id, c.id)}>Delete</Button>
                    </Box>
                  )}
                </Box>
              ))}

              {activeCommentPost === post.id && (
                <Box display="flex" gap={1} mt={1}>
                  <TextField size="small" fullWidth placeholder="Write a comment..." value={newComment} onChange={(e) => setNewComment(e.target.value)} />
                  <Button size="small" variant="contained" onClick={() => addComment(post.id)}>Post</Button>
                </Box>
              )}
            </Box>
          </Card>
        ))}
      </Box>
    </LocalizationProvider>
  );
}

// import React, { useState, useRef, useEffect } from "react";
// import {
//   Box,
//   Card,
//   Avatar,
//   Typography,
//   TextField,
//   Button,
//   Modal,
//   IconButton,
//   Input,
//   Menu,
//   MenuItem,
// } from "@mui/material";
// import {
//   Image,
//   EmojiEmotions,
//   CalendarToday,
//   Settings,
//   Add,
//   Description,
//   Poll,
//   Close,
//   ThumbUp,
//   Comment,
//   Share,
//   MoreVert,
// } from "@mui/icons-material";
// import EmojiPicker from "emoji-picker-react";
// import dayjs from "dayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DatePicker, TimePicker } from "@mui/x-date-pickers";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import PollComponent from "react-polls";
// import { gsap } from "gsap";
// import InvestorDB, { saveItem, getAllItems, deleteItem } from "./InvestorDB";
// import { saveComment, getComments } from "./InvestorDB";

// export default function Innovations() {
//   const savedUser = JSON.parse(localStorage.getItem("user"));
//   const currentUser = savedUser?.username || "Anonymous";

//   const [open, setOpen] = useState(false);
//   const [idea, setIdea] = useState("");
//   const [showEmoji, setShowEmoji] = useState(false);
//   const [media, setMedia] = useState(null);
//   const [mediaModal, setMediaModal] = useState({ open: false, src: "" });
//   const [scheduleDate, setScheduleDate] = useState(null);
//   const [scheduleTime, setScheduleTime] = useState(null);
//   const [showExtras, setShowExtras] = useState(false);
//   const [showPollInput, setShowPollInput] = useState(false);
//   const [pollOption, setPollOption] = useState("");
//   const [pollOptions, setPollOptions] = useState([]);
//   const [showDocInput, setShowDocInput] = useState(false);
//   const [docFile, setDocFile] = useState(null);
//   const [posts, setPosts] = useState([]);

//   const [activeCommentPost, setActiveCommentPost] = useState(null);
//   const [newComment, setNewComment] = useState("");
//   const [commentModal, setCommentModal] = useState({ open: false, postId: null, commentId: null, content: "" });
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [selectedPostId, setSelectedPostId] = useState(null);

//   const [shareModal, setShareModal] = useState({ open: false, post: null });
//   const friends = ["Alice", "Bob", "Charlie"]; // fake friend list


//   const emojiPickerRef = useRef(null);

//   useEffect(() => {
//   const loadPosts = async () => {
//     const savedPosts = await getAllItems("post");
//     const sorted = savedPosts.sort((a, b) => b.id - a.id);

//     // Attach saved comments
//     for (let post of sorted) {
//       const comments = await getComments(post.id);
//       post.comments = comments;
//     }

//     setPosts(sorted);
//   };
//   loadPosts();
// }, []);



//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (emojiPickerRef.current && !emojiPickerRef.current.contains(e.target)) {
//         setShowEmoji(false);
//       }
//     };
//     if (showEmoji) document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [showEmoji]);

//   const resetPostState = () => {
//     setIdea("");
//     setMedia(null);
//     setScheduleDate(null);
//     setScheduleTime(null);
//     setShowEmoji(false);
//     setShowExtras(false);
//     setShowPollInput(false);
//     setPollOption("");
//     setPollOptions([]);
//     setShowDocInput(false);
//     setDocFile(null);
//   };

//   const handlePost = async () => {
//     if (!idea.trim() && !media && pollOptions.length === 0 && !docFile) return;

//     const now = dayjs();
//     const scheduledTime =
//       scheduleDate && scheduleTime
//         ? dayjs(`${scheduleDate.format("YYYY-MM-DD")} ${scheduleTime.format("HH:mm")}`)
//         : null;

//     const newPost = {
//       id: Date.now(),
//       user: currentUser,
//       avatar: "https://i.pravatar.cc/150?img=5",
//       content: idea,
//       media: media ? { name: media.name, type: media.type, blob: media } : null,
//       poll: pollOptions.length > 0 ? pollOptions.map(opt => ({ option: opt, votes: 0 })) : null,
//       voted: false,
//       document: docFile ? { name: docFile.name, type: docFile.type, blob: docFile } : null,
//       schedule: scheduledTime,
//       createdAt: now.format("YYYY-MM-DD HH:mm:ss"),
//       likes: Math.floor(Math.random() * 50) + 1,
//       liked: false,
//       comments: [],
//     };

//     await saveItem("post", newPost.id, newPost); // persist to DB
//     setPosts([newPost, ...posts]);
//     resetPostState();
//     setOpen(false);
//   };

//   const addComment = async (postId, content = null) => {
//   const text = content || newComment;
//   if (!text.trim()) return;

//   const comment = {
//     id: Date.now(),
//     user: currentUser,
//     content: text,
//     createdAt: dayjs().format("YYYY-MM-DD HH:mm"),
//   };

//   await saveComment(postId, comment.id, comment);

//   setPosts((prev) =>
//     prev.map((post) =>
//       post.id === postId ? { ...post, comments: [...post.comments, comment] } : post
//     )
//   );
//   setNewComment("");
//   setActiveCommentPost(null);
//   if (content) setCommentModal({ open: false, postId: null, commentId: null, content: "" });
// };

//   const editComment = (postId, commentId, updatedText) => {
//     setPosts((prev) =>
//       prev.map((post) =>
//         post.id === postId
//           ? {
//               ...post,
//               comments: post.comments.map((c) => (c.id === commentId ? { ...c, content: updatedText } : c)),
//             }
//           : post
//       )
//     );
//     toast.success("Comment updated!");
//   };

//   const deleteComment = (postId, commentId) => {
//     setPosts((prev) =>
//       prev.map((post) =>
//         post.id === postId ? { ...post, comments: post.comments.filter((c) => c.id !== commentId) } : post
//       )
//     );
//     toast.info("Comment deleted!");
//   };

//   const handleLike = (id) => {
//     setPosts((prev) =>
//       prev.map((post) => {
//         if (post.id === id) {
//           gsap.fromTo(`#like-${id}`, { scale: 0.8 }, { scale: 1, duration: 0.3, ease: "elastic.out(1, 0.5)" });
//           return { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 };
//         }
//         return post;
//       })
//     );
//   };

//   const handleMediaClick = (src) => {
//     setMediaModal({ open: true, src });
//   };

//   const handleVote = (post, option) => {
//     setPosts(prev =>
//       prev.map(p => {
//         if (p.id === post.id) {
//           const updatedPoll = p.poll.map(ans =>
//             ans.option === option
//               ? { ...ans, votes: (ans.votes || 0) + 1 }
//               : ans
//           );
//           gsap.fromTo(`#poll-${p.id}`, { scale: 0.95 }, { scale: 1, duration: 0.3, ease: "elastic.out(1, 0.5)" });
//           toast.info("Vote updated!");
//           return { ...p, poll: updatedPoll, voted: true };
//         }
//         return p;
//       })
//     );
//   };

//   const handleThreeDots = (event, postId) => {
//     setAnchorEl(event.currentTarget);
//     setSelectedPostId(postId);
//   };

//   const handlePostMenu = async (action) => {
//   if (!selectedPostId) return;
//   if (action === "edit") {
//     const post = posts.find((p) => p.id === selectedPostId);
//     setIdea(post.content);
//     setMedia(post.media);
//     setOpen(true);
//   } else if (action === "delete") {
//     await deleteItem("post", selectedPostId); // remove from DB
//     setPosts((prev) => prev.filter((p) => p.id !== selectedPostId));
//     toast.info("Post deleted!");
//   }
//   setAnchorEl(null);
//   setSelectedPostId(null);
// };


//   const displayPost = (post) => (!post.schedule ? true : dayjs().isAfter(post.schedule));
//   const handleEmojiClick = (emojiData) => setIdea((prev) => prev + emojiData.emoji);
//   const handleMediaUpload = (e) => {
//   const file = e.target.files[0];
//   if (!file) return;
//   setMedia(file); // store actual file, not URL
// };

// const handleDocUpload = (e) => {
//   const file = e.target.files[0];
//   if (!file) return;
//   setDocFile(file);
// };

//   const addPollOption = () => {
//     if (pollOption.trim() !== "") {
//       setPollOptions([...pollOptions, pollOption]);
//       setPollOption("");
//     }
//   };

//   const handleInvestorCelebration = () =>
//     {
//       setIdea(prev => prev + "\n🎉 Congratulations Renuga! You just got an Investor! 🚀\n");
//       setMedia("https://thumbs.dreamstime.com/b/businesspeople-hot-air-balloon-investing-money-future-profit-businessman-businesswoman-spend-much-to-wealth-assets-218099758.jpg");
//     };

//     const handleDocClick = (file) => {
//       const url = URL.createObjectURL(file);

//       if (file.type.startsWith("image/")) {
//         setMediaModal({ open: true, src: url, type: "image", name: file.name });
//       } else if (file.type === "application/pdf") {
//         setMediaModal({ open: true, src: url, type: "pdf", name: file.name });
//       } else {
//         // Fallback: just download if not PDF or image
//         const link = document.createElement("a");
//         link.href = url;
//         link.download = file.name;
//         link.click();
//         toast.info("This file type can only be downloaded.");
//       }
//     };


//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <ToastContainer position="top-right" autoClose={2000} />
//       <Box p={3} maxWidth="800px" mx="auto">
//         {/* Mini share box */}
//         <Card sx={{ p: 2, mb: 3, cursor: "pointer" }} onClick={() => setOpen(true)}>
//           <Box display="flex" alignItems="center">
//             <Avatar src="https://i.pravatar.cc/150?img=5" />
//             <TextField fullWidth placeholder="Challenge Your Creativity" sx={{ ml: 2 }} InputProps={{ readOnly: true }} />
//           </Box>
//         </Card>

//         {/* Post Modal */}
//         <Modal open={open} onClose={() => setOpen(false)}>
//           <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, bgcolor: "background.paper", boxShadow: 24, borderRadius: 3, p: 3 }}>
//             <IconButton onClick={() => setOpen(false)} sx={{ position: "absolute", top: 8, right: 8 }}>
//               <Close />
//             </IconButton>

//             <Box display="flex" alignItems="center" mb={2}>
//               <Avatar src="https://i.pravatar.cc/150?img=5" />
//               <Box ml={2}>
//                 <Typography variant="subtitle1" fontWeight="bold">{currentUser}</Typography>
//                 <Typography variant="caption">Post to Anyone</Typography>
//               </Box>
//             </Box>

//             <TextField fullWidth multiline minRows={5} placeholder="Innovation meets Intellectual Thinking" value={idea} onChange={(e) => setIdea(e.target.value)} />

//             {media && (
//               <Box mt={2}>
//                 <Typography variant="caption">Attached Media:</Typography>
//                 <img src={media} alt="upload" style={{ width: "300px", height: "200px", borderRadius: 8, display: "block", margin: "auto", cursor: "pointer" }} onClick={() => handleMediaClick(media)} />
//               </Box>
//             )}

//             {showEmoji && (
//               <Box ref={emojiPickerRef} sx={{ mt: 2, maxHeight: 300, overflowY: "auto" }}>
//                 <EmojiPicker onEmojiClick={handleEmojiClick} width="100%" />
//               </Box>
//             )}

//             <Box display="flex" justifyContent="space-between" mt={2} flexWrap="wrap">
//               <Box display="flex" alignItems="center">
//                 <IconButton onClick={() => setShowEmoji((prev) => !prev)}><EmojiEmotions /></IconButton>
//                 <IconButton component="label"><Image /><input type="file" hidden onChange={handleMediaUpload} /></IconButton>
//                 <IconButton onClick={() => setScheduleDate(scheduleDate ? null : dayjs())}><CalendarToday color={scheduleDate ? "primary" : "default"} /></IconButton>
//                 <IconButton onClick={handleInvestorCelebration}> <Settings/> </IconButton>
//                 {!showExtras && <IconButton onClick={() => setShowExtras(true)}><Add /></IconButton>}
//                 {showExtras && <>
//                   <IconButton onClick={() => setShowPollInput((prev) => !prev)}><Poll /></IconButton>
//                   <IconButton onClick={() => setShowDocInput((prev) => !prev)}><Description /></IconButton>
//                 </>}
//               </Box>
//               <Button variant="contained" disabled={!idea.trim() && !media && pollOptions.length === 0 && !docFile} onClick={handlePost}>Post</Button>
//             </Box>

//             {scheduleDate && (
//               <Box mt={2} gap={1} ml={1} display="flex" flexDirection="column" width="150px">
//                 <DatePicker label="Select Date" value={scheduleDate} onChange={(d) => setScheduleDate(d)} />
//                 <TimePicker label="Select Time" value={scheduleTime} onChange={(t) => setScheduleTime(t)} />
//               </Box>
//             )}

//             {showPollInput && (
//               <Box mt={2}>
//                 <Typography variant="subtitle2">Add Poll Options:</Typography>
//                 <Box display="flex" gap={1} mt={1}>
//                   <TextField size="small" placeholder="Option" value={pollOption} onChange={(e) => setPollOption(e.target.value)} />
//                   <Button size="small" variant="outlined" onClick={addPollOption}>Add</Button>
//                 </Box>
//                 <Box mt={1}>{pollOptions.map((opt, idx) => (<Typography key={idx}>• {opt}</Typography>))}</Box>
//               </Box>
//             )}

//             {showDocInput && (
//               <Box mt={2}>
//                 <Typography variant="subtitle2">Attach Document:</Typography>
//                 <Input type="file" onChange={handleDocUpload} />
//                 {docFile && <Typography mt={1}>{docFile.name}</Typography>}
//               </Box>
//             )}
//           </Box>
//         </Modal>

//         {/* Media Modal */}
//        <Modal
//   open={mediaModal.open}
//   onClose={() => setMediaModal({ open: false, src: "", type: "", name: "" })}
// >
//   <Box
//     sx={{
//       position: "absolute",
//       top: "50%",
//       left: "50%",
//       transform: "translate(-50%, -50%)",
//       bgcolor: "background.paper",
//       boxShadow: 24,
//       borderRadius: 2,
//       p: 2,
//       maxWidth: "90%",
//       maxHeight: "90%",
//       overflow: "auto",
//     }}
//   >
//     {mediaModal.type === "image" && (
//       <img
//         src={mediaModal.src}
//         alt="preview"
//         style={{ maxWidth: "100%", maxHeight: "80vh" }}
//       />
//     )}

//     {mediaModal.type === "pdf" && (
//       <iframe
//         src={mediaModal.src}
//         width="800px"
//         height="600px"
//         style={{ border: "none" }}
//         title="PDF Preview"
//       />
//     )}

//     {mediaModal.type === "doc" && (
//       <iframe
//         src={mediaModal.src}
//         width="800px"
//         height="600px"
//         style={{ border: "none" }}
//         title="Document Preview"
//       />
//     )}
//   </Box>
// </Modal>


//       <Modal open={shareModal.open} onClose={() => setShareModal({ open: false, post: null })}>
//   <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", bgcolor: "background.paper", p: 2, borderRadius: 2 }}>
//     <Typography variant="h6">Share with:</Typography>
//     {friends.map((f) => (
//       <Button
//         key={f}
//         onClick={async () => {
//           await saveShare(f, shareModal.post.id, shareModal.post);
//           toast.success(`Shared with ${f}!`);
//           setShareModal({ open: false, post: null });
//         }}
//       >
//         {f}
//       </Button>
//     ))}
//   </Box>
// </Modal>


//         {/* Comment Edit Modal */}
//         <Modal open={commentModal.open} onClose={() => setCommentModal({ open: false, postId: null, commentId: null, content: "" })}>
//           <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", bgcolor: "background.paper", boxShadow: 24, borderRadius: 2, p: 2 }}>
//             <TextField fullWidth multiline value={commentModal.content} onChange={(e) => setCommentModal((prev) => ({ ...prev, content: e.target.value }))} />
//             <Button variant="contained" sx={{ mt: 1 }} onClick={() => editComment(commentModal.postId, commentModal.commentId, commentModal.content)}>Update</Button>
//           </Box>
//         </Modal>

//         {/* Posts */}
//         {posts.filter(displayPost).map((post) => (
//           <Card key={post.id} sx={{ p: 2, mb: 2 }}>
//             <Box display="flex" alignItems="center" mb={1} justifyContent="space-between">
//               <Box display="flex" alignItems="center">
//                 <Avatar src={post.avatar} />
//                 <Box ml={2}>
//                   <Typography variant="subtitle1" fontWeight="bold">{post.user}</Typography>
//                   <Typography variant="caption">{post.schedule ? `Scheduled for: ${dayjs(post.schedule).format("YYYY-MM-DD HH:mm")}` : `Posted at: ${dayjs(post.createdAt).format("YYYY-MM-DD HH:mm")}`}</Typography>
//                 </Box>
//               </Box>
//               <IconButton onClick={(e) => handleThreeDots(e, post.id)}><MoreVert /></IconButton>
//               <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
//                 <MenuItem onClick={() => handlePostMenu("edit")}>Edit</MenuItem>
//                 <MenuItem onClick={() => handlePostMenu("delete")}>Delete</MenuItem>
//               </Menu>
//             </Box>

//             <Typography variant="body1" sx={{ whiteSpace: "pre-line", marginLeft: "9%" }}>{post.content}</Typography>

//             {post.media && <img src={post.media} alt="post-media" style={{ width: "600px", height: "400px", marginTop: 12, borderRadius: 8, marginLeft: "9%", cursor: "pointer" }} onClick={() => handleMediaClick(post.media)} />}

//             {post.poll && (
//               <Box ml="9%" mt={1} id={`poll-${post.id}`}>
//                 <Typography variant="subtitle2">Poll:</Typography>
//                 <PollComponent
//                   question="Choose your option"
//                   answers={post.poll}
//                   onVote={(answer) => handleVote(post, answer)}
//                   customStyles={{
//                     question: { fontSize: "16px", fontWeight: "bold" },
//                     answer: { fontSize: "15px", color: "#333" },
//                     button: { backgroundColor: "#1976d2", color: "#fff" }
//                   }}
//                   allowChangingVote={true}
//                 />
//               </Box>
//             )}

//             {post.document && (
//   <Box ml="9%" mt={1}>
//     <Typography variant="subtitle2">Document:</Typography>
//     <Typography
//       sx={{ color: "blue", cursor: "pointer" }}
//       onClick={() => handleDocClick(post.document)}
//     >
//       {post.document.name}
//     </Typography>
//   </Box>
// )}


//             <Box display="flex" alignItems="center" mt={1} ml="9%">
//               <IconButton color={post.liked ? "primary" : "default"} onClick={() => handleLike(post.id)} id={`like-${post.id}`}><ThumbUp /> <Typography ml={0.5}>{post.likes}</Typography></IconButton>
//               <IconButton onClick={() => setActiveCommentPost(activeCommentPost === post.id ? null : post.id)}><Comment /></IconButton>
//               <IconButton onClick={() => setShareModal({ open: true, post })}><Share /></IconButton>
//             </Box>

//             <Box ml="9%" mt={1}>
//               {post.comments.map((c) => (
//                 <Box key={c.id} display="flex" alignItems="center" justifyContent="space-between" mb={0.5}>
//                   <Box>
//                     <Typography variant="subtitle2">{c.user}</Typography>
//                     <Typography variant="body2">{c.content}</Typography>
//                     <Typography variant="caption">{c.createdAt}</Typography>
//                   </Box>
//                   {c.user === currentUser && (
//                     <Box>
//                       <Button size="small" onClick={() => setCommentModal({ open: true, postId: post.id, commentId: c.id, content: c.content })}>Edit</Button>
//                       <Button size="small" onClick={() => deleteComment(post.id, c.id)}>Delete</Button>
//                     </Box>
//                   )}
//                 </Box>
//               ))}

//               {activeCommentPost === post.id && (
//                 <Box display="flex" gap={1} mt={1}>
//                   <TextField size="small" fullWidth placeholder="Write a comment..." value={newComment} onChange={(e) => setNewComment(e.target.value)} />
//                   <Button size="small" variant="contained" onClick={() => addComment(post.id)}>Post</Button>
//                 </Box>
//               )}
//             </Box>
//           </Card>
//         ))}
//       </Box>
//     </LocalizationProvider>
//   );
// }

