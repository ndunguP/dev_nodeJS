const args = process.argv.slice(2);

args.forEach(arg => {
  let envVar = process.env[arg];
  if (envVar === undefined) {
  console.error('could not find "${NOT-DEFINED}" in environment');
  } else {
    console.log(envVar);
  }
});
