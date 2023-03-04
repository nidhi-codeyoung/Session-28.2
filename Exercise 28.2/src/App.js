import React, { Component } from 'react';  
class App extends React.Component {  
 constructor() {  
      super();        
      this.state = { displayBio: false };  
      console.log('Component this', this);  
      this.toggleDisplayBio = this.toggleDisplayBio.bind(this);  
      }  
      toggleDisplayBio(){  
          this.setState({displayBio: !this.state.displayBio});  
          }  
      render() {  
          return (  
              <div>  
                  <h1>Hey Friends, I am Daniel here!!</h1>  
                  {  
                      this.state.displayBio ? (   
                          <div>  
                              <p><h4>I am Daniel from UAE and currently I am learning Web Development level-2 at Codeyoung.<br></br><br></br>
                  I'm very much interested in learning new skills and technologies and codeyoung is helping me to add new skills in it.<br></br>
                  </h4></p>  
                              <button onClick={this.toggleDisplayBio}> Show Less </button>  
                        </div>  
                          ) : (  
                              <div>  
                                  <button onClick={this.toggleDisplayBio}> Read More </button>  
                              </div>  
                          )  
                  }  
             </div>  
        )  
    }  
}  
export default App;  