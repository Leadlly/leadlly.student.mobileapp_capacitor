import { ChatIcon, VideoChatIcon, RequestMeetingIcon } from "@/components";
import ConnectButton from "./ConnectButton";
import Link from "next/link";

const ConnectWithMentor = () => {
  return (
    <div className="md:px-3">
      <h4 className="text-sm md:text-lg font-bold md:text-center py-1 md:py-4">
        Connect with mentor
      </h4>

      <div className="grid grid-cols-2 gap-2 md:flex md:flex-col md:justify-start md:gap-3 w-full">
        <Link href="/chat?tab=chat" className="col-span-2">
          <ConnectButton
            title="Connect with mentor"
            icon={<ChatIcon className="w-4 h-4 md:w-5 md:h-5" />}
          />
        </Link>

        <Link href="/chat?tab=meetings">
          <ConnectButton
            title="Conference meeting"
            icon={<VideoChatIcon className="w-4 h-4 md:w-5 md:h-5" />}
          />
        </Link>

        <Link href="/chat?tab=requestMeeting">
          <ConnectButton
            title="Request a meeting"
            icon={<RequestMeetingIcon className="w-4 h-4 md:w-5 md:h-5" />}
          />
        </Link>
      </div>
    </div>
  );
};

export default ConnectWithMentor;
