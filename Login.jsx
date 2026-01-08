/* import React, { useState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  Paper,
  Stack,
  Divider,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider, db } from "../FireBase/FireBase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const theme = createTheme();

export default function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function persistUser(uid, email) {
    // Try to get existing profile (must include username)
    const ref = doc(db, "users", uid);
    const snap = await getDoc(ref);

    let profile;
    if (snap.exists()) {
      profile = snap.data();
    } else {
      // If user never signed up (e.g., first-time Google signin), create profile
      const username = "user_" + Date.now(); // simple unique username
      profile = { uid, email, username, createdAt: Date.now() };
      await setDoc(ref, profile);
    }

    // Save in localStorage so header can show avatar immediately
    localStorage.setItem("user", JSON.stringify(profile));
    return profile;
  }

  const handleEmailLogin = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      const user = cred.user;
      await persistUser(user.uid, user.email);
      navigate("/Investorhome", { replace: true });
    } catch (err) {
      setError("Invalid E-mail or Password");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      await persistUser(user.uid, user.email);
      navigate("/Investorhome", { replace: true });
    } catch (err) {
      setError("Google sign-in failed. Check provider is enabled in Firebase.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm" sx={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
        <CssBaseline />
        <Paper
          elevation={10}
          component={motion.div}
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          sx={{
            p: 4,
            borderRadius: 4,
            width: "100%",
            backdropFilter: "blur(8px)",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Avatar
              sx={{ m: 1, bgcolor: "primary.main" }}
              component={motion.div}
              initial={{ scale: 0.8, rotate: -8 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ fontWeight: 700 }}>
              Sign in
            </Typography>

            <Box component="form" onSubmit={handleEmailLogin} noValidate sx={{ mt: 3, width: "100%" }}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
              />

              {error && (
                <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                  {error}
                </Typography>
              )}

              <Stack spacing={2} sx={{ mt: 3 }}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  disabled={loading}
                  component={motion.button}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? "Signing In..." : "Sign In"}
                </Button>

                <Divider>or</Divider>

                <Button
                  fullWidth
                  variant="outlined"
                  size="large"
                  startIcon={<GoogleIcon />}
                  onClick={handleGoogleLogin}
                  disabled={loading}
                  component={motion.button}
                  whileTap={{ scale: 0.98 }}
                >
                  Sign in with Google
                </Button>
              </Stack>

              <Grid container sx={{ mt: 2 }}>
                <Grid item>
                  <Typography variant="body2">
                    Don’t have an account?{" "}
                    <Typography
                      component={RouterLink}
                      to="/signup"
                      sx={{ textDecoration: "none", fontWeight: 600 }}
                    >
                      Sign Up
                    </Typography>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
 */

