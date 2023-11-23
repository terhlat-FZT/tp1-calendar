import './App.css';
import  { Component } from 'react';
class MyComponent extends Component{
constructor(props){
  super(props);
  this.state={t:new Date(),
    tt:new Date(),
    nav:0}
  setInterval(() => this.setState({tt:new Date()}), 1000)
} 
 ModifierMois = (v) => {


    var m=this.state.tt.getMonth()
   
    this.setState({t:new Date(this.state.tt.getFullYear(),m+this.state.nav+v,this.state.tt.getDate()),
    nav:this.state.nav+v});
    
}
 calendar = () => {

  const days=["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"]
  const anne = this.state.t.getFullYear();
  const mois =this.state.t.getMonth();
  const premierJour = new Date(anne,mois, 1);
  const derniereJour = new Date(anne,mois+1, 0).getDate();
  const f =days.indexOf(days[premierJour.getDay()]);
  const jj = f + derniereJour;
  const calendarRows = [];
  let row = [];
 
  for (let i = 1; i <= jj; i++) {
      const day = i - f;
      const JourA = this.state.tt.getDate() === day && this.state.tt.getMonth() === mois && this.state.tt.getFullYear() === anne;
    
       const dd = JourA ? "couleures" : "";
      if (i > f) {
          row.push(<td className={dd} key={i}>{day}</td>);
      } else { 
          row.push(<td key={i}></td>);
      }
      
      if (i % 7=== 0) {
          calendarRows.push(<tr key={i}>{row}</tr>);
          row = []; 
      }
  }
// Si le tableau est encore plein
  if (row.length > 0) {
      calendarRows.push(<tr key={jj}>{row}</tr>);
  }

  return calendarRows;
}
Next=()=>{

this.ModifierMois(1)
console.log("next");
   
   }

 



previw=()=>{


     this.ModifierMois(-1)
console.log("preview");
   }
                                                                                                                                                                      

render(){
  
  const months=["janvier","fevrier","mars","avril","mai","juin","juillet","aout","septembre","octobre","novmbre","decembre"];
  const days=["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"]
  
return <div>
  <span>{this.state.tt.getHours()+":"+this.state.tt.getMinutes()+":"+this.state.tt.getSeconds()}</span>
  <p>{days[this.state.tt.getDay()]+"  "+this.state.tt.getDate()+"  "+months[this.state.tt.getMonth()]}</p>
   <table>
    <thead>
      <tr>
        <td colSpan={7}><p>{months[this.state.t.getMonth()]+this.state.t.getFullYear()}
        <button onClick={() => this.previw()}>
            Precedent
          </button>
          <button onClick={() => this.Next()}>
            Next </button></p></td>
   <td></td>
   <td></td>
   <td></td>
   <td></td>
   <td></td>
   <td></td>
   

        </tr>
        </thead>
        <tbody >    <tr>
                <td>dim</td>
                <td>lun</td>
                <td>mar</td>
                <td>mer</td>
                <td>jeudi</td>
                <td>vendredi</td>
                <td>samd</td>
            </tr></tbody>
        <tfoot>{this.calendar()}</tfoot>
    </table>
</div>
}
}
export default MyComponent;
