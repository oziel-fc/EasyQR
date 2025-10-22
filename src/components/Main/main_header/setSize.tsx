const setSize = (size: string) => {
    switch (size) {
        case "small": 
            return 80;
            break;
        case "mid": 
            return 120;
            break;
        case "big":
            console.log("big");
            return 180;
            break;
        default:
            return 80;
    }
}

export default setSize