/* import React, { useState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  Paper,
  Stack,
  Divider,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider, db } from "../FireBase/FireBase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const theme = createTheme();

export default function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function persistUser(uid, email) {
    // Try to get existing profile (must include username)
    const ref = doc(db, "users", uid);
    const snap = await getDoc(ref);

    let profile;
    if (snap.exists()) {
      profile = snap.data();
    } else {
      // If user never signed up (e.g., first-time Google signin), create profile
      const username = "user_" + Date.now(); // simple unique username
      profile = { uid, email, username, createdAt: Date.now() };
      await setDoc(ref, profile);
    }

    // Save in localStorage so header can show avatar immediately
    localStorage.setItem("user", JSON.stringify(profile));
    return profile;
  }

  const handleEmailLogin = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      const user = cred.user;
      await persistUser(user.uid, user.email);
      const redirectPath = localStorage.getItem("redirectPath") || "/Investorhome";
      localStorage.removeItem("redirectPath");
      navigate(redirectPath, { replace: true });
    } catch (err) {
        setError("Invalid E-mail or Password");
    } finally {
        setLoading(false);
    }
    };

  const handleGoogleLogin = async () => {
    setError("");
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      await persistUser(user.uid, user.email);
      const redirectPath = localStorage.getItem("redirectPath") || "/Investorhome";
    localStorage.removeItem("redirectPath");
    navigate(redirectPath, { replace: true });
  } catch (err) {
    setError("Google sign-in failed. Check provider is enabled in Firebase.");
  } finally {
    setLoading(false);
  }
};

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm" sx={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
        <CssBaseline />
        <Paper
          elevation={10}
          component={motion.div}
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          sx={{
            p: 4,
            borderRadius: 4,
            width: "100%",
            backdropFilter: "blur(8px)",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Avatar
              sx={{ m: 1, bgcolor: "primary.main" }}
              component={motion.div}
              initial={{ scale: 0.8, rotate: -8 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ fontWeight: 700 }}>
              Sign in
            </Typography>

            <Box component="form" onSubmit={handleEmailLogin} noValidate sx={{ mt: 3, width: "100%" }}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
              />

              {error && (
                <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                  {error}
                </Typography>
              )}

              <Stack spacing={2} sx={{ mt: 3 }}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  disabled={loading}
                  component={motion.button}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? "Signing In..." : "Sign In"}
                </Button>

                <Divider>or</Divider>

                <Button
                  fullWidth
                  variant="outlined"
                  size="large"
                  startIcon={<GoogleIcon />}
                  onClick={handleGoogleLogin}
                  disabled={loading}
                  component={motion.button}
                  whileTap={{ scale: 0.98 }}
                >
                  Sign in with Google
                </Button>
              </Stack>

              <Grid container sx={{ mt: 2 }}>
                <Grid item>
                  <Typography variant="body2">
                    Don’t have an account?{" "}
                    <Typography
                      component={RouterLink}
                      to="/signup"
                      sx={{ textDecoration: "none", fontWeight: 600 }}
                    >
                      Sign Up
                    </Typography>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
} */
/* import React, { useState } from "react";
import { Avatar, Button, CssBaseline, TextField, Grid, Box, Typography, Container, Paper, Stack, Divider } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider, db } from "../FireBase/FireBase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const theme = createTheme();

export default function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function persistUser(uid, email) {
    const ref = doc(db, "users", uid);
    const snap = await getDoc(ref);

    let profile;
    if (snap.exists()) {
      profile = snap.data();
    } else {
      profile = { uid, email, username: "user_" + Date.now(), createdAt: Date.now() };
      await setDoc(ref, profile);
    }

    localStorage.setItem("user", JSON.stringify(profile));
    return profile;
  }

  const handleEmailLogin = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      await persistUser(cred.user.uid, cred.user.email);
      navigate("/Investorhome", { replace: true });
    } catch {
      setError("Invalid E-mail or Password");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      await persistUser(result.user.uid, result.user.email);
      navigate("/Investorhome", { replace: true });
    } catch {
      setError("Google sign-in failed. Check provider is enabled in Firebase.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm" sx={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
        <CssBaseline />
        <Paper elevation={10} sx={{ p: 4, borderRadius: 4, width: "100%" }}>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ fontWeight: 700 }}>Sign in</Typography>

            <Box component="form" onSubmit={handleEmailLogin} noValidate sx={{ mt: 3, width: "100%" }}>
              <TextField margin="normal" required fullWidth label="Email Address" name="email" type="email" autoFocus />
              <TextField margin="normal" required fullWidth name="password" label="Password" type="password" />

              {error && <Typography variant="body2" color="error" sx={{ mt: 1 }}>{error}</Typography>}

              <Stack spacing={2} sx={{ mt: 3 }}>
                <Button type="submit" fullWidth variant="contained" size="large" disabled={loading}> {loading ? "Signing In..." : "Sign In"} </Button>
                <Divider>or</Divider>
                <Button fullWidth variant="outlined" size="large" startIcon={<GoogleIcon />} onClick={handleGoogleLogin} disabled={loading}>
                  Sign in with Google
                </Button>
              </Stack>

              <Grid container sx={{ mt: 2 }}>
                <Grid item>
                  <Typography variant="body2">
                    Don’t have an account? <Typography component={RouterLink} to="/signup" sx={{ textDecoration: "none", fontWeight: 600 }}>Sign Up</Typography>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
 */

