import fs from "fs/promises";

const FILES_FOLDER_PATH = "files";
const OLD_FILE_NAME = "wrongFilename.txt";
const NEW_FILE_NAME = "properFilename.md";

const rename = async () => {
    const filesInDir = await fs.readdir(FILES_FOLDER_PATH);
    if (!filesInDir.find(fileName => { return fileName === NEW_FILE_NAME })) {
        await fs.rename(FILES_FOLDER_PATH + "/" + OLD_FILE_NAME, FILES_FOLDER_PATH + "/" + NEW_FILE_NAME);
    } else {
        throw new Error("FS operation failed");
    }
};

await rename();
