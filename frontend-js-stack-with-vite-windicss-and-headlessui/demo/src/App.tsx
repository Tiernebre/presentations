import { SurveyForm } from "./components/SurveyForm"

function App() {
  return (
    <>
      <header className="bg-green-500 p-3 text-white">
        <p>Boise Dev Meetup</p>
      </header>
      <main className="container mx-auto text-center py-5">
        <h1 className="text-5xl font-bold mb-5">HELLO BOISE DEVELOPERS AND ENGINEERS!</h1>
        <h2 className="text-2xl font-bold mb-3">I'd like you take to take a survey about the talk so far!</h2>
        <SurveyForm />
      </main>
      <footer>
      </footer>
    </>
  )
}

export default App
