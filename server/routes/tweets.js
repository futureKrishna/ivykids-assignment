import express from "express";
import { verifyToken } from "../verifyToken.js";
import {
  createTweet,
  updateTweet,
  deleteTweet,
  likeOrDislike,
  getAllTweets,
  getUserTweets,
  getExploreTweets,
} from "../controllers/tweet.js";

const router = express.Router();

// Create a Tweet
router.post("/", verifyToken, createTweet);

// Delete a Tweet
router.delete("/:id", verifyToken, deleteTweet);

//Update a Tweet
router.patch("/:id",verifyToken,updateTweet);

// Like or Dislike a Tweet
router.put("/:id/like", likeOrDislike);

// get all timeline tweets
router.get("/timeline/:id", getAllTweets);

// get user Tweets only
router.get("/user/all/:id", getUserTweets);

//explore
router.get("/explore", getExploreTweets);
export default router;
