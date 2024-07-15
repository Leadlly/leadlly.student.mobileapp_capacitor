import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.leadlly.app",
  appName: "Leadlly",
  webDir: "out",
  server: {
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
