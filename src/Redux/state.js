import { rerenderEntireTree } from "../render";

let state = {
    oneData: [
        { id: "id1", text: "Text 1" },
        { id: "id2", text: "Text 2" },
        { id: "id3", text: "Text 3" }
    ],
    newPostText: 'Введите новый текст'
}

export let addPostState = () => {
    let newPost = {
        id: "id4",
        text: state.newPostText
    }
    state.oneData.push(newPost);
    state.newPostText = "";
    rerenderEntireTree(state);
}
export let updateNewPostText = (newText) => {
    state.newPostText = newText;
    rerenderEntireTree(state);
};

export default state;