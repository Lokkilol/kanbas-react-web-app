function ImpliedReturn() {
    const multiply = (a: number, b: number) => a * b;
    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive);
    return(
        <>
            <h3> Four Times Five Implied Function Result: </h3>
            <h4> {fourTimesFive} </h4>
        </>
    )
}


export default ImpliedReturn
