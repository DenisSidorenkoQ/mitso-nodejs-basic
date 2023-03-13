import * as fs from "fs/promises";

const FILES_FOLDER_PATH = "files";
const READABLE_FILE_NAME = "fileToRead.txt";

const read = async () => {
    const filesInDir = await fs.readdir(FILES_FOLDER_PATH);

    if (filesInDir.find(fileName => { return fileName === READABLE_FILE_NAME })) {
        const text = (await fs.readFile(FILES_FOLDER_PATH + "/" + READABLE_FILE_NAME, { encoding: 'utf8' }));

        console.log(text);
    } else {
        throw new Error("FS operation failed");
    }

};

await read();
