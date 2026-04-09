export default function AssessmentsPage() {
  // Quiz 1 - Add your link here
  const handleQuiz1 = () => {
    window.open('https://your-quiz-1-link-here.com', '_blank')
  }

  // Quiz 2 - Add your link here
  const handleQuiz2 = () => {
    window.open('https://your-quiz-2-link-here.com', '_blank')
  }

  // Quiz 3 - Add your link here
  const handleQuiz3 = () => {
    window.open('https://your-quiz-3-link-here.com', '_blank')
  }

  // Quiz 4 - Add your link here
  const handleQuiz4 = () => {
    window.open('https://your-quiz-4-link-here.com', '_blank')
  }

  // Quiz 5 - Add your link here
  const handleQuiz5 = () => {
    window.open('https://your-quiz-5-link-here.com', '_blank')
  }

  // Quiz 6 - Add your link here
  const handleQuiz6 = () => {
    window.open('https://your-quiz-6-link-here.com', '_blank')
  }

  // Quiz 7 - Add your link here
  const handleQuiz7 = () => {
    window.open('https://your-quiz-7-link-here.com', '_blank')
  }

  // Quiz 8 - Add your link here
  const handleQuiz8 = () => {
    window.open('https://your-quiz-8-link-here.com', '_blank')
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-primary mb-2">Assessments</h1>
          <p className="text-foreground/70 text-lg">
            Complete quizzes to test your knowledge
          </p>
        </div>

        {/* Quizzes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Quiz 1 */}
          <div className="bg-white rounded-lg shadow-md border border-border overflow-hidden hover:shadow-lg transition-shadow p-6 flex flex-col items-center justify-center min-h-40">
            <h3 className="text-xl font-bold text-primary mb-6">Quiz 1</h3>
            <button
              onClick={handleQuiz1}
              className="w-full px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Start Quiz
            </button>
          </div>

          {/* Quiz 2 */}
          <div className="bg-white rounded-lg shadow-md border border-border overflow-hidden hover:shadow-lg transition-shadow p-6 flex flex-col items-center justify-center min-h-40">
            <h3 className="text-xl font-bold text-primary mb-6">Quiz 2</h3>
            <button
              onClick={handleQuiz2}
              className="w-full px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Start Quiz
            </button>
          </div>

          {/* Quiz 3 */}
          <div className="bg-white rounded-lg shadow-md border border-border overflow-hidden hover:shadow-lg transition-shadow p-6 flex flex-col items-center justify-center min-h-40">
            <h3 className="text-xl font-bold text-primary mb-6">Quiz 3</h3>
            <button
              onClick={handleQuiz3}
              className="w-full px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Start Quiz
            </button>
          </div>

          {/* Quiz 4 */}
          <div className="bg-white rounded-lg shadow-md border border-border overflow-hidden hover:shadow-lg transition-shadow p-6 flex flex-col items-center justify-center min-h-40">
            <h3 className="text-xl font-bold text-primary mb-6">Quiz 4</h3>
            <button
              onClick={handleQuiz4}
              className="w-full px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Start Quiz
            </button>
          </div>

          {/* Quiz 5 */}
          <div className="bg-white rounded-lg shadow-md border border-border overflow-hidden hover:shadow-lg transition-shadow p-6 flex flex-col items-center justify-center min-h-40">
            <h3 className="text-xl font-bold text-primary mb-6">Quiz 5</h3>
            <button
              onClick={handleQuiz5}
              className="w-full px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Start Quiz
            </button>
          </div>

          {/* Quiz 6 */}
          <div className="bg-white rounded-lg shadow-md border border-border overflow-hidden hover:shadow-lg transition-shadow p-6 flex flex-col items-center justify-center min-h-40">
            <h3 className="text-xl font-bold text-primary mb-6">Quiz 6</h3>
            <button
              onClick={handleQuiz6}
              className="w-full px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Start Quiz
            </button>
          </div>

          {/* Quiz 7 */}
          <div className="bg-white rounded-lg shadow-md border border-border overflow-hidden hover:shadow-lg transition-shadow p-6 flex flex-col items-center justify-center min-h-40">
            <h3 className="text-xl font-bold text-primary mb-6">Quiz 7</h3>
            <button
              onClick={handleQuiz7}
              className="w-full px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Start Quiz
            </button>
          </div>

          {/* Quiz 8 */}
          <div className="bg-white rounded-lg shadow-md border border-border overflow-hidden hover:shadow-lg transition-shadow p-6 flex flex-col items-center justify-center min-h-40">
            <h3 className="text-xl font-bold text-primary mb-6">Quiz 8</h3>
            <button
              onClick={handleQuiz8}
              className="w-full px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
