import Header from './Header'
import Content from './Content'
import Total from './Total'
import Hello from './Hello'

const App = () => {
  const name = 'Peter'
  const age = 10

  // const course = {
  //   name: 'Half Stack application development',
  //   parts: [
  //     {
  //       name: 'Fundamentals of React',
  //       exercises: 10,
  //     },
  //     {
  //       name: 'Using props to pass data',
  //       exercises: 7,
  //     },
  //     {
  //       name: 'State of a component',
  //       exercises: 14,
  //     },
  //   ],
  // }

  return (
    <div>
      {/* <Header course={course} />
      <Content parts={course.parts} />

      <Total parts={course.parts} /> */}
      <h1>Greetings</h1>
      <Hello name='Maya' age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}

export default App
