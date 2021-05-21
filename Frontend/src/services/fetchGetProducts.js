const fetchGetProducts = async () => {
    const endPoint = "https://striveschool-api.herokuapp.com/api/product/"
    const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDkyYjUyYTAyNTNhYTAwMTU5NjRhNTkiLCJpYXQiOjE2MjE1ODE1MTMsImV4cCI6MTYyMjc5MTExM30.xX1bdh-kAI426pIAHwyGgERUwH-di9UXYWKK1-jFlvY"
    const headers = {
        Authorization: 'Bearer ' + TOKEN,
    };

    try {
        const response = await fetch(endPoint, { headers });
        // console.log(response);
        const products = await response.json();
        // console.log(products);
        return products;
    } catch (error) {
        alert('You have an error in fetching products:', error);
    }
};

export default fetchGetProducts;
