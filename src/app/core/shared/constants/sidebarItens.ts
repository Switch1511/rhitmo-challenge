export const sidebarItens = [
  { name: 'Home', route: '/', icon: 'home' },
  { name: 'Usuários', route: '/', icon: 'person'},
  { name: 'Tenancies', route: '/Tenancies', icon: 'domain' },
  { name: 'Planos de Saúde', route: '/',icon: 'emergency' },
  {
      name: 'CADASTROS',
      children: [
          { name: 'Comorbidades', route: '/', icon: 'sick' },
          { name: 'Condições do Paciente', route: '/' , icon: 'personal_injury'},
          { name: 'Elegibilidade', route: '/', icon: "list" },
          { name: 'Especialidades', route: '/', icon: "medical_information"},
          { name: 'Patologias', route: '/', icon: "healing" },
          { name: 'Medicamentos', route: '/', icon: 'medication'},
      ]
  },
  { name: 'Sair', route: '', icon: 'logout'  },
];
