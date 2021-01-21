import react from 'react';
import "./page14.css";
import logo from "./logo.png";


class Freelancer extends react.Component {

  render() {
    return (
      <div>
        <div className="container">
          <div className="title">
            <div>Search</div>
            <div id="a2555">My Hires</div>
            <div>Starred Jobs</div>
            <div>
              <label for="province" accesskey="p">Sort</label>
              <select name="province" id="province">
                <option>Newest</option>
              </select>
            </div>
          </div>
          <hr />
          <div >
            <form action="#" className="for">
              <input type="text"
                placeholder=" Search All Hires by Name Or Titles"
                name="search"
                className="inp" />
                <button type="button" class="btn btn-outline-secondary"
                style={{borderwidth:1, borderright:0, bordercolor:"#fe885d", color:"#fe885d", bordertopleftradius: 25, borderbottomleftradius: 25,}}><i
                    class="fas fa-search"></i></button>
            </form>
            <div className="puld">
              <div className="guld">
              <img alt="logo"/>
                <div>Fernando will Help</div>
                <div>India</div>
                <div>12:55 AM Local Time</div>
                <div>Contracts</div>
                <div>UX UI  Ended</div>
              </div>
              <div className="reh">
                <div className="hire">Rehire</div>
                <div className="inv">Invite to Job</div>
              </div>
            </div>
            <hr/>
            <div className="puld">
              <div className="guld">
              <img alt="logo"/>
                <div>Fernando will Help</div>
                <div>India</div>
                <div>12:55 AM Local Time</div>
                <div>Contracts</div>
                <div>UX UI  Ended</div>
              </div>
              <div className="reh">
                <div className="hire">Rehire</div>
                <div className="inv">Invite to Job</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Freelancer;