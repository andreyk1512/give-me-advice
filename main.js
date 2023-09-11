const fetchAdvice = async () => {
    const res = await fetch ('https://api.adviceslip.com/advice');

    const record = await res.json();

    return record?.slip?.advice ?? "-";
}

const attachAdvice = (advice) => {
    const textNode = document.createTextNode(advice);
    document.getElementById("advice").appendChild(textNode);
}

const stopLoader = () => {
    document.getElementById("loader").remove();
};

window.onload = async () => {
    const advice = await fetchAdvice();

    stopLoader();
    attachAdvice(advice);
};
