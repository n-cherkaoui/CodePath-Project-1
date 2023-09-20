import './App.css';
import Card from './components/Card'

const App = () => {

  return (
    <div className="App">
      <h1>School of Software</h1>
      <div className="CardContainer">
        <Card topic = "Cloud Computing" imageLink = "src/assets/images/Cloud Computing.webp" link="https://www.idexcel.com/blog/top-ten-must-read-cloud-computing-blogs/"></Card>
        <Card topic = "Cyber Security" imageLink = "src/assets/images/Cyber Security.jpeg" link="https://www.dhs.gov/science-and-technology/cybersecurity-resources"></Card>
        <Card topic = "Database" imageLink = "src/assets/images/Database.svg" link="https://medium.com/javarevisited/7-free-courses-to-learn-database-and-sql-for-programmers-and-data-scientist-e7ae19514ed2"></Card>
        <Card topic = "Data Structures" imageLink = "src/assets/images/DSA.png" link="https://www.freecodecamp.org/news/these-are-the-best-free-courses-to-learn-data-structures-and-algorithms-in-depth-4d52f0d6b35a/"></Card>
        <Card topic = "Version Control" imageLink = "src/assets/images/gitImage.webp" link="https://www.coursera.org/learn/test-and-behavior-driven-development-tdd-bdd"></Card>
        <Card topic = "Software Architecture" imageLink = "src/assets/images/JavaSE_Software_Architecture.png" link="https://dev.to/remast/my-software-architecture-resources-g38"></Card>
        <Card topic = "OOP" imageLink = "src/assets/images/OOP.jpg" link="https://www.edx.org/learn/object-oriented-programming/"></Card>
        <Card topic = "SDLC" imageLink = "src/assets/images/SDLC_-_Software_Development_Life_Cycle.jpg" link="https://www.pagerduty.com/resources/learn/software-development-life-cycle/"></Card>
        <Card topic = "Test Driven Development" imageLink = "src/assets/images/Test-driven_development.png" link="https://technorj.com/introduction-to-test-driven-development-tdd-answers/"></Card>
        <Card topic = "Web Development" imageLink = "src/assets/images/Web Development.jpeg" link="https://dev.to/alexomeyer/top-20-web-development-learning-resources-from-beginner-to-advanced-4h8a"></Card>
      </div>
    </div>
  )
}

export default App