/* import React, { useState } from "react";
import { Avatar, Button, CssBaseline, TextField, Grid, Box, Typography, Container, Paper, Stack, Divider } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { auth, provider } from "../FireBase/FireBase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const theme = createTheme();

export default function Login() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Save user to MySQL backend
  const saveUserToDB = async (uid, email, username) => {
    try {
      await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uid, email, username }),
      });
    } catch (err) {
      console.error("Error saving user:", err);
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const data = new FormData(e.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      const user = cred.user;

      await saveUserToDB(user.uid, user.email, "user_" + Date.now());
      localStorage.setItem("user", JSON.stringify({ uid: user.uid, email: user.email }));

      const redirectPath = localStorage.getItem("redirectPath") || "/Investorhome";
      localStorage.removeItem("redirectPath");
      window.location.href = redirectPath;
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    setLoading(true);

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      await saveUserToDB(user.uid, user.email, user.displayName || "user_" + Date.now());
      localStorage.setItem("user", JSON.stringify({ uid: user.uid, email: user.email }));

      const redirectPath = localStorage.getItem("redirectPath") || "/Investorhome";
      localStorage.removeItem("redirectPath");
      window.location.href = redirectPath;
    } catch (err) {
      setError("Google sign-in failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper elevation={10} sx={{ p: 4, borderRadius: 4, mt: 8 }}>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">Sign in</Typography>

            <Box component="form" onSubmit={handleEmailLogin} noValidate sx={{ mt: 3, width: "100%" }}>
              <TextField margin="normal" required fullWidth label="Email Address" name="email" type="email" autoFocus />
              <TextField margin="normal" required fullWidth label="Password" name="password" type="password" />

              {error && <Typography color="error" variant="body2" sx={{ mt: 1 }}>{error}</Typography>}

              <Stack spacing={2} sx={{ mt: 3 }}>
                <Button type="submit" fullWidth variant="contained" disabled={loading}>
                  {loading ? "Signing in..." : "Sign In"}
                </Button>

                <Divider>or</Divider>

                <Button fullWidth variant="outlined" startIcon={<GoogleIcon />} onClick={handleGoogleLogin} disabled={loading}>
                  Sign in with Google
                </Button>
              </Stack>

              <Grid container sx={{ mt: 2 }}>
                <Grid item>
                  <Typography variant="body2">
                    Don’t have an account? <a href="/signup" style={{ fontWeight: 600 }}>Sign Up</a>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
 */

// import React, { useState, useEffect } from "react";
// import {
//   Avatar,
//   Button,
//   CssBaseline,
//   TextField,
//   Grid,
//   Box,
//   Typography,
//   Container,
//   Stack,
//   Divider,
// } from "@mui/material";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import GoogleIcon from "@mui/icons-material/Google";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
// import { auth, provider } from "../FireBase/FireBase";

// const theme = createTheme();

// export default function Login() {
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [user, setUser] = useState(null);

//   // Check if user is already logged in
//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) setUser(JSON.parse(storedUser));
//   }, []);

//   // Generate unique username
//   const generateUsername = (email) => {
//     const base = email.split("@")[0];
//     const random = Math.floor(1000 + Math.random() * 9000);
//     return `${base}_${random}`;
//   };

//   // Save user to MySQL backend
//   const saveUserToDB = async (uid, email) => {
//     const username = generateUsername(email);
//     try {
//       await fetch("http://localhost:5000/api/users", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ uid, email, username }),
//       });
//       return { uid, email, username };
//     } catch (err) {
//       console.error(err);
//       return { uid, email, username };
//     }
//   };

//   const handleEmailLogin = async (event) => {
//     event.preventDefault();
//     setError("");
//     setLoading(true);
//     const data = new FormData(event.currentTarget);
//     const email = data.get("email");
//     const password = data.get("password");

//     try {
//       const cred = await signInWithEmailAndPassword(auth, email, password);
//       const userObj = await saveUserToDB(cred.user.uid, cred.user.email);
//       localStorage.setItem("user", JSON.stringify(userObj));
//       setUser(userObj);

//       const redirectPath = localStorage.getItem("redirectPath") || "/Investorhome";
//       localStorage.removeItem("redirectPath");
//       window.location.href = redirectPath;
//     } catch (err) {
//       setError("Invalid email or password");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     setError("");
//     setLoading(true);
//     try {
//       const result = await signInWithPopup(auth, provider);
//       const userObj = await saveUserToDB(result.user.uid, result.user.email);
//       localStorage.setItem("user", JSON.stringify(userObj));
//       setUser(userObj);

//       const redirectPath = localStorage.getItem("redirectPath") || "/Investorhome";
//       localStorage.removeItem("redirectPath");
//       window.location.href = redirectPath;
//     } catch (err) {
//       setError("Google sign-in failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleLogout = async () => {
//     await signOut(auth);
//     localStorage.removeItem("user");
//     setUser(null);
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             {user ? `Welcome, ${user.username}` : "Sign in"}
//           </Typography>

