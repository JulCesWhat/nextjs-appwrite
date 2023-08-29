import config from "@/config/config";
import { Client, Account, ID } from "appwrite";

interface CreateUserAccount {
  email: string;
  password: string;
  name: string;
}

interface LoginUserAccount {
  email: string;
  password: string;
}

const appwriteClient = new Client();

appwriteClient
  .setEndpoint(config.appwriteUrl)
  .setProject(config.appwriteProjectId);

export const account = new Account(appwriteClient);

export class AppwriteService {
  // create a new record of user inside appwrite
  async createUserAccount({ email, password, name }: CreateUserAccount) {
    try {
      const newUserAccount = await account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (newUserAccount) {
        this.login({ email, password });
      } else {
        return newUserAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }: LoginUserAccount) {
    try {
      return await account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async isLoggedIn(): Promise<boolean> {
    try {
      const userAccount = await this.getCurrentUser();
      return Boolean(userAccount);
    } catch (error) {
      return false;
    }
  }

  async getCurrentUser() {
    try {
      return await account.get();
    } catch (error) {
      console.error("getCurrentUser error: ", error);
      return null;
    }
  }

  async logout() {
    try {
      return await account.deleteSession("current");
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

const appwriteService = new AppwriteService();
export default appwriteService;
