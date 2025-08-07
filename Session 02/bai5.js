const response = {
    data: {
        id: 1,
        title: "Destructuring in JavaScript",
        author: {
            name: "Dev",
            email: "Dev@gmail.com",
        },
    },
};
function extractData({ data }) {
    let { title, author } = data;
    console.log(title);
    console.log(author);
    let { name, email } = author;
    console.log(name);
    console.log(email);
}
extractData(response);