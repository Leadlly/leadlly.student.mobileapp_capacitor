import { getMeetings } from "@/actions/meeting_actions";

import Loader from "@/components/shared/Loader";
import dynamic from "next/dynamic";
// import ChatMainPage from "./_components/ChatMainPage";

const ChatMainPage = dynamic(() => import("./_components/ChatMainPage"), {
  ssr: false,
});

const ChatPage = async () => {
  return <ChatMainPage />;
};

export default ChatPage;
