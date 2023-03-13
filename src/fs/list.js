import * as fs from "fs/promises";

const FILES_FOLDER_PATH = "files";

const list = async () => {
    const filesInActualDir = await fs.readdir("./");
    const filesFromFolder = await fs.readdir(FILES_FOLDER_PATH);

    if (filesInActualDir.find(fileName => fileName === FILES_FOLDER_PATH)) {
        console.log(filesFromFolder);
    } else {
        throw new Error("FS operation failed");
    }
};

await list();
