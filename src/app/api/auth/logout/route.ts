import { Preferences } from "@capacitor/preferences";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const res = NextResponse.json({ message: "Logged Out" });

    // res.cookies.set('token', '', {
    //   httpOnly: true,
    //   path: '/',
    //   sameSite: 'strict',
    //   expires: new Date(0),
    // });

    await Preferences.remove({ key: "token" });

    return res;
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
