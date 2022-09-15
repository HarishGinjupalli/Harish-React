const element = (
  // Write your code here.
  <div className="congrats-app-container">
    <div className="congrats-card-container">
      <h1 className="heading">Congratulations</h1>
      <div className="congrats-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
          className="profile-image"
        />
        <h1 className="congrats-card-title">Kiran V</h1>
        <p className="congrats-card-description">
          SRK Institute of technology, Vijayawada
        </p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
          className="watch-image"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
