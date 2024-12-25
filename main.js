// • ex01.js - Write the function onlyOneWord(strs) – returns only those
// strings with a single word (no spaces)

var input = ['return', 'phrases', 'with one word'];
var expected = ['return', 'phrases']
var actual = onlyOneWord(input)
console.log('INPUT:', input, 'EXPECTED:', expected, 'ACTUAL:', actual);
function onlyOneWord(strs) {
    return strs.filter(str => !str.includes(' '));
}

// • ex02.js - Write the function reverseAll(strs) – gets an array of strings
// and returns a new array containing string reversed

var input = ['abc', 'xyz']
var expected = ['cba', 'zyx']
var actual = reverseAll(input)
console.log('INPUT:', input, 'EXPECTED:', expected, 'ACTUAL:', actual);
function reverseAll(strs) {
    return strs.map(str => str.split('').reverse().join(''))
}


// • ex03.js Write the function capitalizeLongerThan5(strs) – gets an
// array of strings and returns a new array in which strings that are
// longer than 5 are capitalized (starts with uppercase)

var input = ['abcdefg', 'xyz'];
var expected = ['Abcdefg', 'xyz']
var actual = capitalizeLongerThan5(input)
console.log('INPUT:', input, 'EXPECTED:', expected, 'ACTUAL:', actual);
function capitalizeLongerThan5(strs) {
    return strs.map(str => str.length > 5 ? str[0].toUpperCase() + str.slice(1) : str)
}


// • ex04.js Write the function onlyVowels(strs) – gets an array of strings
// and returns a new array containing only vowels from each string:

var input = ['average', 'exceptional', 'amazing'];
var expected = ['aeae', 'eeioa', 'aai']
var actual = onlyVowels(input)
console.log('INPUT:', input, 'EXPECTED:', expected, 'ACTUAL:', actual);
function onlyVowels(strs) {
    return strs.map(str => str.split('').filter(char => 'aeiou'.includes(char)).join(''))
}

// bonus01.js Bonus: Write the function doubleMatrix(mat) – that
// doubles the numbers in the matrix, maintaining the same structure
// • Make sure you don’t change the original matrix.

var input =
    [[1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]];
var expected =
    [[2, 4, 6],
    [8, 10, 12],
    [14, 16, 18]];
var actual = doubleMatrix(input)
console.log('INPUT:', input, 'EXPECTED:', expected, 'ACTUAL:', actual)
function doubleMatrix(mat) {
    return mat.map(row => row.map(num => num * 2))
}

// array.find and array.findIndex
// Managing an array of movies:
// ex-movies.js
var gMovies = [
    { imdb: 'tt0373889', name: 'Harry Potter', rate: 17 },
    { imdb: 'tt0000004', name: 'Un bon bock', rate: 20 },
    { imdb: 'tt0000003', name: 'Pauvre Pierrot', rate: 15 },
]
// Write the following functions:
// • getMovieLink(imdb) that returns a link to that movie, the function
// returns an HTML like:
// <a href="https://www.imdb.com/title/tt0073052/">Harry Potter</a>'

var imdb = 'tt0373889'
var res = getMovieLink(imdb)
console.log(res)
function getMovieLink(imdb) {
    const movie = gMovies.find(movie => movie.imdb === imdb);
    return `<a href="https://www.imdb.com/title/${imdb}/">${movie.name}</a>`
}
// • deleteMovie(imdb) that removes a movie from the array
// TIP: use findIndex
// • Code the functions: sortByName, sortByRate

deleteMovie('tt0373889')
console.log(gMovies)
function deleteMovie(imdb) {
    const idx = gMovies.findIndex(movie => movie.imdb === imdb)
    gMovies.splice(idx, 1)
}


// array.every and array.some
// ex-every-some.js

// 1. Write a function allPassed(students) that gets an array of students
// (name, grade) and returns true if they all passed (grade >= 70)
var students = [
    { name: 'Alice', grade: 80 },
    { name: 'Bob', grade: 90 },
    { name: 'Charlie', grade: 60 },
]
var res = allPassed(students)
console.log(res)
function allPassed(students) {
    return students.every(student => student.grade >= 70)
}

// 2. Write a function isGameOn(players) that gets an array of players
// (name,isAlive) and returns true if one of them is still alive

