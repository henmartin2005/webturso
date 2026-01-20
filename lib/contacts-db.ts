import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";

export type ContactEntry = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
};

const dataDir = path.join(process.cwd(), "data");
const dataFile = path.join(dataDir, "contacts.json");

const ensureDataFile = async () => {
  await fs.mkdir(dataDir, { recursive: true });
  try {
    await fs.access(dataFile);
  } catch {
    await fs.writeFile(dataFile, JSON.stringify([]));
  }
};

const readContacts = async (): Promise<ContactEntry[]> => {
  await ensureDataFile();
  const raw = await fs.readFile(dataFile, "utf-8");
  try {
    const parsed = JSON.parse(raw) as ContactEntry[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const writeContacts = async (contacts: ContactEntry[]) => {
  await ensureDataFile();
  await fs.writeFile(dataFile, JSON.stringify(contacts, null, 2));
};

export const addContact = async (payload: Omit<ContactEntry, "id" | "createdAt">) => {
  const contacts = await readContacts();
  const entry: ContactEntry = {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    ...payload,
  };
  contacts.unshift(entry);
  await writeContacts(contacts);
  return entry;
};

export const getContacts = async () => {
  const contacts = await readContacts();
  return contacts.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
};
