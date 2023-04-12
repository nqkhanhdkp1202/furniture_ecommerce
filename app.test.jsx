function test(fail) {
    return new Promise((resolve, reject) => {
      if (fail) {
        reject();
      } else {
        resolve();
      }
    });
  }
  
  // will print rejected 1
  test(true)
    .then(() => { console.log('resolved 1'); })
    .catch(() => { console.log('rejected 1'); })
  
  // might generate the error telling you the promise
  // was rejected but you didn't provide a catch function
  test(true)
    .then(() => { console.log('resolved 2'); })