// CommomJS: Every file is a module
// Modules allows encapsulation!

const names = require("./4-names")
const haloFunc = require("./5-utils")
const data = require("./6-alternative-flavour")

require("./7-mind-grenade") 
// When you require a module, the code inside module gets executed
// but you can't access the data from that module here, since it was never exported

haloFunc(data.person.name)
haloFunc(names.omar)
haloFunc(names.ali)
haloFunc(names.maha)