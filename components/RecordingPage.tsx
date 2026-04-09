export default function RecordingPage() {
  const handleOpenRecording = () => {
    // Replace with your Google Docs link
    const recordingLink = 'https://docs.google.com/document/d/YOUR_DOCUMENT_ID/edit'
    window.open(recordingLink, '_blank')
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-primary mb-2">Recording Session</h1>
          <p className="text-foreground/70 text-lg">
            Access your recording sheet
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-lg shadow-lg p-10 border border-border flex flex-col items-center justify-center min-h-96">
          <h2 className="text-2xl font-semibold text-foreground mb-8">Recording Sheet</h2>

          {/* Button */}
          <button
            onClick={handleOpenRecording}
            className="px-12 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200 text-lg"
          >
            Open Recording Sheet
          </button>
        </div>
      </div>
    </div>
  )
}
