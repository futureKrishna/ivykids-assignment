import Tweet from "../models/Tweet.js";
import { handleError } from "../error.js";
import User from "../models/User.js";

export const createTweet = async (req, res, next) => {
  const newTweet = new Tweet(req.body);
  try {
    const savedTweet = await newTweet.save();
    res.status(200).json(savedTweet);
  } catch (err) {
    handleError(500, err);
  }
};

export const deleteTweet = async (req, res, next) => {
  try {
    const tweet = await Tweet.findById(req.params.id);
      await tweet.deleteOne();
      res.status(200).json("tweet has been deleted");
  } catch (err) {
    handleError(500, err);
  }
};

export const updateTweet=async(req,res)=>{
  try{
    console.log("hello",req.body)
    const updatedTweet = req.body.description;
    const tweet=await Tweet.findById(req.params.id);
    await tweet.updateOne({description:updatedTweet})
    res.status(200).json("tweet has been updated");
  } catch(err){
    handleError(500,err);
  }
}

export const likeOrDislike = async (req, res, next) => {
  try {
    const tweet = await Tweet.findById(req.params.id);
    if (!tweet.likes.includes(req.body.id)) {
      await tweet.updateOne({ $push: { likes: req.body.id } });
      res.status(200).json("tweet has been liked");
    } else {
      await tweet.updateOne({ $pull: { likes: req.body.id } });
      res.status(200).json("tweet has been disliked");
    }
  } catch (err) {
    handleError(500, err);
  }
};

export const getAllTweets = async (req, res, next) => {
  try {
    const currentUser = await User.findById(req.params.id);

    const followingTweets = await Tweet.find({ userId: { $in: currentUser.following } })
      .sort({ createdAt: -1 });

    const userTweets = await Tweet.find({ userId: currentUser._id })
      .sort({ createdAt: -1 });

    const allTweets = [...followingTweets, ...userTweets]
      .sort((a, b) => b.createdAt - a.createdAt);

    res.status(200).json(allTweets);
  } catch (err) {
    handleError(500, err);
  }
};


export const getUserTweets = async (req, res, next) => {
  try {
    const userTweets = await Tweet.find({ userId: req.params.id }).sort({
      createAt: -1,
    });

    res.status(200).json(userTweets);
  } catch (err) {
    handleError(500, err);
  }
};
export const getExploreTweets = async (req, res, next) => {
  try {
    const exploreTweets = await Tweet.find({
      likes: { $exists: true },
    }).sort({ likes: -1 });

    res.status(200).json(exploreTweets);
  } catch (err) {
    handleError(500, err);
  }
};
