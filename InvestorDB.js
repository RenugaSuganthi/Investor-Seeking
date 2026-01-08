import localforage from "localforage";

const InvestorDB = localforage.createInstance({
  name: "InvestorDB",
  storeName: "allInOne",
});

// Save item
export const saveItem = async (type, id, data) => {
  await InvestorDB.setItem(`${type}:${id}`, data);
};

// Get one item
export const getItem = async (type, id) => {
  return await InvestorDB.getItem(`${type}:${id}`);
};

// Get all items of type
export const getAllItems = async (type) => {
  const results = [];
  await InvestorDB.iterate((value, key) => {
    if (key.startsWith(`${type}:`)) results.push(value);
  });
  return results;
};

// Delete one item
export const deleteItem = async (type, id) => {
  await InvestorDB.removeItem(`${type}:${id}`);
};

// Special: Save comment for a post
export const saveComment = async (postId, commentId, comment) => {
  await InvestorDB.setItem(`comment:${postId}:${commentId}`, comment);
};

// Get all comments for post
export const getComments = async (postId) => {
  const comments = [];
  await InvestorDB.iterate((value, key) => {
    if (key.startsWith(`comment:${postId}:`)) comments.push(value);
  });
  return comments;
};

// Share a post
export const saveShare = async (userId, postId, post) => {
  await InvestorDB.setItem(`share:${userId}:${postId}`, post);
};

// Get all shares for a user
export const getShares = async (userId) => {
  const shares = [];
  await InvestorDB.iterate((value, key) => {
    if (key.startsWith(`share:${userId}:`)) shares.push(value);
  });
  return shares;
};

// Save a chat message
export const saveMessage = async (chatId, messageId, message) => {
  await InvestorDB.setItem(`chat:${chatId}:${messageId}`, message);
};

// Get all messages for a chat
export const getMessages = async (chatId) => {
  const messages = [];
  await InvestorDB.iterate((value, key) => {
    if (key.startsWith(`chat:${chatId}:`)) messages.push(value);
  });
  return messages.sort((a, b) => a.id - b.id);
};

// Delete a message
export const deleteMessage = async (chatId, messageId) => {
  await InvestorDB.removeItem(`chat:${chatId}:${messageId}`);
};


export default InvestorDB;
