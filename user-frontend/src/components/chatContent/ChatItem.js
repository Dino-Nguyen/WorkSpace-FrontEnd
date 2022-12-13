import Avatar from "../chatList/Avatar";

export default function ChatItem(props) {
  return (
    <div
      style={{ animationDelay: `0.8s` }}
      className={`chat__item ${props.user ? props.user : ""}`}
    >
      <div className="chat__item__content">
        <div className="chat__msg">{props.msg}</div>
        <div className="chat__meta">
          <span>0 min ago</span>
          <span>Sent 1.30</span>
        </div>
      </div>
      <Avatar isOnline="active" image={props.image} />
    </div>
  );
}

