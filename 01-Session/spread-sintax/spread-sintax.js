const parts = ['shoulders', 'knees']; 
const lyrics = ['head', ...parts, 'and', 'toes']; 

//otro ejemplo
function sum(x, y, z) {
    return x + y + z;
}
const nums = [3, 7, 9];
const res = sum(...nums);