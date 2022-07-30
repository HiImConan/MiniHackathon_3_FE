import { useState, useEffect, useRef } from "react";
import { getCommentApi } from "../assets/Api_test";

import {
  CommentWrapper,
  CommentInputSection,
  CommentInput,
  InputButton,
  CommentSection,
  CommentDiv,
  TextArea,
  AvatarImg,
  CommentAuthor,
  CommentContent,
} from "../styles/Detail/CommentStyles";

const Comment = ({ movieID }) => {
  const [commentData, setCommentData] = useState([]);
  const [repl, setRepl] = useState("");

  const replInput = useRef();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getCommentApi(movieID);
        console.log(response);
        setCommentData(response);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, [movieID]);

  const onChange = () => {};

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
        <InputButton>작성</InputButton>
      </CommentInputSection>
      <CommentSection>
        {commentData &&
          commentData.map(({ author, body, ...rest }) => (
            <CommentDiv key={author}>
              <AvatarImg alt={"User"} />
              <TextArea>
                <CommentAuthor>{author}</CommentAuthor>
                <CommentContent>{body}</CommentContent>
              </TextArea>
            </CommentDiv>
          ))}
      </CommentSection>
    </CommentWrapper>
  );
};

export default Comment;
