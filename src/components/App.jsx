import React , { useState }  from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";


//Challenge. Render all the notes inside notes.js as a seperate Note
//component.
function App() {
  const [items,setItems] = useState([]);
  function addItem(note){
    setItems(prevItems=>[...prevItems,note])
    console.log(items);
    }
    function deleteItem(id){
      setItems((prevItems)=>{
        return prevItems.filter((item,index)=>{
          return index !==id;
        })
      })
    }
    return (<div>
      <Header />
      <CreateArea onChecked={addItem}/>
      {items.map((NoteItem,index)=>{
        return <Note 
        //此处忘记输入return，导致上面addItem虽然添加成功，依然无法render Notes。
        onChecked={deleteItem}
        key={index} 
        id={index} 
        title={NoteItem.title} 
        content={NoteItem.content} />
      })}
      <Footer />
    </div>);
};
export default App;