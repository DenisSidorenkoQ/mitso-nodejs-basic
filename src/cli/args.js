const parseArgs = () => {
    let firstArg = process.argv[2];
    let secondArg = process.argv[3];

    console.log("PropName1 is " + firstArg);
    console.log("PropName2 is " + secondArg);
};

parseArgs();
