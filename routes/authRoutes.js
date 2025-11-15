const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/user");

// Google Auth Start
router.get("/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google Callback
router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/?error=google_failed",
  }),
  (req, res) => {
    res.redirect("/dashboard");
  }
);

// Logout
router.get("/logout", (req, res) => {
  req.logout(() => {
    req.session.destroy(() => {
      res.redirect("/");
    });
  });
});

// Export router only (IMPORTANT)
module.exports = router;
