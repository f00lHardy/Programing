function fractionalize(num){
    if (num < 0)
    return -1

    else if (num == 0)
    return 1;

    else {
        return (num * fractionalize(num -1));
    }
}