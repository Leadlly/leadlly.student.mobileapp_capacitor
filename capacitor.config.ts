import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.leadlly.app",
  appName: "Leadlly",
  webDir: "out",
  server: {
    url: "http://192.168.1.3:3000",
    cleartext: true,
    androidScheme: "http",
    allowNavigation: ["localhost"],
  },
  plugins: {
    CapacitorCookies: {
      enabled: true,
    },
    CapacitorHttp: {
      enabled: true,
    },
  },
};

export default config;
