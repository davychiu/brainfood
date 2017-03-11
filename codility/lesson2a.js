// find singleton in array
// {input} int array, length > 0
// {output} int 
function solution(A) {
    let singleton = A.reduce((acc, n, i) => {
      if (!acc[n]) {
          acc[n] = 1
      } else {
          //remove it from acc
          delete acc[n]
      }
      console.log(acc)
      return acc
  }, {})
  return parseInt(Object.keys(singleton)[0])
}
