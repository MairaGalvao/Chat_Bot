const name = 'Customer'

export default function Bot({ question }) {
  return (
    <>
      <div class="box-body">
        <div class="direct-chat-messages">
          <div class="direct-chat-msg">
            <div class="direct-chat-info clearfix">
              {" "}
              <span class="direct-chat-name pull-left">ChatMaira</span>{" "}
              <span class="direct-chat-timestamp pull-right"></span>{" "}
            </div>{" "}
            <img
              class="direct-chat-img"
              src="https://img.icons8.com/office/36/000000/person-female.png"
              alt="message user image"
            />
            {question}
            <div class="direct-chat-msg right">
              <div class="direct-chat-info clearfix">
                {" "}
                <span class="direct-chat-name pull-right">{name}</span>{" "}
                <span class="direct-chat-timestamp pull-left"></span>{" "}
              </div>{" "}
              <img
                class="direct-chat-img"
                src="https://img.icons8.com/color/36/000000/administrator-male.png"
                alt="message user image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
