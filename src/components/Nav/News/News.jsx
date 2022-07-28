import React from "react";
import './News.css';



const News = (props) => {

  const One = (props) => {
    return (

      <div id={props.id}>{props.text}</div>

    )
  };

  let newPostElement = React.createRef();
   // функция, которая добавляет новый пост
   let addPost = () => {
    let text = newPostElement.current.value;
    props.addPostState(text);
    props.updateNewPostText("");
  }

  // функция, которая будет проверять изменения в textarea
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
    
  }
  let oneDataElements = props.oneData.map(elem => <One
    id={elem.id}
    text={elem.text}
    addPostState={props.addPostState}
    updateNewPostText={props.updateNewPostText}
  />)

  return (
    <div>
      <div className="divTextBtn">
        <textarea onChange={onPostChange} cols="20" rows="5" ref={newPostElement} value={props.newPostText}></textarea>
        <br />
        <button onClick={addPost}>Add post</button>
      </div>

      <div className="divNews">
        {oneDataElements}
      </div>
    </div>
  )
}

export default News;