//           {user ? (
//             <Button
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3 }}
//               onClick={handleLogout}
//             >
//               Log Out
//             </Button>
//           ) : (
//             <Box component="form" onSubmit={handleEmailLogin} noValidate sx={{ mt: 1 }}>
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//                 autoFocus
//               />
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//               />

//               {error && (
//                 <Typography color="error" variant="body2">
//                   {error}
//                 </Typography>
//               )}

//               <Stack spacing={2} sx={{ mt: 3 }}>
//                 <Button
//                   type="submit"
//                   fullWidth
//                   variant="contained"
//                   disabled={loading}
//                 >
//                   {loading ? "Signing In..." : "Sign In"}
//                 </Button>

//                 <Divider>or</Divider>

//                 <Button
//                   fullWidth
//                   variant="outlined"
//                   startIcon={<GoogleIcon />}
//                   onClick={handleGoogleLogin}
//                   disabled={loading}
//                 >
//                   Sign in with Google
//                 </Button>
//               </Stack>

//               <Grid container sx={{ mt: 2 }}>
//                 <Grid item>
//                   <Typography variant="body2">
//                     Don’t have an account? <a href="/signup">Sign Up</a>
//                   </Typography>
//                 </Grid>
//               </Grid>
//             </Box>
//           )}
//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
// }  
// login with db but error in email

/*  import React, { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  Stack,
  Divider,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../FireBase/FireBase";

const theme = createTheme();

export default function Login() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  // Load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  // Save user to backend and return consistent username
  const saveUserToDB = async (uid, email, password = "") => {
    try {
      const resp = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uid, email, password }),
      });
      const userData = await resp.json();
      return userData; // { uid, email, username, password }
    } catch (err) {
      console.error("Error saving user to DB:", err);
      return { uid, email, username: email.split("@")[0] + "_0000", password };
    }
  };

  // Email/Password login
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const data = new FormData(e.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    try {
      // Call backend login
      const resp = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!resp.ok) {
        const errData = await resp.json();
        throw new Error(errData.error);
      }

      const userData = await resp.json(); // { uid, email, username }
      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);

      const redirectPath = localStorage.getItem("redirectPath") || "/Investorhome";
      localStorage.removeItem("redirectPath");
      window.location.href = redirectPath;
    } catch (err) {
      console.error(err);
      setError(err.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  // Google login
  const handleGoogleLogin = async () => {
    setError("");
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const userObj = await saveUserToDB(result.user.uid, result.user.email);
      localStorage.setItem("user", JSON.stringify(userObj));
      setUser(userObj);

      const redirectPath = localStorage.getItem("redirectPath") || "/Investorhome";
      localStorage.removeItem("redirectPath");
      window.location.href = redirectPath;
    } catch (err) {
      console.error(err);
      setError("Google sign-in failed: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Logout
  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {user ? `Welcome, ${user.username}` : "Sign in"}
          </Typography>

          {user ? (
            <Button fullWidth variant="contained" sx={{ mt: 3 }} onClick={handleLogout}>
              Log Out
            </Button>
          ) : (
            <Box component="form" onSubmit={handleEmailLogin} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Email Address"
                name="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
              />

              {error && <Typography color="error" variant="body2">{error}</Typography>}

              <Stack spacing={2} sx={{ mt: 3 }}>
                <Button type="submit" fullWidth variant="contained" disabled={loading}>
                  {loading ? "Signing In..." : "Sign In"}
                </Button>
                <Divider>or</Divider>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<GoogleIcon />}
                  onClick={handleGoogleLogin}
                  disabled={loading}
                >
                  Sign in with Google
                </Button>
              </Stack>

              <Grid container sx={{ mt: 2 }}>
                <Grid item>
                  <Typography variant="body2">
                    Don’t have an account? <a href="/signup">Sign Up</a>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
}  */
// Login.jsx
/* import React, { useState, useEffect } from "react";
import {
  Avatar, Button, CssBaseline, TextField,
  Grid, Box, Typography, Container, Stack, Divider
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function Login() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const saveUserToDB = async (uid, email, password = "") => {
    try {
      const resp = await fetch("/api/users", {  // Relative URL
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uid, email, password }),
      });
      return await resp.json();
    } catch (err) {
      console.error(err);
      return { uid, email, username: email.split("@")[0] + "_0000", password };
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const data = new FormData(e.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    try {
      const resp = await fetch("/api/login", {  // Relative URL
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!resp.ok) {
        const errData = await resp.json();
        throw new Error(errData.error);
      }

      const userData = await resp.json();
      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
      window.location.href = "/Investorhome"; // Redirect
    } catch (err) {
      setError(err.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{ mt: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {user ? `Welcome, ${user.username}` : "Sign in"}
          </Typography>

          {user ? (
            <Button fullWidth variant="contained" sx={{ mt: 3 }} onClick={handleLogout}>
              Log Out
            </Button>
          ) : (
            <Box component="form" onSubmit={handleEmailLogin} noValidate sx={{ mt: 1 }}>
              <TextField margin="normal" required fullWidth label="Email Address" name="email" autoFocus />
              <TextField margin="normal" required fullWidth name="password" label="Password" type="password" />
              {error && <Typography color="error">{error}</Typography>}
              <Stack spacing={2} sx={{ mt: 3 }}>
                <Button type="submit" fullWidth variant="contained" disabled={loading}>
                  {loading ? "Signing In..." : "Sign In"}
                </Button>
                <Divider>or</Divider>
                <Button fullWidth variant="outlined" startIcon={<GoogleIcon />} >
                  Sign in with Google
                </Button>
              </Stack>
              <Grid container sx={{ mt: 2 }}>
                <Grid item>
                  <Typography variant="body2">
                    Don’t have an account? <a href="/signup">Sign Up</a>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
} */

