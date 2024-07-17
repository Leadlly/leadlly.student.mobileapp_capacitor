"use client";

import { getFreeTrialActive } from "@/actions/subscription_actions";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthProviderContext";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const ActivateFreeTrialButton = () => {
  const [isActivating, setIsActivating] = useState(false);

  const { setUser } = useAuth();

  const router = useRouter();

  const onClickHandler = async () => {
    setIsActivating(true);

    try {
      const res = await getFreeTrialActive();
      setUser(res.user);

      toast.success(res?.message);

      router.replace("/initial-study-data");
    } catch (error: any) {
      toast.error(error?.message);
    } finally {
      setIsActivating(false);
    }
  };
  return (
    <Button
      onClick={onClickHandler}
      size="lg"
      className="text-base md:text-lg max-w-64 w-full"
      disabled={isActivating}>
      {isActivating ? (
        <span className="flex items-center">
          <Loader2 className="w-5 h-5 animate-spin" />
        </span>
      ) : (
        "Enroll 21 Days Free Trail"
      )}
    </Button>
  );
};

export default ActivateFreeTrialButton;
