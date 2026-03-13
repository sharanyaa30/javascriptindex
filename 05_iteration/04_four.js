const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    switch: "swift by apple"
}

for (const key in myObject) {
    
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}


const program  = ["js", "rb", "py", "java"]

for (const key in program) {
    
    console.log(program[key]);
    
    
}

const map = new Map()

map.set('IN', 'India')
map.set('USA', "united states of india ")
map.set('fr', "france")
map.set('IN', 'India')


for (const key in map) {
    console.log(key);
    
    
    
}
