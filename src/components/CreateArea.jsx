import React, { useState }  from "react";
import { isPropertySignature } from "typescript";

//因为输入内容的过程在app中没有体现，没有任何一个component需要用它来render，所以放在这里
//而存放note内容的array是用来render Note的，所以放在App.jsx中。
function CreateArea(props) {
   const [note,setNote] = useState({
       //content这个词用得太多了，这里不要把state也叫成content，用note就好了。
       title:"",
       content:""
   });
   function updateNote(event) {
    console.log(event.target.name);
       console.log(event.target.value);
       const {name, value} = event.target;
       setNote((prevNote)=>{
           return {
               ...prevNote,
               [name]:value
           }
       })
       console.log(note);
   } 
   function submitNote(event){
    event.preventDefault(); 
    //之前放在下面不起作用？放在上面就行   
    props.onChecked(note);
    //这里就不需要再给props.onchecked（note）再套一层函数了
    setNote({
        title:"",
content:""
    })
   }
  return (
    <div>
      <form>
        <input onChange={updateNote} value={note.title}name="title" placeholder="Title" />
        <textarea onChange={updateNote} value={note.content}name="content" placeholder="Take a note..." rows="3" />
        <button 
        onClick={submitNote}
        /*这就是所谓的“Pass the new note back to the App”。
        这里onClick不用直接包括props.onChecked（note），它调用的函数中有就可以了
        props在整个component中都可以用
        之后在App.jsx中使用真正起作用的函数时（把note添加进array时），把note写在input就行 addItem（note）
        Error:
        之前写成了
        onClick= （（）=>【props.onChecked（note）】）
        导致无法添加event. preventDefault（）
        页面只要一点按钮就刷新
        尝试在updateNote（event）和App.jsx中addItem（note）添加 （而且写成了note.preventDefault（）
        前者没有用处，后者报错
        */
        >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
