import React, { useState, useEffect, useRef } from "react";
import { getCommentApi, postCommentApi } from "../assets/Api_test";

import {
  CommentWrapper,
  CommentInputSection,
  CommentInput,
  SubmitButton,
  CommentSection,
  CommentDiv,
  TextArea,
  AvatarImg,
  CommentAuthor,
  CommentContent,
} from "../styles/Detail/CommentStyles";

const UpdateComment = React.memo((commentData) => {
  console.log(commentData);
  return (
    <>
      {commentData &&
        commentData.map(({ id, username, post }) => (
          <CommentDiv key={id}>
            <AvatarImg alt={"User"} />
            <TextArea>
              <CommentAuthor>{username}</CommentAuthor>
              <CommentContent>{post}</CommentContent>
            </TextArea>
          </CommentDiv>
        ))}
    </>
  );
});

const Comment = ({ movieID }) => {
  const [commentData, setCommentData] = useState([]);
  const [comment, setComment] = useState({
    id: "3",
    username: "익명",
    post: "",
  });

  const replInput = useRef();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getCommentApi(movieID);
        console.log(response);
        setCommentData(response);
        console.log(commentData);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  const onChange = (e) => {
    setComment({
      ...comment,
      body: e.target.value,
    });
    console.log(comment);
  };

  const postComment = (e) => {
    e.preventDefault();
    const post = async () => {
      try {
        const response = await postCommentApi(movieID, comment);
        console.log(response);
        setCommentData(response);
      } catch (e) {
        console.log(e);
      }
    };
    post();
    setComment("");
  };

  useEffect(() => {
    UpdateComment();
  }, [commentData]);

  return (
    <CommentWrapper>
      <div>한줄평</div>
      <CommentInputSection>
        <CommentInput
          type="text"
          placeholder="댓글을 입력하세요."
          size="100"
          onChange={onChange}
          ref={replInput}
        />
        <SubmitButton
          className={
            comment.length > 0 ? "submitBtnActive" : "submitBtnInactive"
          }
          onClick={postComment}
        >
          게시
        </SubmitButton>
      </CommentInputSection>
      <CommentSection>
        {commentData && <UpdateComment commentData={commentData} />}
      </CommentSection>
    </CommentWrapper>
  );
};

export default Comment;