import React, { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  Stack,
  Divider,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../FireBase/FireBase";

const theme = createTheme();

export default function Login() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  // Check if user is already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  // Save user to DB (one email → one username)
  const saveUserToDB = async (uid, email) => {
    // Check localStorage first
    const storedUsers = JSON.parse(localStorage.getItem("allUsers")) || {};
    if (storedUsers[email]) {
      return storedUsers[email]; // return existing username
    }

    // Generate new username if not exist
    const username = `${email.split("@")[0]}_${Math.floor(1000 + Math.random() * 9000)}`;

    try {
      await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uid, email, username }),
      });
    } catch (err) {
      console.error(err);
    }

    // Save in localStorage for future logins
    storedUsers[email] = { uid, email, username };
    localStorage.setItem("allUsers", JSON.stringify(storedUsers));

    return { uid, email, username };
  };

  // Email login
  const handleEmailLogin = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      const userObj = await saveUserToDB(cred.user.uid, cred.user.email);
      localStorage.setItem("user", JSON.stringify(userObj));
      setUser(userObj);

      const redirectPath = localStorage.getItem("redirectPath") || "/Investorhome";
      localStorage.removeItem("redirectPath");
      window.location.href = redirectPath;
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  // Google login
  const handleGoogleLogin = async () => {
    setError("");
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const userObj = await saveUserToDB(result.user.uid, result.user.email);
      localStorage.setItem("user", JSON.stringify(userObj));
      setUser(userObj);

      const redirectPath = localStorage.getItem("redirectPath") || "/Investorhome";
      localStorage.removeItem("redirectPath");
      window.location.href = redirectPath;
    } catch (err) {
      setError("Google sign-in failed");
    } finally {
      setLoading(false);
    }
  };

  // Logout
  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem("user"); // remove current session only
    setUser(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {user ? `Welcome, ${user.username}` : "Sign in"}
          </Typography>

          {user ? (
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3 }}
              onClick={handleLogout}
            >
              Log Out
            </Button>
          ) : (
            <Box component="form" onSubmit={handleEmailLogin} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              {error && (
                <Typography color="error" variant="body2">
                  {error}
                </Typography>
              )}

              <Stack spacing={2} sx={{ mt: 3 }}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={loading}
                >
                  {loading ? "Signing In..." : "Sign In"}
                </Button>

                <Divider>or</Divider>

                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<GoogleIcon />}
                  onClick={handleGoogleLogin}
                  disabled={loading}
                >
                  Sign in with Google
                </Button>
              </Stack>

              <Grid container sx={{ mt: 2 }}>
                <Grid item>
                  <Typography variant="body2">
                    Don’t have an account? <a href="/signup">Sign Up</a>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
}

