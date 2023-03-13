import * as fs from "fs/promises";

const FILES_FOLDER_PATH = "files";
const DELETABLE_FILE = "fileToRemove.txt";


const remove = async () => {
    const filesInDir = await fs.readdir(FILES_FOLDER_PATH);
    if (filesInDir.find(fileName => { return fileName === DELETABLE_FILE })) {
        await fs.rm(FILES_FOLDER_PATH + "/" + DELETABLE_FILE);
    } else {
        throw new Error("FS operation failed");
    }
};

await remove();
