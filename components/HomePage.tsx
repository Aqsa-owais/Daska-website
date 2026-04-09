import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-24 flex items-center justify-center min-h-screen">
        {/* Logo Section */}
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="mb-8">
            <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-primary">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iCodeGuru%20Logo%20Original-j86PYpjY70XAZnu548woks156fxIw3.jpeg"
                alt="iCodeGuru Logo"
                width={128}
                height={128}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-4">
            Computer Literacy Program
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-center text-foreground/80 max-w-2xl">
            in collaboration with{' '}
            <span className="font-semibold text-primary">
              Allah Ditta Girls Higher Secondary School Daska
            </span>
          </p>
        </div>


      </div>
    </div>
  )
}
