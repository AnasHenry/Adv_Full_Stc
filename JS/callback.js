databaseSharing = () => {
  console.log("Data stored successfully");
};

function submitFrom(Formmsg, dbs) {
  setTimeout(() => {
    dbs();
    console.log(Formmsg);
  }, 10000);
}

submitFrom("Form submitted succesfully", databaseSharing);
