export default function EducationJourney() {
  const items = [
    {
      date: "September 2019 – October 2023",
      title: "BSc. Information Technology",
      institution: "Ghana Communication Technology University – Accra, Ghana",
    },
    {
      date: "September 2009 – November 2012",
      title: "Advanced Diploma in Accounting and Finance",
      institution: "Institute of Commercial Management (ICM-UK)",
    },
  ]

  return (
    <section id="education" className="py-16 scroll-mt-20">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Education</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
          </div>

          <div className="relative mt-10">
            <div className="absolute top-0 left-[15px] sm:left-1/2 w-0.5 h-full bg-primary/30 -translate-x-1/2 z-0 rounded-full" />
            <div className="relative z-10 space-y-8">
              {items.map((item, index) => (
                <div key={index} className={`flex flex-col sm:flex-row ${index % 2 === 0 ? "sm:flex-row-reverse" : ""}`}>
                  <div className="sm:w-1/2 flex items-center justify-center sm:justify-end sm:pr-8">
                    <div className={`rounded-lg p-6 w-full bg-[#FFF8F2] border-l-4 sm:border-l-0 sm:border-r-4 border-primary dark:bg-[#2A1A0A] ${index % 2 === 0 ? "sm:border-r-0 sm:border-l-4" : ""}`}>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{item.title}</h3>
                      <p className="text-primary font-medium">{item.date}</p>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">{item.institution}</p>
                    </div>
                  </div>
                  <div className="flex sm:w-9 justify-center my-4 sm:my-0">
                    <div className="w-5 h-5 rounded-full border-4 bg-primary/30 border-background" />
                  </div>
                  <div className="sm:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
