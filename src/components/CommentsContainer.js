import React from "react";
const commentsData = [
  {
    name: "ganesh",
    test: "lorem ipsum dollar",
    replies: [
      {
        name: "ganesh",
        test: "lorem ipsum dollar",
        replies: [
          {
            name: "ganesh",
            test: "lorem ipsum dollar",
            replies: [
              {
                name: "ganesh",
                test: "lorem ipsum dollar",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },

  {
    name: "ganesh",
    test: "lorem ipsum dollar",
    replies:[]
  },
  {
    name: "emo",
    test: "lorem ipsum dollar",
    replies:[
        {
            name: "ganesh",
            test: "lorem ipsum dollar",
            replies: [
              {
                name: "ganesh",
                test: "lorem ipsum dollar",
                replies: [
                  {
                    name: "ganesh",
                    test: "lorem ipsum dollar",
                    replies: [
                      {
                        name: "ganesh",
                        test: "lorem ipsum dollar",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
    ]

  },
  
];
const Comment = ({ data }) => {
  const { name, test, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100  rounded-lg p-2 my-2">
      <img
        className="w-12 h-12"
        alt="userimage"
        src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{test}</p>
      </div>
    </div>
  );
};
const CommentsList = ({ comments }) => {
  // dont use index as key
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment  data={comment} />
      <div className="pl-5 ml-5 border border-l-black">
        <CommentsList comments={comment.replies}/>
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-3xl">comments</h1>
      {/* <Comment data={commentsData[0]} /> */}
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
