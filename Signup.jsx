import React, { useState } from "react";
import {
  Avatar, Button, CssBaseline, TextField, Grid, Box,
  Typography, Container, Paper, Stack
} from "@mui/material";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import { auth, db } from "../FireBase/FireBase";
import { doc, setDoc } from "firebase/firestore";

const theme = createTheme();

export default function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      const uid = cred.user.uid;

      const username = "user_" + Date.now(); // simple unique username
      const profile = { uid, email, username, createdAt: Date.now() };
      await setDoc(doc(db, "users", uid), profile);

      localStorage.setItem("user", JSON.stringify(profile));
      navigate("/Investorhome", { replace: true });
    } catch (err) {
      setError(err.message);
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
          transition={{ duration: 0.45 }}
          sx={{ p: 4, borderRadius: 4, width: "100%" }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Avatar sx={{ m: 1, bgcolor: "success.main" }}>
              <PersonAddAlt1Icon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ fontWeight: 700 }}>
              Create account
            </Typography>

            <Box component="form" onSubmit={handleSignup} sx={{ mt: 3, width: "100%" }}>
              <TextField required fullWidth label="Email" name="email" type="email" />
              <TextField required fullWidth label="Password" name="password" type="password" sx={{ mt: 2 }} />

              {error && (
                <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                  {error}
                </Typography>
              )}

              <Stack spacing={2} sx={{ mt: 3 }}>
                <Button type="submit" variant="contained" size="large" disabled={loading}>
                  {loading ? "Creating..." : "Sign Up"}
                </Button>
                <Typography variant="body2" sx={{ textAlign: "center" }}>
                  Already have an account?{" "}
                  <Typography component={RouterLink} to="/login" sx={{ textDecoration: "none", fontWeight: 600 }}>
                    Sign in
                  </Typography>
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
