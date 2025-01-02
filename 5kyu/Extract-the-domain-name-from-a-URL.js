// Extract the domain name from a URL

// DESCRIPTION:
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = "cnet"

// SOLUTIONS:
function domainName(url) {
  return url
    .replace(/^https?:\/\/(www\.)?/, "")
    .replace(/^www\./, "")
    .split(".")[0];
}

// 2
// function domainName(url) {
//   let cleanUrl = url
//     .replace("http://", "")
//     .replace("https://", "")
//     .replace("www.", "");
//   return cleanUrl.split(".")[0];
// }

// EXAMPLES:
console.log(domainName("http://github.com/carbonfive/raygun")); // "github"
console.log(domainName("http://www.zombie-bites.com")); // "zombie-bites"
console.log(domainName("https://www.cnet.com")); // "cnet"
console.log(domainName("icann.org")); // "icann"
console.log(domainName("www.abra-cadabra.ua")); // "abra-cadabra"
