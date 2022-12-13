import "./chatList.css";
import "./Add.css"
import ChatListItems from "./ChatListItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Add from "./Add";
import { useState } from "react";

export default function ChatList() {
  const [isAddOpen, setIsAddOpen] = useState(false)

  const allChatUsers = [
    {
      image:
        "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
      id: 1,
      name: "person 1",
      active: true,
      isOnline: true,
    },
    {
      image:
        "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
      id: 2,
      name: "person 2",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
      id: 3,
      name: "person 3",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
      id: 4,
      name: "person 4",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
      id: 5,
      name: "person 5",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
      id: 6,
      name: "person 6",
      active: false,
      isOnline: true,
    },
    {
      image:
      "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
      id: 7,
      name: "person 7",
      active: false,
      isOnline: true,
    }
  ];

    return (
      <div className="main__chatlist">
        <div className="chatlist__heading">
          <h2>Message</h2>
          <button className="btn-nobg">
            <i className="fa fa-ellipsis-h"></i>
          </button>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Search Here" required />
            <button className="search-btn">
            <FontAwesomeIcon icon="fa-search" />
            </button>
          </div>
          <div className="add-leave">
            <button className="add-btn" onClick={ () => {setIsAddOpen(true)} }><FontAwesomeIcon icon="fa-plus"/></button>
          </div>
          <Add isOpen={isAddOpen} onCancel={()=> setIsAddOpen(false)} title={"insert name"}>
            <input type="text" />
          </Add>
        </div>
        <div className="chatlist__items">
          {allChatUsers.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
}


