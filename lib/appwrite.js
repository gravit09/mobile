import { Client, Account, ID } from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  //its there hosted address but as its open source they also allow self hosting.
  platform: process.env.EXPO_PUBLIC_PLATFORM,
  projectId: process.env.EXPO_PUBLIC_API_PROJECTID,
  databaseId: process.env.EXPO_PUBLIC_API_DATABASEID,
  userCollectionId: process.env.EXPO_PUBLIC_USERCOLLECTIONID,
  notesCollectionId: process.env.EXPO_PUBLIC_NOTESCOLLECTIONID,
  storageId: process.env.EXPO_PUBLIC_VITE_STORAGEID,
};

let client;

client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);

const account = new Account(client);

// Register User
export const createUser = (email, password, name) => {
  account.create(ID.unique(), email, password, name);
};
