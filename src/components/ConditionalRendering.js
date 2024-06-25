export default function ConditionalRendering({ number }) {
    let retVal = "";
    if (number === 1) {
        retVal = "Pero";
    } else if (number === 3) {
        retVal = "Đuro"
    } else {
return null;
    }

    retVal = number === 1 ? "Pero" : "Đuro";

    // return <div>Neki tekst {number} {number} </div>;

    return <div>Neki tekst {retVal} </div>;

}