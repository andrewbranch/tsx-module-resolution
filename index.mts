import pkg1 from "pkg";
import pkg2 = require("pkg");

async function main() {
  console.log({
    import: pkg1,
    require: pkg2,
    dynamicImport: (await import("pkg")).default,
  });
}

main();
