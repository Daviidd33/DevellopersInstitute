// // const promise1 = Promise.resolve(3);
// // const promise2 = 42;
// // const promise3 = new Promise((resolve, reject) => {
// //     setTimeout(resolve, 3000, 'foo');
// // });

// // const promises = [promise1, promise2, promise3]
// // Promise.all(promises)
// //     .then((res) => console.log(res))
// //     .catch((err) => console.error(err))

// const form = document.querySelector("form")
// form.addEventListener("submit", handleForm)

// function handleForm(e) {
//     e.preventDefault()
//     // console.log(form.elements);

//     const [city1Lat, city1long, city2Lat, city2long] = [...form.elements].map((input) => input.value)
//     console.log(city1Lat);

//     const url1 = `https://api.sunrise-sunset.org/json?lat=${city1Lat}&lgn=${city1long}`;
//     // https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400
//     const url2 = `https://api.sunrise-sunset.org/json?lat=${city2Lat}&lgn=${city2long}`;

//     const promise1 = fetch(url1)
//     const promise2 = fetch(url2)

//     Promise.all([promise1, promise2])
//         .then((res) => res.json())
//         .then((res) => console.log(res))
//         .catch((error) => console.error(error))
// }