const stats = [
  {
    number: "500+",
    label: "Sites Criados"
  },
  {
    number: "98%",
    label: "Clientes Satisfeitos"
  },
  {
    number: "24h",
    label: "Tempo de Resposta"
  },
  {
    number: "5+",
    label: "Anos de Experiência"
  }
]

export const Stats = () => {
  return (
    <section className="py-16 bg-gradient-blue-purple relative overflow-hidden">
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-blue-200 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}