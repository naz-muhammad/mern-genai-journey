import React from "react";
import Card from "./components/card/Card";
import "./App.css";

const App = () => {
  return (
    <div className="card-container">
      <Card name='Amazon' img={"https://images.seeklogo.com/logo-png/40/2/amazon-icon-logo-png_seeklogo-405254.png"}/>
      <Card name='Google' img={"https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/3:2/w_2560%2Cc_limit/google-logo.jpg"}/>
      <Card name='Dribble' img={"https://cdn-icons-png.flaticon.com/512/124/124037.png"}/>
      <Card name='Figma' img={"https://static.vecteezy.com/system/resources/thumbnails/065/386/871/small_2x/figma-logo-icon-figma-app-editable-transparent-background-premium-social-media-design-for-digital-download-free-png.png"}/>
      <Card name='Airbnb' img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2hfTAK5qJzWjHHnR9BHkxgRLD3qgti6l4igm4Pqdm4Q&s"}/>
      <Card name='Apple' img={"https://i.pinimg.com/736x/5e/67/1c/5e671cbe6457e88c59d9f82b8270749d.jpg"}/>
    </div>
  );
};

export default App;