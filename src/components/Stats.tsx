
const stats = [
  {
    number: "+100.000",
    label: "Acessos Gerados para Clientes"
  },
  {
    number: "+1 Milhão",
    label: "Visualizações em Sites Criados"
  },
  {
    number: "+30.000/mês",
    label: "Acessos Mensais Ativos"
  },
  {
    number: "Tráfego Orgânico",
    label: "Crescimento de até 70% nos Clientes"
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
