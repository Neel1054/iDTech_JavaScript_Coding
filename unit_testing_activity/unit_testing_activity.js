
function Greet(name){
        
    if (name === null) {
        return "Hello there!";
        }
        else if (name === name.toUpperCase() && Array.isArray(name)){
            return "HELLO, " +name.join(", ");}
    
        else if (name === name.toUpperCase()){
             return "HELLO, " +name;
        }
        else if (Array.isArray(name)){
            return "Hello, "+name.join(", ");
            }
        else { 
            return "Hello, " + name;
        }}

test('capital array', () => {
    expect(Greet(['JOHN', 'JAMES', 'JOHNNY'])).toBe("HELLO, JOHN, JAMES, JOHNNY");
});
test('normal name', ()=>{
    expect(Greet('John')).toBe("Hello, John");
});
test('null', ()=>{
    expect(Greet(null)).toBe("Hello there!");
});
test('string', () => {
    expect(Greet(['James', 'Jonathan', 'John'])).toBe("Hello James, Jonathan, John");
});
test('capital letters', ()=>{
    expect(Greet("JOHN")).toBe("HELLO, JOHN");
});