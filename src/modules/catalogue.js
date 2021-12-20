import getData from "./getData";

const catalogue = () => {
    const cartBtn = document.getElementById('cart')



    cartBtn.addEventListener('click', () => {
        (getData().then((data) => {
            console.log(data);
        }))
    });
}

export default catalogue;