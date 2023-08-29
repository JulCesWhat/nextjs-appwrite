const config = {
  appwriteUrl: (process.env.NEXT_PUBLIC_APPWRITE_URL || "").toString(),
  appwriteProjectId: (
    process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || ""
  ).toString(),
};
export default config;
