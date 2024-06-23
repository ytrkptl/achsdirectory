import { Component } from "react";
// import { API_URL } from "../../config";
import "./EditEmployee.css";

class EditEmployee extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
      details: [],
      obj: {},
      lastname: "",
      firstname: "",
    };
  }

  componentDidMount() {
    // fetch('http://localhost:3000')
    // fetch('https://achsdirectory-api.herokuapp.com/')
    // .then(response=>response.json())
    // .then(users => this.setState({ allmovies: users, movies: users }));
  }

  onLastnameChange = (event) => {
    this.setState({ lastname: event.target.value });
  };
  onFirstnameChange = (event) => {
    this.setState({ firstname: event.target.value });
  };
  searchLastnames = (event) => {
    // fetch(
    //   `${API_URL}/findemployeeid/${this.state.lastname}`
    // )
    //   // fetch('https://achsdirectory-api.herokuapp.com/')
    //   .then((response) => response.json())
    //   .then((users) => {
    //     let someArray = [];
    //     for (let i = 0; i < users.arrayTwo.length; i++) {
    //       someArray.push(users.arrayTwo[i]);
    //     }
    //     this.setState({ message: users.message, details: someArray });
    //   })
    //   .catch((error) => console.log(error));
  };
  searchFirstnames = (event) => {
    // fetch(
    //   `${API_URL}/findemployeeid/none/${this.state.firstname}`
    // )
    //   // fetch('https://achsdirectory-api.herokuapp.com/')
    //   .then((response) => response.json())
    //   .then((users) =>
    //     this.setState({ message: users.message, details: users.arrayTwo })
    //   )
    //   .catch((error) => console.log(error));
  };
  searchBothnames = (event) => {
    // fetch(
    //   `${API_URL}/findemployeeid/${this.state.lastname}/${this.state.firstname}`
    // )
    //   // fetch('https://achsdirectory-api.herokuapp.com/')
    //   .then((response) => response.json())
    //   .then((users) =>
    //     this.setState({ message: users.message, details: users.arrayTwo })
    //   )
    //   .catch((error) => console.log(error));
  };
  render() {
    return (
      <div id="parentOfEdit">
        <p>
          Type in the name of the employee you would like to update the details
          for:
        </p>
        <div className="subDiv">
          <label htmlFor="lastname">Lastname*</label>
          <input
            id="lastnameFind"
            type="search"
            name="lastname"
            placeholder="Lastname"
            required
            autoFocus={true}
            onChange={this.onLastnameChange}
          />
          <button
            id="lastnameFindBtn"
            onClick={(event) => this.searchLastnames()}
          >
            Search by Lastname Only
          </button>
        </div>
        <div className="subDiv">
          <label htmlFor="firstname">Firstname*</label>
          <input
            id="firstnameFind"
            type="search"
            name="firstname"
            placeholder="Firstname"
            required
            onChange={this.onFirstnameChange}
          />
          <button
            id="firstnameFindBtn"
            onClick={(event) => this.searchFirstnames()}
          >
            Search by Firstname Only
          </button>
        </div>
        <button
          id="bothFindBtn"
          onClick={(event) => this.searchBothnames(event)}
        >
          Search by Lastname and Firstname
        </button>
        <div className="customEditMessage">
          {this.state.message !== "" && this.state.message}
        </div>
        <div>
          {
            this.state.details.length !== 0 &&
              this.state.details.map((el, index) => {
                return (
                  <div key={index}>
                    {index === 0 && (
                      <div className="customEditTable">
                        <span>recordId</span>
                        <span>Details</span>
                      </div>
                    )}
                    {
                      <div className="customEditTable">
                        <span className="customEditTableCol1">{el.id}</span>
                        <div className="formClass">
                          <form>
                            {Object.keys(el.contacts).map((el2, index2) => (
                              <input
                                className="customEditInput"
                                key={index2}
                                value={el2}
                                type="text"
                                onChange={(event) =>
                                  console.log(event.target.value)
                                }
                              />
                            ))}
                            <button>edit</button>
                          </form>
                          <form className="">
                            {Object.values(el.contacts).map((el3, index3) => (
                              <input
                                className="customEditInput"
                                key={index3}
                                value={el3}
                                type="text"
                                onChange={(event) =>
                                  console.log(event.target.value)
                                }
                              />
                            ))}
                            <button>edit</button>
                          </form>
                        </div>
                      </div>
                    }
                  </div>
                );
              })

            // Object.values(this.state.details.contacts).map((el, index)=>{
            // 	return (
            // 		<div key={index} className="customEditTable">
            // 			<span>{el}</span>
            // 			<div>
            // 				{el}
            // 			</div>
            // 		</div>
            // 	)
            // })
            // console.log(Object.keys(this.state.details[0].contacts))
          }
        </div>
      </div>
    );
  }
}

export default EditEmployee;
