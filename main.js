const str = `
010-1234-5678
df21234@naver.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
Df212340811
abbcccdddD
`

console.log(
    str.match(/(?<=@).{1,}/g)
)