var players = [
    { name: 'Alice', isAlive: false },
    { name: 'Bob', isAlive: false },
    { name: 'Charlie', isAlive: true },
]

var res = isGameOn(players)
console.log(res)
function isGameOn(players) {
    return players.some(player => player.isAlive)
}

// 3. Write a function isMatrix(arr2d) that gets a 2d array and validate
// that it is a matrix (= all rows are of the same length)
var input = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9, 7]];
var res = isMatrix(input)
console.log(res)
function isMatrix(arr2d) {
    return arr2d.every((row, idx, arr) => row.length === arr[0].length)
}

// 4. Bonus: Write a function isWide(arr2d) that gets a 2d array and check
// that at least one of its rows has more than 5 column
var input = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9, 7, 5, 8],]
var res = isWide(input)
console.log(res)
function isWide(arr2d) {
    return arr2d.some(row => row.length > 5)
}
// 5. Bonus: Write the function positiveRowsOnly (mat) – return only the
// rows in the matrix that have all positive integers
// TIP: use filter and every
var input = [[1, 10, -100],
[2, -20, 200],
[3, 30, 300]];
var expected = [[3, 30, 300]];
var actual = positiveRowsOnly(input)
console.log('INPUT:', input, 'EXPECTED:', expected, 'ACTUAL:', actual)
function positiveRowsOnly(mat) {
    return mat.filter(row => row.every(num => num > 0))
}

// Consider the following data structure:
var emps = [
    {
        name: 'Joe Schmoe',
        yearsExperience: 5,
        department: 'IT'
    },
    {
        name: 'Sally Sallerson',
        yearsExperience: 15,
        department: 'Engineering'
    },
    {
        name: 'Bill Billson',
        yearsExperience: 5,
        department: 'Engineering'
    },
    {
        name: 'Jane Janet',
        yearsExperience: 15,
        department: 'Management'
    },
    {
        name: 'Bob Hope',
        yearsExperience: 9,
        department: 'IT'
    }
]

// Use reducers to calculate the following:
// ● All experience sum

var totalExperience = emps.reduce((acc, emp) => acc + emp.yearsExperience, 0)
console.log(totalExperience)

// ● Sum each department's collective experience
//     (create a map object dept -> experience)

var deptExperience = emps.reduce((acc, emp) => {
    if (!acc[emp.department]) acc[emp.department] = 0
    acc[emp.department] += emp.yearsExperience
    return acc
}, {})
console.log(deptExperience)

// ● Group employees by experience(an object in which the key is a
// number and the value is an array of employee objects)
//     (create a map object experience -> { key: [{ employee }, { employee }] })
var experienceGroups = emps.reduce((acc, emp) => {
    if (!acc[emp.yearsExperience]) acc[emp.yearsExperience] = []
    acc[emp.yearsExperience].push(emp)
    return acc
}, {})
console.log(experienceGroups)


// ● Count the number of employees in each department
//     (create a map object dept -> empCount

var deptEmpCount = emps.reduce((acc, emp) => {
    if (!acc[emp.department]) acc[emp.department] = 0
    acc[emp.department]++
    return acc
}, {})
console.log(deptEmpCount)

//     2. Write a function findModes(values) that gets an array and uses
//     Array.reduce to create a map and then prints the numbers that occur most
//     often.

var values = [1, 2, 3, 4, 5, 1, 2, 3, 1, 2, 1]
var modes = findModes(values)
console.log(modes)
function findModes(values) {
    const modes = values.reduce((acc, val) => {
        if (!acc[val]) acc[val] = 0
        acc[val]++
        return acc
    }, {})
    const max = Math.max(...Object.values(modes))
    return Object.keys(modes).filter(key => modes[key] === max)
}

//     3. Write a function flatten(values) that flattens the array, meaning that
//     if an item in this array is an array, it will push all its values to the result
// array.
var input = ['Hello', [9, 6], 18, [4, 7, 8]]
// output: [‘Hello’, 9, 6, 18, 4, 7, 8]
// c.support only one level of nested values
// d.Bonus: use recursion to support any level

var res = flatten(input)
console.log(res)
function flatten(values) {
    return values.reduce((acc, val) => acc.concat(val), [])
}







