export default function CourseOutline() {
  const handleOpenCourseOutline = () => {
    // Replace with your Google Docs link
    const courseLink = 'https://docs.google.com/document/d/166EqZXWrDjt4uIbvNzKljbQDrNI-RtKtds7kNeU8q0U/edit?tab=t.0'
    window.open(courseLink, '_blank')
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-primary mb-2">Course Outline</h1>
          <p className="text-foreground/70 text-lg">
            Access the complete course outline
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-lg shadow-lg p-10 border border-border flex flex-col items-center justify-center min-h-96">
          <h2 className="text-2xl font-semibold text-foreground mb-8">Course Outline Document</h2>

          {/* Button */}
          <button
            onClick={handleOpenCourseOutline}
            className="px-12 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200 text-lg"
          >
            Open Course Outline
          </button>
        </div>
      </div>
    </div>
  )
}
