const Notification = (props) => {
  //  Write your code here.
  const { messageText, className, iconUrl } = props;
  return (
    <div className={`notification-container ${className}`}>
      <img src={iconUrl} className="icon" />
      <p className="message">{messageText}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="notifications-app-container">
    <h1 className="heading">Notifications</h1>

    <div className="notifications-list-container">
      <Notification
        className="primary-bg-color"
        iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        message="Information Message"
      />
      <Notification
        className="success-bg-color"
        iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        message="Success Message"
      />
      <Notification
        className="warning-bg-color"
        iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        message="Warning Message"
      />
      <Notification
        className="danger-bg-color"
        iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        message="Error Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
