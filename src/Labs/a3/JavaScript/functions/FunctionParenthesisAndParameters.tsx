function FunctionParenthesisAndParameters() {

    const square  = (a: number) => a * a;
    const plusOne = (a: number) => a + 1;
    const twoSquared = square(2);
    const threePlusOne = plusOne(3);
    return(
        <>
            <h3> Parenthesis and parameters </h3>
            <p> twoSquared = {twoSquared} </p>
            <p> square(2) = {twoSquared} </p>
            <p> threePlusOne = {threePlusOne} </p>
            <p> plusOne(3) = {threePlusOne} </p>
        </>
    )

}

export default FunctionParenthesisAndParameters