import React from "react";
import "./App.scss";
import '../footer/footer.scss'
import Footer from '../footer/footer'
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    flexFlow: "column",
    height:"100%",
   
  },
  contentMain:{
    flex:"1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#f9f9f9"
  }
});


const App = ()=> {
  const classNamees = useStyles();
  return (
    <div className={classNamees.wrapper}>
      <header  className="header"> React on my way
      </header>
      <div className={classNamees.contentMain}>

      </div>
    <Footer />
    </div>
  );
}

export default App;

