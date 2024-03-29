


function getRandomSample(list, n) {
    let arr = list.slice(); // Copy the list to avoid modifying the original array
    let sample = [];

    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
    }

    sample = arr.slice(0, n); // Take the first n elements of the shuffled array
    return sample;
}


function fetchAPI(date) {
    // mock api call
    // returns an array of hours around lunchtime and dinner given a certain date
    // calls to the same date should give the same result
    let lunchHours = ['12:00', '12:30', '13:00', '13:30', '14:00', '14:30'];
    let dinnerHours = ['18:30', '19:00', '19:30', '20:00', '20:30', '21:00'];

    let num_lunch_times = Math.floor(Math.random() * (lunchHours.length + 1));
    let num_dinner_times = Math.floor(Math.random() * (dinnerHours.length + 1));
    lunchHours = getRandomSample(lunchHours, num_lunch_times);
    dinnerHours = getRandomSample(dinnerHours, num_dinner_times);
    let res = lunchHours.concat(dinnerHours).sort();
    // simulate delay
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(res);
        }, 1000);
    });
}


function submitBooking(formData){
    let res =  Math.random() < 0.9 ? true : false;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(res);
        }, 1000);
    });
}

export { fetchAPI, submitBooking };