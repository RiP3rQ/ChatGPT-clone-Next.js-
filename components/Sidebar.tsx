import NewChat from "./NewChat";

function Sidebar() {
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        {/* NewChat Button */}
        <div>
          <NewChat />
        </div>
        {/* ModelSelection */}
        <div>{/* model */}</div>
        {/* Chat list - map through them */}
        <div>{/* chats */}</div>
      </div>
    </div>
  );
}

export default Sidebar;
