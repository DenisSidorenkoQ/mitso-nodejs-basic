import * as fs from "fs/promises";

const FRESH_FILE_NAME = "fresh.txt";
const FILES_FOLDER_PATH = "files";

const create = async () => {
    const filesInDir = await fs.readdir(FILES_FOLDER_PATH);
    if (filesInDir.find(fileName => fileName === FRESH_FILE_NAME)) {
        throw new Error("FS operation failed");
    } else {
        await fs.writeFile(FILES_FOLDER_PATH + "/" + FRESH_FILE_NAME, "I am fresh and young");
    }
};

await create();
