"use client"
import { useState } from "react";
import Header from "../header/page";
import Footer from "../footer/page";
export default function CommentSystem() {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value);
  };

  const addComment = () => {
    if (newComment.trim() === "") return;
    setComments([...comments, newComment]);
    setNewComment("");
  };

  return (
    <div>
    <Header/>
    <div className="p-6 w-[60%] mx-auto  mt-[100px] bg-gradient-to-r from-teal-400 via-blue-300 to-indigo-500 rounded-lg shadow-xl">
      <h1 className="text-3xl font-bold text-white text-center mb-6">
        Leave Your Feedback
      </h1>
      <div className="bg-white p-5 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Write your  comment..."
          value={newComment}
          onChange={handleInputChange}
          className="w-full p-4 mb-4 rounded-full bg-gray-50 border-2 border-transparent focus:border-gradient-to-r focus:from-purple-500 focus:to-blue-500 focus:ring-4 focus:ring-purple-300 outline-none transition shadow-sm text-gray-700"
        />
        <button
          onClick={addComment}
          className="w-full py-3 rounded-full bg-gradient-to-r from-teal-400 via-blue-300 to-indigo-500 text-white font-semibold text-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform"
        >
           Comment
        </button>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-white mb-4">Comments:</h2>
        {comments.length > 0 ? (
          <ul className="space-y-4">
            {comments.map((comment, index) => (
              <li
                key={index}
                className="p-4 rounded-lg bg-gray-100 border-2 border-gray-300 shadow-sm hover:shadow-md transition"
              >
                {comment}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-white italic">No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>




    <Footer/>
    </div>
  );
}
